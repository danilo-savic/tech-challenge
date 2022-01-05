import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

import { MonthArgs } from '@src/shared/dto/month.args';

@ArgsType()
export class GroupedEmployeesByCompanyArgs extends MonthArgs {
  @Field(() => Int, { nullable: true })
  @IsNumber()
  benefits = 10;
}
