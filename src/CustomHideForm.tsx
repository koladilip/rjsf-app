import { useState } from "react";
import { IChangeEvent } from "@rjsf/core";
import Form from "@rjsf/antd";
import validator from "@rjsf/validator-ajv8";
import { RJSFSchema } from "@rjsf/utils";
import { Header } from "./Header";

const schema: RJSFSchema = {
  type: "object",
  properties: {
    first: {
      type: "string",
      title: "First field",
    },
    second: {
      type: "string",
      title: "Second field",
    },
    third: {
      type: "string",
      title: "Third field",
    },
  },
};

const FieldTemplate = (props: any) => {
  const {
    id,
    classNames,
    label,
    help,
    required,
    description,
    errors,
    children,
  } = props;
  return (
    <div className={classNames}>
      <label htmlFor={id}>
        {label}
        {required ? "*" : null}
      </label>
      {children}
      {description}
      {errors}
      {help}
    </div>
  );
};

const uiSchema = {
  second: {
    "ui:options": {
      hide: "!formData.first",
    },
  },
  third: {
    "ui:options": {
      hide: "!formData.first",
    },
  },
};

export const CustomHideForm: React.FC = () => {
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
        validator={validator}
        formData={formData}
        templates={{ FieldTemplate }}
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
