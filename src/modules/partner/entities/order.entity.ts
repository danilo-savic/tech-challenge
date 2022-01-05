import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Employee } from '@src/modules/company/entities/employee.entity';
import { Voucher } from '@src/modules/partner/entities/voucher.entity';

@ObjectType()
export class Order {
  @Field(() => Int)
  id: number;

  @Field(() => Date)
  date: Date;

  @Field(() => Int)
  employeeId: number;

  @Field(() => Employee)
  employee?: Employee;

  @Field(() => Int)
  voucherId: number;

  @Field(() => Voucher)
  voucher?: Voucher;
}
