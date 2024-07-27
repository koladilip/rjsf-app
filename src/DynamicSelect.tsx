import { useState } from "react";
import { IChangeEvent } from "@rjsf/core";
import Form from "@rjsf/antd";
import validator from "@rjsf/validator-ajv8";
import { RJSFSchema } from "@rjsf/utils";
import { Header } from "./Header";
import { CustomSelect } from "./form";

const widgets = {
  CustomSelect,
};

const schema: RJSFSchema = {
  type: "object",
  properties: {
    dynamicSelect: {
      type: "string",
      title: "Dynamic Select",
    },
  },
};

const uiSchema = {
  dynamicSelect: {
    "ui:widget": "CustomSelect",
    "ui:options": {
      apiEndpoint: "https://jsonplaceholder.typicode.com/users", // Replace with your API endpoint
      labelKey: "name",
      valueKey: "username",
    },
  },
};

export const DynamicSelect: React.FC = () => {
  const [formData, setFormData] = useState({});

  const onChange = (e: IChangeEvent) => {
    setFormData(e.formData);
  };

  return (
    <div className="app">
      <Header />
      <Form
        schema={schema}
        uiSchema={uiSchema}
        widgets={widgets}
        validator={validator}
        formData={formData}
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
};
