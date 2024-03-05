import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";

interface siteType {
  tid: string;
  type: string;
  value: string;
  label: string;
  helper: string;
  onChange: any;
}
export default function InputControl({
  tid,
  type,
  value,
  label,
  helper,
  onChange,
}: siteType) {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel htmlFor={tid}>{label}</InputLabel>
        <Input
          id={tid}
          type={type}
          aria-describedby={`helper-${tid}`}
          value={value}
          onChange={onChange}
        />
        <FormHelperText id={`helper-${tid}`}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          {helper}
        </FormHelperText>
      </FormControl>
    </>
  );
}
