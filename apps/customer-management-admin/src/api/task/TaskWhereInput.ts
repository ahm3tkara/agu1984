import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  status?: "Option1";
  title?: StringNullableFilter;
};
