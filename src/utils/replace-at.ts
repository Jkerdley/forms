import { REPLACE_AT } from "../constants/regex/regex";

export const replaceAt = (value: string): string => {
  const cleanValue = value.replace(REPLACE_AT, "");
  const newValue = `@${cleanValue}`;
  return newValue;
};
