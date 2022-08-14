export interface ExtensionRuntime {
    getAssetUrl(relativePath: string): string;
    getAccessToken(): string;
    linkAccount(authProvider: string): void;
}