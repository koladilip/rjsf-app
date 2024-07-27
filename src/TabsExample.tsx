import React, { useState } from "react";
import { IChangeEvent } from "@rjsf/core";
import Form from "@rjsf/antd";
import validator from "@rjsf/validator-ajv8";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { RJSFSchema } from "@rjsf/utils";
import { Header } from "./Header";

const schema: RJSFSchema = {
  type: "object",
  properties: {
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
};

const uiSchema = {
  personalInfo: {
    "ui:options": {
      order: ["firstName", "lastName", "age"],
    },
  },
  contactInfo: {
    "ui:options": {
      order: ["email", "phone"],
    },
  },
  address: {
    "ui:options": {
      order: ["street", "city", "state", "zip"],
    },
  },
};

export const TabsExample: React.FC = () => {
  const [formData, setFormData] = useState({} as any);

  const onChange = (e: IChangeEvent) => {
    setFormData(e.formData);
  };

  return (
    <div className="app">
      <Header />
      <Tabs>
        <TabList>
          <Tab>Personal Information</Tab>
          <Tab>Contact Information</Tab>
          <Tab>Address</Tab>
        </TabList>

        <TabPanel>
          <Form
            schema={schema.properties!.personalInfo}
            uiSchema={uiSchema.personalInfo}
            formData={formData.personalInfo}
            validator={validator}
            onChange={(e: IChangeEvent) =>
              setFormData({ ...formData, personalInfo: e.formData })
            }
          />
        </TabPanel>
        <TabPanel>
          <Form
            schema={schema.properties!.contactInfo}
            uiSchema={uiSchema.contactInfo}
            formData={formData.contactInfo}
            validator={validator}
            onChange={(e: IChangeEvent) =>
              setFormData({ ...formData, contactInfo: e.formData })
            }
          />
        </TabPanel>
        <TabPanel>
          <Form
            schema={schema.properties!.address}
            uiSchema={uiSchema.address}
            formData={formData.address}
            validator={validator}
            onChange={(e: IChangeEvent) =>
              setFormData({ ...formData, address: e.formData })
            }
          />
        </TabPanel>
      </Tabs>
      <div>
        <span>Form Data</span>
        <pre>
          {formData ? JSON.stringify(formData, null, 2) : "No Data Entered"}
        </pre>
      </div>
    </div>
  );
};
