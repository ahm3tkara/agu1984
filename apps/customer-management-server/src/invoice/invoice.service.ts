import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InvoiceServiceBase } from "./base/invoice.service.base";

@Injectable()
export class InvoiceService extends InvoiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
