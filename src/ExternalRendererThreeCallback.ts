import { WebGLRenderer, Scene } from "three";

interface ExternalRendererThreeCallback {
    setup(context: any, renderer: WebGLRenderer, scene: Scene): void;
    render(context: any): void;
    dispose(context: any): void;
}

export default ExternalRendererThreeCallback;