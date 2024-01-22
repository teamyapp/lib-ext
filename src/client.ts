import {ReactNode} from 'react';

export interface ThirdPartyAppClient {
    getTeamId(): number | undefined;
    getAccessToken(): string | undefined;
    linkAccount(authProvider: string): void;
    getResourceUrl(appPacketRelativePath: string): string;
    getTaskPath(teamId: number, taskId: number): string;
    showDynamicFeedback(feedbackView: ReactNode): void;
}