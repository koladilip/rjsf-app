import { useState } from "react";
import Form from "@rjsf/antd";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { Header } from "./Header";
import { IChangeEvent } from "@rjsf/core";
import { CustomRadio, CustomSelect } from "./form";

const schema: RJSFSchema = {
  type: "object",
  properties: {
    objectType: {
      title: "Object Type",
      type: "string",
    },
    action: {
      title: "Action",
      type: "string",
    },
    object: {
      title: "Select Object",
      type: "string",
    },
  },
};

const widgets = {
  CustomRadio,
  CustomSelect,
};

const uiSchema = (destination: string, formData: any): UiSchema => {
  console.log("formData", formData);
  return {
    objectType: {
      "ui:widget": "CustomRadio",
      "ui:options": {
        apiEndpoint: `http://localhost:3000/${destination}/get/resources/objectTypes`,
        valueKey: "name",
        labelKey: "name",
      },
    },
    action: {
      "ui:widget": formData?.objectType ? "CustomRadio" : "hidden",
      "ui:options": {
        apiEndpoint: `http://localhost:3000/${destination}/get/resources/actions`,
        valueKey: "name",
        labelKey: "name",
        body: ["objectType"],
      },
    },
    object: {
      "ui:widget": formData?.action === "select" ? "CustomSelect" : "hidden",
      "ui:options": {
        apiEndpoint: `http://localhost:3000/${destination}/get/resources/objects`,
        valueKey: "id",
        labelKey: "name",
        body: ["objectType", "action"],
      },
    },
  };
};

export function VDM() {
  const [formData, setFormData] = useState({} as any);
  const [destination, setDestination] = useState("Facebook");
  const onChange = (e: IChangeEvent) => {
    setFormData(e.formData);
  };
  return (
    <div className="app">
      <Header />
      <select
        name="destination"
        onChange={(e) => {
          setFormData({});
          setDestination(e.target.value);
        }}
      >
        <option value="Facebook">Facebook</option>
        <option value="SFMC">SFMC</option>
      </select>
      <br />
      <br />

      <Form
        schema={schema}
        validator={validator}
        formContext={{ formData }}
        formData={formData}
        widgets={widgets}
        uiSchema={uiSchema(destination, formData)}
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
