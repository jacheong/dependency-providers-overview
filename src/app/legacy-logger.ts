import { Logger } from './logger';

export const LegacyLogger: Logger = {
    prefix: 'legacy root',
    log(message: string) {
        console.log(`${this.prefix} (legacy): ${message}`);
    }
};