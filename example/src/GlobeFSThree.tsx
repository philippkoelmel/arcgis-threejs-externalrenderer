import * as externalRenderers from "@arcgis/core/views/3d/externalRenderers";
import { WebGLRenderer, Scene, BoxGeometry, Mesh, Clock, MathUtils, MeshPhongMaterial, Material, BufferGeometry } from "three";
import SpatialReference from "@arcgis/core/geometry/SpatialReference"
import { ExternalRendererThreeCallback } from "@philippkoelmel/arcgis-threejs-externalrenderer";

class GlobeFSThree implements ExternalRendererThreeCallback {

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

export default GlobeFSThree;