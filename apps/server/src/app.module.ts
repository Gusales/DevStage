import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { AcessInviteLinkModule } from './acess-invite-link/acess-invite-link.module';

@Module({
  imports: [SubscriptionsModule, AcessInviteLinkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
