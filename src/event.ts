import {RequiredAction, TaskIdAction} from './actions';
import {CleanupFunc, RenderFunc} from './ui';

export interface ThirdPartyAppEventListener {
    listenOnShowRequiredActions(callback: (onActionComplete: () => void) => Promise<RequiredAction[]>): void;

    listenOnShowTaskIdActions(callback: (taskId: number) => TaskIdAction[]): void;

    listenOnShowAppSetting(callback: RenderFunc): void;
}

export interface ThirdPartyAppEventPublisher {
    onShowRequiredActions(onActionComplete: () => void): Promise<RequiredAction[]>;

    onShowTaskIdActions(taskId: number): TaskIdAction[];

    onShowAppSetting(container: HTMLElement): CleanupFunc | undefined;
}

export class ThirdPartyAppEventHub implements ThirdPartyAppEventListener, ThirdPartyAppEventPublisher {
    private readonly _appId: number;
    private onShowRequiredActionsCallback?: (onActionComplete: () => void) => Promise<RequiredAction[]>;
    private onShowTaskIdActionsCallback?: (taskId: number) => TaskIdAction[];
    private onShowAppSettingCallback?: RenderFunc;

    constructor(_appId: number) {
        this._appId = _appId;
    }

    public get appId(): number {
        return this._appId;
    }

    public listenOnShowRequiredActions(callback: (onActionComplete: () => void) => Promise<RequiredAction[]>): void {
        this.onShowRequiredActionsCallback = callback;
    }

    public onShowRequiredActions(onActionComplete: () => void): Promise<RequiredAction[]> {
        return this.onShowRequiredActionsCallback?.(onActionComplete) || Promise.resolve([]);
    }

    public listenOnShowTaskIdActions(callback: (taskId: number) => TaskIdAction[]): void {
        this.onShowTaskIdActionsCallback = callback;
    }

    public onShowTaskIdActions(taskId: number): TaskIdAction[] {
        return this.onShowTaskIdActionsCallback?.(taskId) || [];
    }

    public listenOnShowAppSetting(callback: RenderFunc): void {
        this.onShowAppSettingCallback = callback;
    }

    public onShowAppSetting(container: HTMLElement): CleanupFunc | undefined {
        return this.onShowAppSettingCallback?.(container);
    }
}