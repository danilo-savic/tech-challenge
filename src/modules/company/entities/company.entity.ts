import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Employee } from '@src/modules/company/entities/employee.entity';

@ObjectType()
export class Company {
  @Field(() => Int)
  id: number;

  @Field({ nullable: false })
  title: string;

  @Field(() => [Employee], { nullable: true })
  employees: Employee[];
}
