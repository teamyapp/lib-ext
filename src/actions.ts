import {ReactNode} from 'react';

export interface RequiredActions {
    actionName: string;
    view: ReactNode;
}

export interface TaskIdAction {
    key: string;
    view: ReactNode;
    execute: (taskId: number) => void;
}