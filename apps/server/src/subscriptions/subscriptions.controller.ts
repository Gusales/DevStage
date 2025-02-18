import { Body, Controller, Post } from '@nestjs/common';
import { SubscriptionsDto } from './subscriptions.dto';
import { SubscriptionsService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Post()
  create(@Body() subscription: SubscriptionsDto) {
    this.subscriptionsService.create(subscription);
  }
}
