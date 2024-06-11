import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type ProjectWhereInput = {
  customer?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
  tasks?: TaskListRelationFilter;
};
