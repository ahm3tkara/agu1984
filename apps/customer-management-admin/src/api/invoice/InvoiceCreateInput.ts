import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type InvoiceCreateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  dueDate?: Date | null;
  issueDate?: Date | null;
  status?: "Option1" | null;
};
