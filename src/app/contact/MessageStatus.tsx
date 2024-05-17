import { AsyncValue } from "../server/asyncValue";
import { IconType } from "react-icons";
import React from "react";
import Spinner from "@/components/Spinner";
import { PiCheckLight, PiCloudXLight, PiExclamationMarkLight } from "react-icons/pi";

export default function MessageStatus({ value }: { value: AsyncValue }) {
  return (
    <div className="flex h-full w-full items-center space-x-4">
      {value === AsyncValue.loading ? (
        <Spinner />
      ) : (
        <div
          className={`bg-${_color(value)} rounded-full p-4 text-beige-light`}
        >
          {React.createElement(_icon(value), {
            className: "h-8 w-8",
          })}
        </div>
      )}
      <p className="text-center text-xl">{_message(value)}</p>
    </div>
  );
}

function _icon(value: AsyncValue): IconType {
  switch (value) {
    case AsyncValue.error:
      return PiCloudXLight;
    default:
      return PiCheckLight;
  }
}

function _color(value: AsyncValue): string {
  switch (value) {
    case AsyncValue.error:
      return "red";
    default:
      return "green-light";
  }
}

function _message(value: AsyncValue): string {
  switch (value) {
    case AsyncValue.loading:
      return "Sending...";
    case AsyncValue.error:
      return "There was an error sending the message.";
    default:
      return "Message was successfully sent!";
  }
}
