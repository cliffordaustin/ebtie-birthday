import { TextField } from "@mui/material";
import { forwardRef } from "react";
import React from "react";

const PhoneInput = (props: any, ref: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <TextField
      {...props}
      InputProps={{}}
      inputRef={ref}
      fullWidth
      label="Phone Number"
      variant="filled"
      name="phone"
    />
  );
};
export default forwardRef(PhoneInput);
