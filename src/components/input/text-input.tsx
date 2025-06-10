"use client";

import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: string;
  className?: string;
}

const TextField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder = "",
  register,
  error,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-xl leading-none font-[700] -tracking-[0.03em] text-black-100">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`
          border-b px-1 py-4 focus:outline-none text-lg md:text-xl leading-none -tracking-[0.01em] focus:border-blue-100
          focus:ring-blue-500 transition placeholder:text-[#03030380] text-black-100
          ${error ? "border-red-500" : "border-[#A7A7A7]"}
        `}
      />

      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default TextField;
