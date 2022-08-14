export interface RequiredActionProps {
    container: Element;
    onActionComplete?: () => void;
}

export interface RequiredAction {
    name(): string;

    renderView(props: RequiredActionProps): void;
}