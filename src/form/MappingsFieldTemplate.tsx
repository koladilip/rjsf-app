import React from "react";
import { ArrayFieldTemplateProps } from "@rjsf/utils";

export const MappingsFieldTemplate: React.FC<ArrayFieldTemplateProps> = (
  props
) => {
  const { items, canAdd, onAddClick } = props;
  console.log("items", items);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          fontWeight: "bold",
          padding: "10px 0",
        }}
      >
        <div style={{ flex: 1, padding: "0 10px" }}>Source Field</div>
        <div style={{ flex: 1, padding: "0 10px" }}>Destination Field</div>
        <div style={{ width: "80px" }}></div>{" "}
        {/* Placeholder for actions column */}
      </div>
      {items &&
        items.map((element) => (
          <div
            key={element.key}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ flex: 1, padding: "0 10px" }}>{element.children}</div>
            {element.hasRemove && (
              <button
                type="button"
                onClick={element.onDropIndexClick(element.index)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      {canAdd && (
        <button
          type="button"
          onClick={onAddClick}
          style={{ marginTop: "10px" }}
        >
          Add
        </button>
      )}
    </div>
  );
};
