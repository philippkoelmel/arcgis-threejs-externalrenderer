# Arcgis three.js external renderer

Takes away the boilerplate from integrating Three.js to ArcGIS. See a the [example](./example) running live [here](https://philippkoelmel.github.io/arcgis-threejs-externalrenderer/).

## Install

```bash
npm install @philippkoelmel/arcgis-threejs-externalrenderer
```

## Usage

The code here is from the [example](./example).

This module exposes a convenient wrapper around ArcGIS's [externalRenderers](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-3d-externalRenderers.html) and an interface which you implement to manage your Three.js scene.

Let us implement the [interface ExternalRendererThreeCallback](./src/ExternalRendererThreeCallback.ts) first:
```typescript
import * as externalRenderers from "@arcgis/core/views/3d/externalRenderers";
import { WebGLRenderer, Scene, Matrix4, BoxGeometry, Mesh, Clock, MathUtils, MeshStandardMaterial, Material, BufferGeometry } from "three";
import SpatialReference from "@arcgis/core/geometry/SpatialReference"
import Point from "@arcgis/core/geometry/Point"
import { ExternalRendererThreeCallback } from "@philippkoelmel/arcgis-threejs-externalrenderer";

class Example implements ExternalRendererThreeCallback {

    private clock: Clock = new Clock();
    private mesh?: Mesh<BufferGeometry, Material>;

    private radiansPerSecond: number = MathUtils.degToRad(30);;

    setup(context: any, renderer: WebGLRenderer, scene: Scene): void {
        let geometry = new BoxGeometry(100, 100, 100);
        let material = new MeshStandardMaterial({
            color: 0xFF0000,
            flatShading: true,
        });

        let WGS84Position = [10.544538805374891, 46.50861247649143, 0];

        context.view.goTo({
            target: [WGS84Position[0], WGS84Position[1]],
            zoom: 14,
        });

        context.view.map.ground.queryElevation(new Point({
            longitude: WGS84Position[0],
            latitude: WGS84Position[1]
        }), {
            returnSampleInfo: true
        }).then((result: any) => {
            let elevation: number = result.geometry.z;
            WGS84Position[2] = elevation;

            let transformation = new Array(16);
            externalRenderers.renderCoordinateTransformAt(context.view, WGS84Position, SpatialReference.WGS84, transformation);

            this.mesh = new Mesh(geometry, material);
            scene.add(this.mesh);

            this.mesh.applyMatrix4(new Matrix4().fromArray(transformation));

        }).catch((error: any) => {
            console.error("Failed to query elevation:", error);
        });;
    }

    render(context: any): void {
        const clockDelta = this.clock.getDelta();

        if (this.mesh !== undefined) {
            this.mesh.geometry.rotateY(this.radiansPerSecond * clockDelta);
        }
    }

    dispose(context: any): void {
        if (this.mesh !== undefined) {
            this.mesh.material.dispose();
            this.mesh.geometry.dispose();
        }
    }
}

export default Example;
```
This will create a rotating red box on the ground.

Now you need to tell ArcGIS to execute this implementation, here an example for that:
```typescript
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import config from "@arcgis/core/config";
import Example from './Example';
import { ExternalRendererThree } from "@philippkoelmel/arcgis-threejs-externalrenderer";

[...]
    const map = new Map({
      basemap: "arcgis-topographic",
      ground: "world-elevation"
    });

    const view = new SceneView({
      container: "arcgis_view",
      map: map,
      viewingMode: "global",
      camera: {
        position: {
          x: -9932671,
          y: 2380007,
          z: 1687219,
          spatialReference: { wkid: 102100 }
        },
        heading: 0,
        tilt: 35
      },
    });
    if (view.environment.lighting !== undefined) {
      view.environment.lighting.cameraTrackingEnabled = false;
      view.environment.lighting.date = new Date();
    }

    ExternalRendererThree.start(view, new Example());
[...]
```

The key lines are:
```typescript
[...]
import Example from './Example';
import { ExternalRendererThree } from "@philippkoelmel/arcgis-threejs-externalrenderer";
[...]
ExternalRendererThree.start(view, new Example());
[...]
```

The [ExternalRendererThree.start](src/ExternalRendererThree.ts) method will fill in the boilerplate code for you and connect implementation with ArcGIS.