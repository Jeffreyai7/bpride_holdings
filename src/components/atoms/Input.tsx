import { cn } from "../../utils";

type InputProps = {
    className?: string;
    min?: number;
    type?: string;
    placeholder?: string;
    inputClassName?: string;
    id?: string;
    name: string;
    value?: any;
    checked?: boolean;
    required?: boolean;
    readOnly?: boolean;
    children?: React.ReactNode 
    onChange?: (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
  
    autoComplete?: React.HTMLInputAutoCompleteAttribute;
  };

const Input = ({
  className,
  min,
  type,
  placeholder,
  inputClassName,
  id,
  name,
  value,
  readOnly,
  required,
  onChange,
  children
}: InputProps) => {
  return (
    <div className={cn("my-[16px] flex border-[2px]", className)}>
      <input
        min={min}
        className={cn("text-[1rem] outline-none  w-full ", inputClassName)}
        onChange={onChange}
        type={type}
        required={required}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        readOnly={readOnly}
      />
      {children}
    </div>
  );
};
export default Input;
