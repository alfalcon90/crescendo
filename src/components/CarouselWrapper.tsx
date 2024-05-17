"use client";

import React, { useState } from "react";
import Carousel from "./Carousel";
import { circleButtonStyle } from "./CircleButton";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

const _buttonStyle = `bg-red [&]:bg-beige [&]:text-red m-4 ${circleButtonStyle}`;
const _dotStyle = "h-2.5 w-2.5 rounded-full mx-1";

export default function CarouselWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Carousel
      swipeTreshold={60}
      activeSlideIndex={activeSlide}
      onRequestChange={setActiveSlide}
      forwardBtnProps={{
        className: _buttonStyle,
        children: React.createElement(PiCaretRightLight, {
          className: "h-6 w-6",
        }),
      }}
      backwardBtnProps={{
        className: _buttonStyle,
        children: React.createElement(PiCaretLeftLight, {
          className: "h-6 w-6",
        }),
      }}
      dotsNav={{
        show: true,
        itemBtnProps: {
          className: `bg-beige/25 ${_dotStyle}`,
        },
        activeItemBtnProps: {
          className: `bg-beige ${_dotStyle}`,
        },
      }}
      itemsToShow={1}
      speed={200}
      infinite={false}
      hideNavIfAllVisible={false}
    >
      {children}
    </Carousel>
  );
}
