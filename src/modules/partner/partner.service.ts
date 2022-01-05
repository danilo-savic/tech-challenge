import { Injectable } from '@nestjs/common';

import MOCK_PARTNERS from '@data/partners';
import MOCK_VOUCHERS from '@data/vouchers';
import { Partner } from '@src/modules/partner/entities/partner.entity';
import { Voucher } from '@src/modules/partner/entities/voucher.entity';

@Injectable()
export class PartnerService {
  findAll(): Partner[] {
    const partners: Partner[] = MOCK_PARTNERS;
    const vouchers: Voucher[] = MOCK_VOUCHERS;

    return partners.map((partner) => {
      const filteredVouchers = vouchers.filter(
        (voucher) => voucher.partnerId === partner.id,
      );
      const revenue = filteredVouchers.reduce(
        (sum, voucher) => sum + voucher.amount,
        0,
      );
      return {
        ...partner,
        vouchers: filteredVouchers,
        revenue,
      };
    });
  }
}
