import { WidgetProps, getUiOptions } from "@rjsf/utils";
import { useEffect, useState } from "react";
import { fetchData } from "../API";
import { FetchDataOptions } from "../types";

type CustomRadioProps = FetchDataOptions & {};

export const CustomRadio: React.FC<WidgetProps> = (props) => {
  const {
    id,
    title,
    required,
    disabled,
    readonly,
    value,
    formContext,
    onChange,
  } = props;
  const uiOptions = getUiOptions<CustomRadioProps>(
    props.uiSchema
  ) as CustomRadioProps;
  const [radioOptions, setRadioOptions] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetchData(uiOptions, formContext.formData);
        setRadioOptions(response);
      } catch (error) {
        console.error("Error fetching options:", error);
      }
    };

    fetchOptions();
  }, [uiOptions.apiPath]);

  return (
    <div className="objectTypes">
      <span>{title}</span>
      {radioOptions.map((opt) => (
        <div key={opt.value}>
          <input
            type="radio"
            name={id}
            id={opt.value}
            required={required}
            disabled={disabled || readonly}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
          />
          <label htmlFor={opt.value}>{opt.label}</label>
          <br />
        </div>
      ))}
    </div>
  );
};
