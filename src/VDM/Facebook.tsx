import { useState } from "react";
import Form from "@rjsf/antd";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { Header } from "../Header";
import { IChangeEvent } from "@rjsf/core";
import { CustomRadio, CustomSelect } from "../form";

const schema: RJSFSchema = {
  type: "object",
  properties: {
    objectType: {
      title: "Object Type",
      type: "string",
      default: "Audience",
    },
    objectAction: {
      title: "What do you want to do?",
      type: "string",
      oneOf: [
        {
          const: "create",
          title: "Create Audience",
        },
        {
          const: "select",
          title: "Use Existing Audience",
        },
      ],
    },
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
  allOf: [
    {
      if: {
        properties: {
          objectType: {
            const: "Audience",
          },
          objectAction: {
            const: "create",
          },
        },
        required: ["objectAction"],
      },
      then: {
        type: "object",
        properties: {
          audience: {
            type: "object",
            title: "Audience",
            properties: {
              name: {
                type: "string",
                title: "Name",
              },
              description: {
                type: "string",
                title: "Description",
              },
            },
            required: ["name", "description"],
          },
        },
      },
    },
    {
      if: {
        properties: {
          objectType: {
            const: "Audience",
          },
          objectAction: {
            const: "select",
          },
        },
        required: ["objectAction"],
      },
      then: {
        type: "object",
        properties: {
          audienceId: {
            type: "string",
            title: "Audiences",
          },
        },
      },
    },
  ],
};

const widgets = {
  CustomRadio,
  CustomSelect,
};

const uiSchema: UiSchema = {
  "ui:order": [
    "objectType",
    "objectAction",
    "audience",
    "audienceId",
    "mappings",
  ],
  objectType: {
    "ui:widget": "hidden",
  },
  objectAction: {
    "ui:widget": "radio",
  },
  audienceId: {
    "ui:widget": "CustomSelect",
    "ui:options": {
      apiPath: "Facebook/get/resources/objects",
      labelKey: "name",
      valueKey: "id",
      optionTitle: "Select Audience",
    },
  },
  mappings: {
    items: {
      from: {
        "ui:widget": "CustomSelect",
        "ui:options": {
          apiPath: "source/get/resources/columns",
          labelKey: "name",
          valueKey: "name",
          optionTitle: "Select Column",
        },
      },
      to: {
        "ui:widget": "CustomSelect",
        "ui:options": {
          apiPath: "Facebook/get/resources/fields",
          labelKey: "name",
          valueKey: "name",
          optionTitle: "Select Audience Field",
        },
      },
    },
  },
};

export function FacebookVDM() {
  const [formData, setFormData] = useState({} as any);
  const onChange = (e: IChangeEvent) => {
    setFormData(e.formData);
  };
  return (
    <div className="app">
      <Header />

      <Form
        schema={schema}
        validator={validator}
        formContext={{ formData }}
        formData={formData}
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
