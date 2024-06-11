import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
};
