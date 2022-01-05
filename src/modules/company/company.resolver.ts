import { Args, Query, Resolver } from '@nestjs/graphql';

import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
import { CompanyEmployeesArgs } from '@src/modules/company/dto/company-employees.args';
import { GroupedEmployeesByCompanyArgs } from '@src/modules/company/dto/grouped-employees-by-company.args';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query(() => [Company], { name: 'companies' })
  findWithBenefits(
    @Args() groupedEmployeesByCompanyArgs: GroupedEmployeesByCompanyArgs,
  ) {
    return this.companyService.findGroupedEmployees(
      groupedEmployeesByCompanyArgs,
    );
  }

  @Query(() => Company, { name: 'company' })
  findByCompany(@Args() companyEmployeesArgs: CompanyEmployeesArgs) {
    return this.companyService.findCompanyEmployees(companyEmployeesArgs);
  }
}
