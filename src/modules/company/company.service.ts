import { Injectable } from '@nestjs/common';

import MOCK_COMPANIES from '@data/companies';
import MOCK_EMPLOYEES from '@data/employees';
import MOCK_ORDERS from '@data/orders';
import MOCK_VOUCHERS from '@data/vouchers';
import { CompanyEmployeesArgs } from '@src/modules/company/dto/company-employees.args';
import { GroupedEmployeesByCompanyArgs } from '@src/modules/company/dto/grouped-employees-by-company.args';
import { Employee } from '@src/modules/company/entities/employee.entity';
import { Order } from '@src/modules/partner/entities/order.entity';
import { Voucher } from '@src/modules/partner/entities/voucher.entity';
import { TAX_FREE_AMOUNT } from '@src/shared/constants/global.constants';
import { getMonthString } from '@src/shared/helpers';

@Injectable()
export class CompanyService {
  findGroupedEmployees(options: GroupedEmployeesByCompanyArgs) {
    if (!options.month) {
      options.month = getMonthString(new Date());
    }

    const { benefits, month } = options;

    const monthString = getMonthString(month);

    const companies = MOCK_COMPANIES;
    const employees: Employee[] = MOCK_EMPLOYEES;
    const orders: Order[] = MOCK_ORDERS.filter(
      (order) => getMonthString(order.date) === monthString,
    );
    const vouchers: Voucher[] = MOCK_VOUCHERS;

    employees.forEach((employee) => {
      const empOrders = orders
        .filter((order) => order.employeeId === employee.id)
        .map((order) => ({
          ...order,
          voucher: vouchers.find((voucher) => voucher.id === order.voucherId),
        }));

      employee.orders = empOrders;
      employee.month = monthString;
      employee.consumption = empOrders.reduce(
        (acc, order) => acc + (order?.voucher?.amount || 0),
        0,
      );
    });

    return companies.map((company) => ({
      ...company,
      employees: employees.filter(
        (employee) =>
          employee.companyId === company.id &&
          TAX_FREE_AMOUNT - employee.consumption >= benefits,
      ),
    }));
  }

  findCompanyEmployees(options: CompanyEmployeesArgs) {
    const { companyId, month } = options;

    const monthString = getMonthString(month);

    const company = MOCK_COMPANIES.find((c) => c.id === companyId);

    if (company) {
      const employees: Employee[] = MOCK_EMPLOYEES.filter(
        (employee) => employee.companyId === companyId,
      );

      const orders: Order[] = MOCK_ORDERS.filter(
        (order) => getMonthString(order.date) === monthString,
      );
      const vouchers: Voucher[] = MOCK_VOUCHERS;

      employees.forEach((employee) => {
        const empOrders = orders
          .filter((order) => order.employeeId === employee.id)
          .map((order) => ({
            ...order,
            voucher: vouchers.find((voucher) => voucher.id === order.voucherId),
          }));

        employee.orders = empOrders;
        employee.month = monthString;
        employee.consumption = empOrders.reduce(
          (acc, order) => acc + (order?.voucher?.amount || 0),
          0,
        );

        const tax = +(
          ((employee.consumption - TAX_FREE_AMOUNT) / 100) *
          30
        ).toFixed(2);
        employee.tax = Math.max(0, tax);

        employee.net = employee.consumption - employee.tax;
      });

      return {
        ...company,
        employees,
      };
    }

    return null;
  }
}
