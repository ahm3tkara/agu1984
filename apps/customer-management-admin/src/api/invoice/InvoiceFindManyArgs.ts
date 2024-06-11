import { InvoiceWhereInput } from "./InvoiceWhereInput";
import { InvoiceOrderByInput } from "./InvoiceOrderByInput";

export type InvoiceFindManyArgs = {
  where?: InvoiceWhereInput;
  orderBy?: Array<InvoiceOrderByInput>;
  skip?: number;
  take?: number;
};
