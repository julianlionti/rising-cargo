import { DynamicModule, Module } from '@nestjs/common';
import { RmqService } from './rmq.service';
import { ClientsModule, RmqOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

interface ReqModuleOptions {
  name: string;
}

@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {
  static register({ name }: ReqModuleOptions): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name,
            useFactory: (configServive: ConfigService): RmqOptions => ({
              transport: Transport.RMQ,
              options: {
                urls: [configServive.get<string>('RABBIT_MQ_URI')],
                queue: configServive.get<string>(`RABBIT_MQ_${name}_QUEUE`),
              },
            }),
            inject: [ConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
