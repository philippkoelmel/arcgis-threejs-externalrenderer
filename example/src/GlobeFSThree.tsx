import * as externalRenderers from "@arcgis/core/views/3d/externalRenderers";
import { WebGLRenderer, Scene, Matrix4, BoxGeometry, Mesh, Clock, MathUtils, MeshStandardMaterial, Material, BufferGeometry } from "three";
import SpatialReference from "@arcgis/core/geometry/SpatialReference"
import { ExternalRendererThreeCallback } from "@philippkoelmel/arcgis-threejs-externalrenderer";

class GlobeFSThree implements ExternalRendererThreeCallback {

    private clock: Clock = new Clock();
    private mesh?: Mesh<BufferGeometry, Material>;

    private radiansPerSecond: number = MathUtils.degToRad(30);;

    setup(context: any, renderer: WebGLRenderer, scene: Scene): void {
        let geometry = new BoxGeometry(100, 100, 100);
        let material = new MeshStandardMaterial({
            color: 0xFF0000,
            flatShading: true,
        });

        this.mesh = new Mesh(geometry, material);
        scene.add(this.mesh);

        let WGS84Position = [9.993, 53.679, 0];

        context.view.goTo({
            target: [WGS84Position[0], WGS84Position[1]],
            zoom: 14,
        });

        let transformation = new Array(16);
        externalRenderers.renderCoordinateTransformAt(context.view, WGS84Position, SpatialReference.WGS84, transformation);
        this.mesh.applyMatrix4(new Matrix4().fromArray(transformation));
    }

    render(context: any): void {
        const clockDelta = this.clock.getDelta();

        //this.mesh!.geometry.rotateX(this.radiansPerSecond * clockDelta);
        this.mesh!.geometry.rotateY(this.radiansPerSecond * clockDelta);
        //this.mesh!.geometry.rotateZ(this.radiansPerSecond * clockDelta);
    }

    dispose(context: any): void {
        this.mesh!.material.dispose();
        this.mesh!.geometry.dispose();
    }
}

export default GlobeFSThree;