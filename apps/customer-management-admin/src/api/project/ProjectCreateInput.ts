import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  endDate?: Date | null;
  name?: string | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
};
