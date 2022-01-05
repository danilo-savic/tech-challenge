import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Partner } from '@src/modules/partner/entities/partner.entity';

@ObjectType()
export class Voucher {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  amount: number;

  @Field(() => Int)
  partnerId: number;

  @Field(() => Partner)
  partner?: Partner;
}
