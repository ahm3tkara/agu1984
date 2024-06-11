import { Customer } from "../customer/Customer";

export type Invoice = {
  amount: number | null;
  createdAt: Date;
  customer?: Customer | null;
  dueDate: Date | null;
  id: string;
  issueDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
