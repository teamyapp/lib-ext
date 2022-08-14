import { RequiredAction } from './requiredAction';
import { ExtensionRuntime } from './runtime';

export interface Extension {
    name(): string;

    init(runtime: ExtensionRuntime): void;

    requiredActions(teamId: number): Promise<RequiredAction[]>;

    renderSettingsView?(teamId: number, container: Element): void;
}
