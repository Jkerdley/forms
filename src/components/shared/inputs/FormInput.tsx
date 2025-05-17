import type { FC } from "react";

interface Props {
  name: string;
  size?: number;
  value: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  id: string;
  variant: "input-classic" | "input-bordered" | "input-noborder";
  label?: string;
  error?: string;
  rounded?: string;
  checked?: boolean;
}

export const FormInput: FC<Props> = (props) => {
  const {
    name,
    size,
    value,
    type,
    required,
    placeholder,
    id,
    variant,
    label,
    error,
    rounded,
    checked,
  } = props;
  return (
    <div className="input-group">
      {label && (
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        style={{ borderRadius: rounded }}
        name={name}
        size={size}
        value={value}
        type={type}
        id={id}
        placeholder={placeholder}
        className={`text-input + ${variant}`}
        required={required}
        checked={checked}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};
