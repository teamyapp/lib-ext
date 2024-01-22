import {RequiredActions, TaskIdAction} from './actions';
import {ReactNode} from 'react';

export interface ThirdPartyAppEventListener {
    listenOnShowRequiredActions(callback: (onActionComplete: () => void) => Promise<RequiredActions[]>): void;

    listenOnShowTaskIdActions(callback: (taskId: number) => TaskIdAction[]): void;

    listenOnShowAppSetting(callback: () => ReactNode): void;
}

export interface ThirdPartyAppEventPublisher {
    onShowRequiredActions(onActionComplete: () => void): Promise<RequiredActions[]>;

    onShowTaskIdActions(taskId: number): TaskIdAction[];

    onShowAppSetting(): ReactNode;
}

export class ThirdPartyAppEventHub implements ThirdPartyAppEventListener, ThirdPartyAppEventPublisher {
    private readonly _appId: number;
    private onShowRequiredActionsCallback?: (onActionComplete: () => void) => Promise<RequiredActions[]>;
    private onShowTaskIdActionsCallback?: (taskId: number) => TaskIdAction[];
    private onShowAppSettingCallback?: () => ReactNode;

    constructor(_appId: number) {
        this._appId = _appId;
    }

    public get appId(): number {
        return this._appId;
    }

    public listenOnShowRequiredActions(callback: (onActionComplete: () => void) => Promise<RequiredActions[]>): void {
        this.onShowRequiredActionsCallback = callback;
    }

    public onShowRequiredActions(onActionComplete: () => void): Promise<RequiredActions[]> {
        return this.onShowRequiredActionsCallback?.(onActionComplete) || Promise.resolve([]);
    }

    public listenOnShowTaskIdActions(callback: (taskId: number) => TaskIdAction[]): void {
        this.onShowTaskIdActionsCallback = callback;
    }

    public onShowTaskIdActions(taskId: number): TaskIdAction[] {
        return this.onShowTaskIdActionsCallback?.(taskId) || [];
    }

    public listenOnShowAppSetting(callback: () => ReactNode): void {
        this.onShowAppSettingCallback = callback;
    }

    public onShowAppSetting(): ReactNode {
        return this.onShowAppSettingCallback?.();
    }
}