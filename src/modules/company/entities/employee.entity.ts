import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

import { Company } from '@src/modules/company/entities/company.entity';
import { Order } from '@src/modules/partner/entities/order.entity';

@ObjectType()
export class Employee {
  @Field(() => Int)
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field(() => Int)
  budget: number;

  @Field(() => Int)
  companyId: number;

  @Field(() => Company)
  company?: Company;

  @Field(() => [Order])
  orders?: Order[] = [];

  @Field(() => String, { nullable: true })
  month?: string;

  @Field(() => Int, { nullable: true })
  consumption?: number;

  @Field(() => Float, { nullable: true })
  tax?: number;

  @Field(() => Float, { nullable: true })
  net?: number;
}
