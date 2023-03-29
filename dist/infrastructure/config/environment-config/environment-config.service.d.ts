import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from '../../../domain/config/database.interface';
export declare class EnvironmentConfigService implements DatabaseConfig {
    private configService;
    constructor(configService: ConfigService);
    getDatabaseUri(): string;
}
