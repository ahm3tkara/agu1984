import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InvoiceWhereInput = {
  amount?: FloatNullableFilter;
  customer?: CustomerWhereUniqueInput;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  issueDate?: DateTimeNullableFilter;
  status?: "Option1";
};
