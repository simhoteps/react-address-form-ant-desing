import { Typography } from "@mui/material";
import { Input } from "antd";
import React from "react";
import Title from "./Title";
import ErrorText from "../InputErrorText";

const CustomInput = ({
  title,
  desc,
  name,
  placeholder,
  onChange,
  onBlur,
  value,
  maxLength,
  errors,
  touched,
}: {
  title: string;
  desc?: string;
  maxLength:number
  name:string
  placeholder:string;
  onChange: (e: any) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
  value: string;
  errors: string | undefined;
  touched: boolean | undefined;
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Title title={title} />
      {desc && (
        <Typography marginTop={"-8px"} variant="caption">
          {desc}
        </Typography>
      )}
      <Input
        name={name}
        placeholder={placeholder}
        size="large"
        value={value}
        maxLength={maxLength}
        onChange={(e)=>onChange(e)}
        onBlur={onBlur}
        status={errors && touched ? "error" : ""}
      />

      {errors && touched && <ErrorText text={errors} />}
    </div>
  );
};

export default CustomInput;
