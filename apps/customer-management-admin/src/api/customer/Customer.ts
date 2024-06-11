import { Invoice } from "../invoice/Invoice";
import { Project } from "../project/Project";

export type Customer = {
  createdAt: Date;
  email: string | null;
  id: string;
  invoices?: Array<Invoice>;
  name: string | null;
  phone: string | null;
  projects?: Array<Project>;
  updatedAt: Date;
};
