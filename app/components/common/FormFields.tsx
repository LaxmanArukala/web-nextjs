"use client";

import React, { useId } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const sharedFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    bgcolor: "rgba(255,255,255,0.92)",
    transition: "box-shadow 0.2s ease, border-color 0.2s ease",
    "&:hover fieldset": { borderColor: "primary.light" },
    "&.Mui-focused fieldset": { borderWidth: 2 },
  },
} as const;

type BaseProps = {
  label?: string;
  error?: string;
  containerClassName?: string;
  /** Applied to the native input/textarea (Tailwind-friendly). */
  inputClassName?: string;
};

type InputFieldProps = BaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color" | "prefix"> & {
    leftIcon?: React.ReactNode;
  };

type TextAreaFieldProps = BaseProps &
  Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "color" | "prefix">;

/**
 * Reusable outlined field built on MUI `TextField` — same external API as the previous native input wrapper.
 */
export function InputField({
  label,
  error,
  containerClassName,
  inputClassName,
  leftIcon,
  id,
  name,
  className: nativeInputClassName,
  type,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  disabled,
  readOnly,
  required,
  autoComplete,
  autoFocus,
  maxLength,
  minLength,
  pattern,
  inputMode,
  list,
  max,
  min,
  step,
  multiple,
  accept,
  form,
}: Readonly<InputFieldProps>) {
  const autoId = useId();
  const fieldId = id ?? name ?? `input-${autoId}`;
  const isRequired = Boolean(required);
  const mergedInputClass = [inputClassName, nativeInputClassName].filter(Boolean).join(" ");

  return (
    <div className={containerClassName}>
      <TextField
        id={fieldId}
        name={name}
        type={type}
        label={label}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        disabled={disabled}
        required={isRequired}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        error={Boolean(error)}
        helperText={error}
        fullWidth
        variant="outlined"
        size="medium"
        sx={sharedFieldSx}
        slotProps={{
          input: {
            readOnly,
            startAdornment: leftIcon ? (
              <InputAdornment position="start">{leftIcon}</InputAdornment>
            ) : undefined,
          },
          htmlInput: {
            className: mergedInputClass || undefined,
            maxLength,
            minLength,
            pattern,
            inputMode,
            list,
            max,
            min,
            step,
            multiple,
            accept,
            form,
          },
        }}
      />
    </div>
  );
}

/**
 * Multiline field on MUI `TextField` — `rows` sets `minRows` for height.
 */
export function TextAreaField({
  label,
  error,
  containerClassName,
  inputClassName,
  id,
  name,
  className: nativeTextareaClassName,
  rows,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  disabled,
  readOnly,
  required,
  autoComplete,
  autoFocus,
  maxLength,
  minLength,
  cols,
  wrap,
  form,
  spellCheck,
}: Readonly<TextAreaFieldProps>) {
  const autoId = useId();
  const fieldId = id ?? name ?? `textarea-${autoId}`;
  const isRequired = Boolean(required);
  const mergedInputClass = [inputClassName, nativeTextareaClassName].filter(Boolean).join(" ");

  return (
    <div className={containerClassName}>
      <TextField
        id={fieldId}
        name={name}
        label={label}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={placeholder}
        disabled={disabled}
        required={isRequired}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        error={Boolean(error)}
        helperText={error}
        fullWidth
        multiline
        variant="outlined"
        size="medium"
        sx={sharedFieldSx}
        minRows={typeof rows === "number" ? rows : 3}
        slotProps={{
          input: { readOnly },
          htmlInput: {
            className: mergedInputClass || undefined,
            rows,
            cols,
            maxLength,
            minLength,
            wrap,
            form,
            spellCheck,
          },
        }}
      />
    </div>
  );
}
