import * as React from "react";
import { FunctionComponent } from "react";
import { TextInput, Textarea } from "@strapi/design-system";
import { CheckboxWrapper, CheckboxGroupWrapper, RadioWrapper, SelectWrapper } from "./Fields";
import { FieldType } from "../../utils/types";

const fieldMap = new Map<string, FunctionComponent<any>>([
  ["text", (props: FieldType) => <TextInput {...props} />],
  ["email", (props: FieldType) => <TextInput {...props} />],
  ["number", (props: FieldType) => <TextInput {...props} />],
  ["textarea", (props: FieldType) => <Textarea {...props} />],
  ["checkbox", (props: FieldType) => <CheckboxWrapper {...props} />],
  ["checkboxGroup", (props: FieldType) => <CheckboxGroupWrapper {...props} />],
  ["radio", (props: FieldType) => <RadioWrapper {...props} />],
  ["select", (props: FieldType) => <SelectWrapper {...props} />],
  ["file", (props: FieldType) => <TextInput {...props} />],
]);

export default fieldMap;
