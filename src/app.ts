import {ThirdPartyAppClient} from './client';
import {ThirdPartyAppEventListener} from './event';

export interface ThirdPartyAppDeps {
    eventListener: ThirdPartyAppEventListener;
    client: ThirdPartyAppClient;
}

export interface ThirdPartyApp {
    name(): string;
    init(deps: ThirdPartyAppDeps): void;
}