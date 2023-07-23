import { Injectable } from '@nestjs/common';

@Injectable()
export class SharedService {
  getSharedService() {
    return 'Shared component';
  }
}
