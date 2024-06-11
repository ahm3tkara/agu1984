import { InvoiceUpdateManyWithoutCustomersInput } from "./InvoiceUpdateManyWithoutCustomersInput";
import { ProjectUpdateManyWithoutCustomersInput } from "./ProjectUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  invoices?: InvoiceUpdateManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
  projects?: ProjectUpdateManyWithoutCustomersInput;
};
