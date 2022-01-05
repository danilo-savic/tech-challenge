import { ArgsType, Field } from '@nestjs/graphql';
import { IsDateString } from 'class-validator';

@ArgsType()
export class MonthArgs {
  @Field(() => String, { nullable: true })
  @IsDateString()
  month = `${new Date().getFullYear()}-${new Date().getMonth() + 1}`;
}
