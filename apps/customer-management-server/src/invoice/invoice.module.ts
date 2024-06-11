import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InvoiceModuleBase } from "./base/invoice.module.base";
import { InvoiceService } from "./invoice.service";
import { InvoiceController } from "./invoice.controller";
import { InvoiceResolver } from "./invoice.resolver";

@Module({
  imports: [InvoiceModuleBase, forwardRef(() => AuthModule)],
  controllers: [InvoiceController],
  providers: [InvoiceService, InvoiceResolver],
  exports: [InvoiceService],
})
export class InvoiceModule {}
