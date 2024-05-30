import { Typography } from "antd";
import React from "react";

const ErrorText = ({ text }: { text: string }) => {
  return (
    <Typography style={{ color: "#E22323", fontSize: "12px" }}>
      {text}
    </Typography>
  );
};

export default ErrorText;