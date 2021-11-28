# Arcgis three.js external renderer

Takes away the boilerplate from integrating Three.js to ArcGIS.

## Install

```bash
npm install @philippkoelmel/arcgis-threejs-externalrenderer
```

## Usage

This module exposes a convenient wrapper around ArcGIS's [externalRenderers](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-3d-externalRenderers.html) and an interface which you implement to manage your Three.js scene.

Let us implement the [interface ExternalRendererThreeCallback](./src/ExternalRendererThreeCallback.ts) first:
```typescript
import * as externalRenderers from "@arcgis/core/views/3d/externalRenderers";
import { WebGLRenderer, Scene, BoxGeometry, Mesh, Clock, MathUtils, MeshPhongMaterial, Material, BufferGeometry } from "three";
import SpatialReference from "@arcgis/core/geometry/SpatialReference"
import { ExternalRendererThreeCallback } from "@philippkoelmel/arcgis-threejs-externalrenderer";

class Example implements ExternalRendererThreeCallback {

    private clock: Clock = new Clock();
    private mesh?: Mesh<BufferGeometry, Material>;

    private radiansPerSecond: number = MathUtils.degToRad(30);;

    setup(context: any, renderer: WebGLRenderer, scene: Scene): void {
        let geometry = new BoxGeometry(10000, 10000, 10000);
        let material = new MeshPhongMaterial({
            color: 0xFF0000,
            flatShading: true,
        });

        this.mesh = new Mesh(geometry, material);
        this.mesh.scale.set(10, 10, 10);
        scene.add(this.mesh);

        let posEst = [9.993, 53.679, 400000];
        let renderPos = [0, 0, 0];
        externalRenderers.toRenderCoordinates(context.view, posEst, 0, SpatialReference.WGS84, renderPos, 0, 1);

        this.mesh.position.set(renderPos[0], renderPos[1], renderPos[2]);

        context.view.goTo({
            target: [posEst[0], posEst[1]],
            zoom: 5,
        });
    }

    render(context: any): void {
        const clockDelta = this.clock.getDelta();

        this.mesh!.rotation.x += this.radiansPerSecond * clockDelta;
        this.mesh!.rotation.y += this.radiansPerSecond * clockDelta;
        this.mesh!.rotation.z += this.radiansPerSecond * clockDelta;
    }

    dispose(context: any): void {
        this.mesh!.material.dispose();
        this.mesh!.geometry.dispose();
    }
}

export default Example;
```
This will create a rotating red box 400km above ground.

Now you need to tell ArcGIS to execute this implementation, here an example for that:
```typescript
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import config from "@arcgis/core/config";
import Example from './Example';
import { ExternalRendererThree } from "@philippkoelmel/arcgis-threejs-externalrenderer";

[...]
    const map = new Map({
      basemap: "arcgis-light-gray"
    });

    const view = new SceneView({
      container: "arcgis_view",
      map: map,
      viewingMode: "global",
      camera: {
        // ??
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