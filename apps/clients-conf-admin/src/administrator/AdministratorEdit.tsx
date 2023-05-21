import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AdministratorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="nikname" source="nikname" />
        <TextInput label="password" source="password" />
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Edit>
  );
};
