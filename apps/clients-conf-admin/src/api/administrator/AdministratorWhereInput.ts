import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdministratorWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  nikname?: StringNullableFilter;
  password?: StringNullableFilter;
  role?: StringNullableFilter;
};
