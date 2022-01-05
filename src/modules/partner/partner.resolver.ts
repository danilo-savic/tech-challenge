import { Query, Resolver } from '@nestjs/graphql';

import { Partner } from './entities/partner.entity';
import { PartnerService } from './partner.service';

@Resolver(() => Partner)
export class PartnerResolver {
  constructor(private readonly partnerService: PartnerService) {}

  @Query(() => [Partner], { name: 'partners' })
  findAll() {
    return this.partnerService.findAll();
  }
}
