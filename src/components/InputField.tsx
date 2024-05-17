import React, { InputHTMLAttributes } from "react";
import { HTMLInputTypeAttribute } from "react";

export default function InputField({
  id,
  type,
  name,
  placeholder,
  label,
  attr,
}: {
  id?: string;
  type?: HTMLInputTypeAttribute;
  name?: string;
  placeholder: string;
  label: string;
  attr?: InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div className="relative">
      <label htmlFor={id} >
        <div className="pl-3 tracking-wider uppercase text-sm font-medium" >{label}</div>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={`border border-1 border-beige bg-beige-light text-green-dark focus:border-red mt-1 w-full rounded-lg py-2 px-3 outline-none focus:shadow-md focus:border-2`}
          {...attr}
        />
      </label>
    </div>
  );
}
