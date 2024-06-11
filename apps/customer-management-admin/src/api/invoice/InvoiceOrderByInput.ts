import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  issueDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
