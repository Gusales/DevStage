import { Module } from '@nestjs/common';
import { AcessInviteLinkController } from './acess-invite-link.controller';
import { AcessInviteLinkService } from './acess-invite-link.service';

@Module({
  controllers: [AcessInviteLinkController],
  providers: [AcessInviteLinkService],
})
export class AcessInviteLinkModule {}
