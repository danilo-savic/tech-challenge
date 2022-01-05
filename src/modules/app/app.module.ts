import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppResolver } from '@src/modules/app/app.resolver';
import { CompanyModule } from '@src/modules/company/company.module';
import { PartnerModule } from '@src/modules/partner/partner.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CompanyModule,
    PartnerModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
