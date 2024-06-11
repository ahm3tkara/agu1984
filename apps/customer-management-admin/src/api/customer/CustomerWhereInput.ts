import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type CustomerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  projects?: ProjectListRelationFilter;
};
