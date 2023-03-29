import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvironmentConfigModule } from '../environment-config/environment-config.module';
import { EnvironmentConfigService } from '../environment-config/environment-config.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [EnvironmentConfigModule],
      inject: [EnvironmentConfigService],
      useFactory: (config: EnvironmentConfigService) => ({
        uri: config.getDatabaseUri(),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    }),
  ],
})
export class MongooseConfigModule {}
