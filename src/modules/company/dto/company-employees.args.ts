import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

import { MonthArgs } from '@src/shared/dto/month.args';

@ArgsType()
export class CompanyEmployeesArgs extends MonthArgs {
  @Field(() => Int)
  @IsNumber()
  companyId: number;
}
