import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SubscriptionsDto } from 'src/subscriptions/subscriptions.dto';

@Injectable()
export class AcessInviteLinkService {
  private subs: SubscriptionsDto[] = [
    {
      createdAt: new Date(),
      email: 'dev.gussales@gmail.com',
      id: '1234567',
      name: 'Gustavo Sales',
    },
  ];

  generateLink(subscriberId: string): string {
    const subscriber = this.subs.find((sub) => sub.id === subscriberId);

    if (!subscriber) {
      // * This exception throws error with status 404
      //   throw new NotFoundException(`Invalid subscriber with id ${subscriberId}`);

      // * And this exception is more editable
      throw new HttpException(
        `Invalid subscriber with id ${subscriberId}`,
        HttpStatus.NOT_FOUND,
      );
    }

    const redirectUrl = new URL('http://localhost:5173');
    redirectUrl.searchParams.set('ref', subscriberId);

    return redirectUrl.toString();
  }
}
