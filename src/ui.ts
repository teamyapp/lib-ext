export type CleanupFunc = () => void;
export type RenderFunc = (container: HTMLElement) => CleanupFunc;