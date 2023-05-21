import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AdministratorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="nikname" source="nikname" />
        <TextInput label="password" source="password" />
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Create>
  );
};
