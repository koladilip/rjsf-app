import React, { useState } from "react";
import { IChangeEvent } from "@rjsf/core";
import Form from "@rjsf/antd";
import validator from "@rjsf/validator-ajv8";
import "react-tabs/style/react-tabs.css";
import { RJSFSchema } from "@rjsf/utils";
import { Header } from "./Header";

const schema: RJSFSchema = {
  definitions: {
    personalInfo: {
      type: "object",
      title: "Personal Information",
      properties: {
        firstName: { type: "string", title: "First Name" },
        lastName: { type: "string", title: "Last Name" },
        age: { type: "number", title: "Age" },
      },
    },
    contactInfo: {
      type: "object",
      title: "Contact Information",
      properties: {
        email: { type: "string", title: "Email" },
        phone: { type: "string", title: "Phone Number" },
      },
    },
    address: {
      type: "object",
      title: "Address",
      properties: {
        street: { type: "string", title: "Street" },
        city: { type: "string", title: "City" },
        state: { type: "string", title: "State" },
        zip: { type: "string", title: "Zip Code" },
      },
    },
  },
  type: "object",
  properties: {
    objectType: {
      type: "string",
      title: "Object Type",
      oneOf: [
        {
          const: "person",
          title: "Personal Information",
        },
        {
          const: "contact",
          title: "Contact Information",
        },
        {
          const: "address",
          title: "Address",
        },
      ],
    },
  },
  allOf: [
    {
      if: {
        properties: {
          objectType: {
            const: "person",
          },
        },
        required: ["objectType"],
      },
      then: {
        type: "object",
        properties: {
          personalInfo: {
            $ref: "#/definitions/personalInfo",
          },
        },
      },
    },
    {
      if: {
        properties: {
          objectType: {
            const: "contact",
          },
        },
        required: ["objectType"],
      },
      then: {
        type: "object",
        properties: {
          contactInfo: {
            $ref: "#/definitions/contactInfo",
          },
        },
      },
    },
    {
      if: {
        properties: {
          objectType: {
            const: "address",
          },
        },
        required: ["objectType"],
      },
      then: {
        type: "object",
        properties: {
          address: {
            $ref: "#/definitions/address",
          },
        },
      },
    },
  ],
};

const uiSchema = {
  objectType: {
    "ui:widget": "radio",
  },
  // personalInfo: {
  //   "ui:options": {
  //     order: ["firstName", "lastName", "age"],
  //   },
  // },
  // contactInfo: {
  //   "ui:options": {
  //     order: ["email", "phone"],
  //   },
  // },
  // address: {
  //   "ui:options": {
  //     order: ["street", "city", "state", "zip"],
  //   },
  // },
};

export const MultiForm: React.FC = () => {
  const [formData, setFormData] = useState({} as any);

  const onChange = (e: IChangeEvent) => {
    if (e.formData.objectType !== formData.objectType) {
      setFormData({ objectType: e.formData.objectType });
    } else {
      setFormData(e.formData);
    }
  };

  return (
    <div className="app">
      <Header />
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        validator={validator}
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
