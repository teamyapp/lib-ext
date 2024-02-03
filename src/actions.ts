import {ReactNode} from 'react';

export interface RequiredAction {
    actionName: string;
    view: ReactNode;
}

export interface TaskIdAction {
    key: string;
    view: ReactNode;
    execute: () => void;
}