import {RenderFunc} from './ui';

export interface ThirdPartyAppClient {
    getTeamId(): number | undefined;
    getAccessToken(): string | undefined;
    linkAccount(authProvider: string): void;
    getResourceUrl(appPacketRelativePath: string): string;
    getTaskPath(teamId: number, taskId: number): string;
    showDynamicFeedback(renderFunc: RenderFunc): void;
}