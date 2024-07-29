const desintinationData = [
  {
    destination: "Facebook",
    objectTypes: [
      {
        type: "Audience",
        actions: {
          create: {
            object: [
              {
                name: "name",
                type: "string",
                label: "Name",
              },
              {
                name: "description",
                type: "string",
                label: "Description",
              },
            ],
          },
          select: [
            {
              name: "high paying customers",
              id: "1234",
            },
            {
              name: "low paying customers",
              id: "5678",
            },
            {
              name: "all customers",
              id: "91011",
            },
          ],
        },
        syncModes: ["upsert", "mirror"],
        fields: [
          {
            name: "email",
            type: "string",
            label: "Email",
          },
          {
            name: "first_name",
            type: "string",
            label: "First Name",
          },
          {
            name: "last_name",
            type: "string",
            label: "Last Name",
          },
          {
            name: "phone",
            type: "string",
            label: "Phone",
          },
          {
            name: "city",
            type: "string",
            label: "City",
          },
          {
            name: "state",
            type: "string",
            label: "State",
          },
          {
            name: "zip",
            type: "string",
            label: "Zip",
          },
          {
            name: "country",
            type: "string",
            label: "Country",
          },
          {
            name: "dob",
            type: "string",
            label: "Date of Birth",
          },
        ],
      },
    ],
  },
  {
    destination: "SFMC",
    objectTypes: [
      {
        type: "objects",
        actions: {
          select: [
            {
              name: "Contacts",
              id: "contacts",
              fields: [
                {
                  name: "email",
                  type: "string",
                  label: "Email",
                  default: true,
                },
                {
                  name: "first_name",
                  type: "string",
                  label: "First Name",
                  default: true,
                },
                {
                  name: "last_name",
                  type: "string",
                  label: "Last Name",
                  default: true,
                },
                {
                  name: "phone",
                  type: "string",
                  label: "Phone",
                  default: true,
                },
                {
                  name: "city",
                  type: "string",
                  label: "City",
                  default: true,
                },
                {
                  name: "state",
                  type: "string",
                  label: "State",
                  default: true,
                },
                {
                  name: "zip",
                  type: "string",
                  label: "Zip",
                  default: true,
                },
                {
                  name: "country",
                  type: "string",
                  label: "Country",
                  default: true,
                },
                {
                  name: "dob",
                  type: "string",
                  label: "Date of Birth",
                  default: true,
                },
              ],
              syncModes: ["upsert", "mirror"],
            },
            {
              name: "Deals",
              id: "deals",
              fields: [
                {
                  name: "deal_name",
                  type: "string",
                  label: "Deal Name",
                },
                {
                  name: "deal_amount",
                  type: "number",
                  label: "Deal Amount",
                },
                {
                  name: "deal_status",
                  type: "string",
                  label: "Deal Status",
                },
                {
                  name: "deal_owner",
                  type: "string",
                  label: "Deal Owner",
                },
              ],
              syncModes: ["mirror"],
            },
          ],
        },
      },
      {
        type: "journeys",
        actions: {
          select: [
            {
              name: "Purchase Journey",
              id: "1234",
            },
            {
              name: "Onboarding Journey",
              id: "5678",
            },
            {
              name: "Churn Journey",
              id: "91011",
            },
          ],
        },
        syncModes: ["upsert"],
        fields: [
          {
            name: "journey_name",
            type: "string",
            label: "Journey Name",
            default: true,
          },
          {
            name: "journey_type",
            type: "string",
            label: "Journey Type",
            default: true,
          },
          {
            name: "journey_status",
            type: "string",
            label: "Journey Status",
            default: true,
          },
          {
            name: "journey_owner",
            type: "string",
            label: "Journey Owner",
            default: true,
          },
        ],
      },
      {
        type: "dataExtensions",
        actions: {
          create: {
            object: [
              {
                name: "name",
                type: "string",
                label: "Name",
              },
              {
                name: "description",
                type: "string",
                label: "Description",
              },
              {
                name: "retention_period",
                type: "number",
                label: "Rentention Period",
              },
            ],
            fields: [
              {
                name: "name",
                type: "string",
                label: "Name",
                required: true,
              },
              {
                name: "type",
                type: "string",
                label: "Type",
                required: true,
              },
              {
                name: "length",
                type: "number",
                label: "Length",
              },
            ],
          },
          select: [
            {
              name: "Customer Data",
              id: "1234",
              fields: [
                {
                  name: "email",
                  type: "string",
                  label: "Email",
                },
                {
                  name: "first_name",
                  type: "string",
                  label: "First Name",
                },
                {
                  name: "last_name",
                  type: "string",
                  label: "Last Name",
                },
                {
                  name: "phone",
                  type: "string",
                  label: "Phone",
                },
                {
                  name: "city",
                  type: "string",
                  label: "City",
                },
                {
                  name: "state",
                  type: "string",
                  label: "State",
                },
                {
                  name: "zip",
                  type: "string",
                  label: "Zip",
                },
                {
                  name: "country",
                  type: "string",
                  label: "Country",
                },
                {
                  name: "dob",
                  type: "string",
                  label: "Date of Birth",
                },
              ],
            },
            {
              name: "Product Data",
              id: "5678",
              fields: [
                {
                  name: "product_name",
                  type: "string",
                  label: "Product Name",
                },
                {
                  name: "product_price",
                  type: "number",
                  label: "Product Price",
                },
                {
                  name: "product_category",
                  type: "string",
                  label: "Product Category",
                },
                {
                  name: "product_owner",
                  type: "string",
                  label: "Product Owner",
                },
              ],
            },
            {
              name: "Order Data",
              id: "91011",
              fields: [
                {
                  name: "order_name",
                  type: "string",
                  label: "Order Name",
                },
                {
                  name: "order_amount",
                  type: "number",
                  label: "Order Amount",
                },
                {
                  name: "order_status",
                  type: "string",
                  label: "Order Status",
                },
                {
                  name: "order_owner",
                  type: "string",
                  label: "Order Owner",
                },
              ],
            },
          ],
        },
        syncModes: ["upsert", "mirror"],
      },
    ],
  },
];
export function getSourceData(resourceType: string): any {
  switch (resourceType) {
    case "columns":
      return [
        {
          name: "first_name",
          type: "string",
          label: "First Name",
        },
        {
          name: "last_name",
          type: "string",
          label: "Last Name",
        },
        {
          name: "email",
          type: "string",
          label: "Email",
        },
        {
          name: "phone",
          type: "string",
          label: "Phone",
        },
        {
          name: "city",
          type: "string",
          label: "City",
        },
        {
          name: "state",
          type: "string",
          label: "State",
        },
        {
          name: "zip",
          type: "string",
          label: "Zip",
        },
        {
          name: "country",
          type: "string",
          label: "Country",
        },
        {
          name: "dob",
          type: "string",
          label: "Date of Birth",
        },
      ];
    default:
      throw new Error("Resource type not found");
  }
}
export function getDestinationData(
  destination: string,
  resourceType: string,
  payload: any
): any {
  const destData = desintinationData.find((d) => d.destination === destination);
  if (!destData) {
    throw new Error("Destination not found");
  }
  switch (resourceType) {
    case "objectTypes":
      return destData.objectTypes.map((o) => ({
        name: o.type,
      }));
    case "actions":
      const objectType = destData.objectTypes.find(
        (o) => o.type === payload.objectType
      );
      if (!objectType) {
        throw new Error(`Object type ${objectType} not found`);
      }
      return Object.keys(objectType.actions).map((o) => ({
        name: o,
      }));
    case "createSchema":
      const objectTypeCreate = destData.objectTypes.find(
        (o) => o.type === payload.objectType && o.actions.create
      );
      if (!objectTypeCreate) {
        throw new Error("Object type not found");
      }
      return objectTypeCreate.actions.create;
    case "objects":
      const objectTypeSelect = destData.objectTypes.find(
        (o) => o.type === payload.objectType && o.actions.select
      );
      if (!objectTypeSelect) {
        throw new Error("Object type not found");
      }
      return objectTypeSelect.actions.select.map((o) => ({
        name: o.name,
        id: o.id,
      }));
    case "fields":
      const objectTypeFields = destData.objectTypes.find(
        (o) => o.type === payload.objectType
      );
      if (!objectTypeFields) {
        throw new Error("Object type not found");
      }
      if (objectTypeFields.fields) {
        return objectTypeFields.fields;
      }
      if (payload.objectId) {
        const object = objectTypeFields.actions.select.find(
          (o) => o.id === payload.objectId
        );
        if (!object) {
          throw new Error("Object not found");
        }
        return object.fields;
      }
      throw new Error("Fields not found");
    case "syncModes":
      const objectTypeSyncModes = destData.objectTypes.find(
        (o) => o.type === payload.objectType
      );
      if (!objectTypeSyncModes) {
        throw new Error("Object type not found");
      }
      if (objectTypeSyncModes.syncModes) {
        return objectTypeSyncModes.syncModes;
      }
      if (payload.objectId) {
        const object = objectTypeSyncModes.actions.select.find(
          (o) => o.id === payload.objectId
        );
        if (!object) {
          throw new Error("Object not found");
        }
        return object.syncModes;
      }
      throw new Error("Sync modes not found");
  }
}
