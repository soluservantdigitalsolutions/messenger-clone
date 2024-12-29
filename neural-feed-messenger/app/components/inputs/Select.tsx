"use client";

import React from "react";
import ReactSelect from "react-select";

interface SelectProps {
  label: string;
  value?: Record<string, any>;
  options: Record<string, any>[];
  disabled?: boolean;
  onChange: (value: Record<string, any>) => void;
}
const Select: React.FC<SelectProps> = ({
  label,
  value,
  options,
  disabled,
  onChange,
}) => {
  return (
    <div className="z-[100]">
      <label
        className="
        block
        text-sm
        font-medium
        leading-6
      text-gray-900
        "
      >
        {label}
      </label>
      <div className="mt-2" />
      <ReactSelect
        value={value}
        onChange={onChange}
        isDisabled={disabled}
        isMulti
        options={options}
        menuPortalTarget={document.body}
        styles={{
          menuPortal: (base) => ({
            ...base,
            zIndex: 9999,
          }),
        }}
        classNames={{
          control: () => "text-sm",
        }}
      />
    </div>
  );
};

export default Select;
