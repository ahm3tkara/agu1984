import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
