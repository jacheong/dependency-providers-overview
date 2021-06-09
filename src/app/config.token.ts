import { InjectionToken } from '@angular/core';

export interface AppConfig {
    experimentalEnabled: boolean;
}

/**
 * The value of creating a provider using a custom injectionToken and interface means that it is possible to pass any typed objects between
 * services or components. This interface can represnt configs or even component states where the component implements this same interface
 */
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config', {
    providedIn: 'root',
    factory: () => ({
        experimentalEnabled: true
    })
});