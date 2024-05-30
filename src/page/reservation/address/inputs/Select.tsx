import { Select } from "antd";
import Title from "./Title";
import ErrorText from "../InputErrorText";

const CustomSelect = ({
  title,
  onChange,
  value,
  disabled,
  values,
  errors,
  touched,
}: {
  title: string;
  onChange: (value: string) => void;
  value: string;
  disabled: boolean;
  values: string[];
  errors: string | undefined
  touched: boolean| undefined
}) => {
  return (
    <div style={{ width: "100%" }}>
           <Title title={title}/>
      <Select
        placeholder="Seçiniz"
        size="large"
        onChange={onChange}
        value={value}
        disabled={disabled}
        style={{ width: "100%" }}
      >
        {values?.map((item) => (
          <Select.Option key={`option_${item}`} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
      {errors && touched && (
        <ErrorText text={errors} />
      )}
    </div>
  );
};

export default CustomSelect;
