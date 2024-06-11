import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
