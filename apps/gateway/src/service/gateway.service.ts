import { Injectable } from '@nestjs/common';
import { SharedService } from '@app/shared';

@Injectable()
export class GatewayService {
  constructor(private sharedService: SharedService) {}

  getHello(): string {
    return 'Hello Gateways! ' + this.sharedService.getSharedService();
  }
}
