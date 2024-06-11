import { InvoiceCreateNestedManyWithoutCustomersInput } from "./InvoiceCreateNestedManyWithoutCustomersInput";
import { ProjectCreateNestedManyWithoutCustomersInput } from "./ProjectCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  invoices?: InvoiceCreateNestedManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
  projects?: ProjectCreateNestedManyWithoutCustomersInput;
};
