import { WidgetProps, getUiOptions } from "@rjsf/utils";
import { useEffect, useState } from "react";
import { fetchData } from "../API";
import { FetchDataOptions } from "../types";

type CustomSelectProps = FetchDataOptions & {
  optionTitle?: string;
};

export const CustomSelect: React.FC<WidgetProps> = (props) => {
  const { id, required, disabled, readonly, value, formContext, onChange } =
    props;
  const uiOptions = getUiOptions<CustomSelectProps>(
    props.uiSchema
  ) as CustomSelectProps;
  const [selectOptions, setSelectOptions] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetchData(uiOptions, formContext.formData);
        setSelectOptions(response);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, [uiOptions.apiPath]);

  return (
    <select
      id={id}
      required={required}
      disabled={disabled || readonly}
      value={value || ""}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">{uiOptions.optionTitle || "Select an option"}</option>
      {selectOptions.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
