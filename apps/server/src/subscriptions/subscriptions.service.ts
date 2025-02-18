import { Injectable } from '@nestjs/common';
import { SubscriptionsDto } from './subscriptions.dto';

@Injectable()
export class SubscriptionsService {
  private subscriptions: SubscriptionsDto[] = [];

  create(subscription: SubscriptionsDto) {
    this.subscriptions.push(subscription);
    console.log(this.subscriptions);
  }
}
