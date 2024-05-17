import { TextareaHTMLAttributes } from "react";

export default function InputField({
  id,
  name,
  placeholder,
  label,
  attr,
}: {
  id?: string;
  name?: string;
  placeholder: string;
  label: string;
  attr?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}) {
  return (
    <div>
      <label htmlFor={id} className="pl-3 tracking-wider uppercase text-sm font-medium">
        {label}
        <textarea
          rows={6}
          name={name}
          id={id}
          placeholder={placeholder}
          className="border border-1 font-normal text-base tracking-normal border-beige bg-beige-light text-green-dark focus:border-red mt-1 w-full rounded-lg py-2 px-3 outline-none focus:shadow-md focus:border-2"
          {...attr}
        />
      </label>
    </div>
  );
}
