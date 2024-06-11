import { Customer } from "../customer/Customer";
import { Task } from "../task/Task";

export type Project = {
  createdAt: Date;
  customer?: Customer | null;
  description: string | null;
  endDate: Date | null;
  id: string;
  name: string | null;
  startDate: Date | null;
  status?: "Option1" | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
