export interface ExtensionConfig {
    hasSettings: boolean;
}

export interface Dependencies {
    getAccessToken(): string;
}

export interface RequiredActionProps {
    container: Element;
    onActionComplete?: () => void;
}

export interface RequiredAction {
    name(): string;

    renderView(props: RequiredActionProps): void;
}

export interface UiExtension {
    name(): string;

    init(deps: Dependencies): void;

    requiredActions(teamId: number): Promise<RequiredAction[]>;

    renderSettingsView?(teamId: number, container: Element): void;
}
