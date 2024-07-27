import { useState } from "react";
import Form from "@rjsf/antd";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { Header } from "./Header";
import { IChangeEvent } from "@rjsf/core";
import { CustomSelect } from "./form";

const schema: RJSFSchema = {
  type: "object",
  properties: {
    mappings: {
      title: "Mappings",
      type: "array",
      items: {
        type: "object",
        properties: {
          from: {
            type: "string",
            title: "Source Field",
          },
          to: {
            type: "string",
            title: "Destination Field",
          },
        },
      },
    },
  },
};

const widgets = {
  CustomSelect,
};

const uiSchema: UiSchema = {
  mappings: {
    items: {
      from: {
        "ui:widget": "CustomSelect",
        "ui:options": {
          apiEndpoint: "https://jsonplaceholder.typicode.com/users", // Replace with your API endpoint
          labelKey: "name",
          valueKey: "username",
        },
      },
      to: {
        "ui:widget": "CustomSelect",
        "ui:options": {
          apiEndpoint: "https://jsonplaceholder.typicode.com/users", // Replace with your API endpoint
          labelKey: "email",
          valueKey: "phone",
        },
      },
    },
  },
};

export function Mappings() {
  const [formData, setFormData] = useState();
  const onChange = (e: IChangeEvent) => setFormData(e.formData);

  return (
    <div className="app">
      <Header />
      <Form
        schema={schema}
        validator={validator}
        widgets={widgets}
        uiSchema={uiSchema}
        onChange={onChange}
      />
      <div>
        <span>Form Data</span>
        <pre>
          {formData ? JSON.stringify(formData, null, 2) : "No Data Entered"}
        </pre>
      </div>
    </div>
  );
}
