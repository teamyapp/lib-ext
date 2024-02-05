import {RenderFunc} from './ui';

export interface RequiredAction {
    actionName: string;
    renderView: RenderFunc;
}

export interface TaskIdAction {
    key: string;
    renderView: RenderFunc;
    execute: () => void;
}