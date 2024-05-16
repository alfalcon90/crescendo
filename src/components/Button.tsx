import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { FunctionComponentElement, MouseEventHandler } from "react";
import { IconBaseProps, IconType } from "react-icons";

export default function Button({
  leadingIcon,
  trailingIcon,
  href,
  onClick,
  children,
  className,
  type,
  dark,
  disabled,
}: {
  leadingIcon?: IconType;
  trailingIcon?: IconType;
  href?: Url;
  onClick?: MouseEventHandler;
  children: string;
  className?: string;
  type?: "submit" | "reset" | "button";
  dark?: boolean;
  disabled?: boolean;
}) {
  if (type != undefined) {
    return (
      <button
        className={_className(dark, className)}
        onClick={onClick}
        type={type}
        aria-disabled={disabled}
        disabled={disabled}
      >
        {_leadingIcon(leadingIcon)}
        {children}
        {_trailingIcon(trailingIcon)}
      </button>
    );
  } else {
    return (
      <Link
        className={_className(dark, className)}
        href={href ?? {}}
        type={type}
        aria-disabled={disabled}
      >
        {_leadingIcon(leadingIcon)}
        {children}
        {_trailingIcon(trailingIcon)}
      </Link>
    );
  }
}

const _className = (dark?: boolean, className?: string ): string =>
  `${dark ? 'text-beige border border-beige hover:bg-beige/25 focus:ring-beige/50' : 'text-green-dark border border-red hover:bg-red/25 focus:ring-red/50'}  flex items-center rounded-full px-5 py-3 uppercase tracking-wider focus:outline-none focus:ring ${className}`;

const _leadingIcon = (
  icon?: IconType,
): FunctionComponentElement<IconBaseProps> | undefined =>
  icon && React.createElement(icon, { className: "mr-2 h-[24px] w-[24px]" });

const _trailingIcon = (
  icon?: IconType,
): FunctionComponentElement<IconBaseProps> | undefined =>
  icon && React.createElement(icon, { className: "ml-2 h-[24px] w-[24px]" });
