import { FetchDataOptions } from "./types";
export const fetchData = async (
  uiOptions: FetchDataOptions,
  formData?: any
) => {
  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (formData) {
    requestOptions.body = JSON.stringify(formData);
  }
  const response = await fetch(
    `http://localhost:3000/${uiOptions.apiPath}`,
    requestOptions
  );
  const data = await response.json();
  return data.map((item: string) => ({
    value: item[uiOptions.valueKey],
    label: item[uiOptions.labelKey],
  }));
};
