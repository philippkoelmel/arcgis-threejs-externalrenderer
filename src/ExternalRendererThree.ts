import * as THREE from 'three';
import * as externalRenderers from "@arcgis/core/views/3d/externalRenderers";
import ExternalRendererThreeCallback from './ExternalRendererThreeCallback';
import SceneView from '@arcgis/core/views/SceneView';

// based on old threejs example here: https://totalapis.github.io/sample-code/sandbox/index.html?sample=scene-external-renderer-threejs
class ExternalRendererThreeClass {
    private static instance: ExternalRendererThreeClass;

    private threeMain?: ExternalRendererThreeCallback;

    private renderer?: THREE.WebGLRenderer;
    private scene: THREE.Scene = new THREE.Scene();
    private camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera();
    private ambient: THREE.AmbientLight = new THREE.AmbientLight(0xffffff, 0.5);
    private sun: THREE.DirectionalLight = new THREE.DirectionalLight(0xffffff, 0.5);

    private constructor() {
        // intentionally empty
    }

    public static get Instance() {
        return this.instance || (this.instance = new this());
    }

    public start(view: SceneView, threeMain: ExternalRendererThreeCallback): void {
        this.threeMain = threeMain;
        externalRenderers.add(view, this);
    }

    public setup(context?: any): void {

        if (!context) {
            throw new Error("no context passed to setup, cannot work that way");
        }
        if (this.threeMain === undefined) {
            throw new Error("no implementation for the actual Three content found, intentional? Did not call start?");
        }

        this.renderer = new THREE.WebGLRenderer({
            context: context.gl,
            premultipliedAlpha: false,
            preserveDrawingBuffer: true,
        });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setViewport(0, 0, context.view.width, context.view.height);
        this.renderer.autoClear = false;

        // setup scene lighting
        this.scene.add(this.ambient);
        this.scene.add(this.sun);

        this.threeMain!.setup(context, this.renderer, this.scene);

        context.resetWebGLState();
    }

    public render(context?: any): void {
        this.camera.position.set(context.camera.eye[0], context.camera.eye[1], context.camera.eye[2]);
        this.camera.up.set(context.camera.up[0], context.camera.up[1], context.camera.up[2]);
        this.camera.lookAt(
            new THREE.Vector3(context.camera.center[0], context.camera.center[1], context.camera.center[2])
        );

        this.camera.projectionMatrix.fromArray(context.camera.projectionMatrix);

        var sunLight = context.sunLight;
        this.sun.position.set(
            sunLight.direction[0],
            sunLight.direction[1],
            sunLight.direction[2]
        );
        this.sun.intensity = sunLight.diffuse.intensity;
        this.sun.color = new THREE.Color(
            sunLight.diffuse.color[0],
            sunLight.diffuse.color[1],
            sunLight.diffuse.color[2]
        );

        this.ambient.intensity = sunLight.ambient.intensity;
        this.ambient.color = new THREE.Color(
            sunLight.ambient.color[0],
            sunLight.ambient.color[1],
            sunLight.ambient.color[2]
        );

        this.threeMain!.render(context);

        this.renderer!.resetState();
        context.bindRenderTarget();
        this.renderer!.render(this.scene, this.camera);

        externalRenderers.requestRender(context.view);

        context.resetWebGLState();
    }

    public dispose(context?: any): void {
        this.threeMain!.dispose(context);
        this.scene.remove(this.ambient);
        this.scene.remove(this.sun);
        this.ambient.dispose();
        this.sun.dispose();
        this.renderer!.dispose();
    }
}

export default ExternalRendererThreeClass.Instance;