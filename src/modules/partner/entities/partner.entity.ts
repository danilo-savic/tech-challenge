import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Voucher } from '@src/modules/partner/entities/voucher.entity';

@ObjectType()
export class Partner {
  @Field(() => Int)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field({ defaultValue: 0 })
  revenue?: number = 0;

  @Field(() => [Voucher], { nullable: false })
  vouchers?: Voucher[];
}
