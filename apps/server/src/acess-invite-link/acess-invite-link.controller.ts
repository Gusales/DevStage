import { Controller, Get, Param } from '@nestjs/common';
import { AcessInviteLinkService } from './acess-invite-link.service';

@Controller('invites')
export class AcessInviteLinkController {
  constructor(
    private readonly acessInviteLinkService: AcessInviteLinkService,
  ) {}

  @Get('/:subscriberId')
  findBySubscriberId(@Param('subscriberId') subscriberId: string) {
    const generatedLink =
      this.acessInviteLinkService.generateLink(subscriberId);

    console.log(generatedLink);
  }
}
