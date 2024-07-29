import { useState } from "react";
import Form from "@rjsf/antd";
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import { Header } from "../Header";
import { IChangeEvent } from "@rjsf/core";
import { CustomRadio, CustomSelect } from "../form";

const schema: RJSFSchema = {
  definitions: {
    mappings: {
      type: "array",
      title: "Mappings",
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
    objects: {
      type: "object",
      title: "Marketing Cloud Objects",
      properties: {
        object: {
          type: "string",
          oneOf: [
            {
              const: "contacts",
              title: "Contacts",
            },
            {
              const: "users",
              title: "Users",
            },
          ],
        },
      },
      allOf: [
        {
          if: {
            properties: {
              object: {
                const: "contacts",
              },
            },
            required: ["object"],
          },
          then: {
            properties: {
              syncMode: {
                title: "Sync Mode",
                type: "string",
                oneOf: [
                  {
                    const: "upsert",
                    title: "Upsert",
                  },
                ],
              },
              mappings: {
                allOf: [
                  {
                    $ref: "#/definitions/mappings",
                  },
                  {
                    items: {
                      properties: {
                        to: {
                          type: "string",
                          title: "Destination Field",
                          oneOf: [
                            {
                              const: "email",
                              title: "Email",
                            },
                            {
                              const: "phone",
                              title: "Phone",
                            },
                          ],
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
        },
        {
          if: {
            properties: {
              object: {
                const: "users",
              },
            },
            required: ["object"],
          },
          then: {
            properties: {
              syncMode: {
                title: "Sync Mode",
                type: "string",
                oneOf: [
                  {
                    const: "upsert",
                    title: "Upsert",
                  },
                  {
                    const: "mirror",
                    title: "Mirror",
                  },
                ],
              },
              mappings: {
                allOf: [
                  {
                    $ref: "#/definitions/mappings",
                  },
                  {
                    items: {
                      properties: {
                        to: {
                          type: "string",
                          title: "Destination Field",
                          oneOf: [
                            {
                              const: "firstName",
                              title: "First Name",
                            },
                            {
                              const: "lastName",
                              title: "Last Name",
                            },
                          ],
                        },
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      ],
    },
    journeys: {},
    dataExtensions: {},
  },
  type: "object",
  properties: {
    objectType: {
      title: "Object Type",
      type: "string",
      oneOf: [
        {
          const: "objects",
          title: "Marketing Cloud Objects",
        },
        {
          const: "journeys",
          title: "Marketing Cloud Journeys",
        },
        {
          const: "dataExtensions",
          title: "Data Extensions",
        },
      ],
    },
  },
  allOf: [
    {
      if: {
        properties: {
          objectType: {
            const: "objects",
          },
        },
        required: ["objectType"],
      },
      then: {
        type: "object",
        properties: {
          objects: {
            $ref: "#/definitions/objects",
          },
        },
      },
    },
    {
      if: {
        properties: {
          objectType: {
            const: "journeys",
          },
        },
        required: ["objectType"],
      },
      then: {
        type: "object",
        properties: {
          journeys: {
            $ref: "#/definitions/journeys",
          },
        },
      },
    },
    {
      if: {
        properties: {
          objectType: {
            const: "dataExtensions",
          },
        },
        required: ["objectType"],
      },
      then: {
        type: "object",
        properties: {
          dataExtensions: {
            $ref: "#/definitions/dataExtensions",
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
  //   "ui:order": [
  //     "objectType",
  //     "objectAction",
  //     "audience",
  //     "audienceId",
  //     "mappings",
  //   ],
  objectType: {
    "ui:widget": "radio",
  },
  objects: {
    "ui:order": ["object", "syncMode", "mappings"],
    object: {
      "ui:widget": "select",
      "ui:options": {
        label: false,
        placeholder: "Select Object",
      },
    },
    syncMode: {
      "ui:widget": "radio",
    },
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

export function SFMCVDM() {
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
