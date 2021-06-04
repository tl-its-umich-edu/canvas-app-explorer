// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function SphereIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 428 328"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <radialGradient
          cx={"35.542%"}
          cy={"34.553%"}
          fx={"35.542%"}
          fy={"34.553%"}
          r={"96.031%"}
          id={"FftVK5nZ1a"}
        >
          <stop stopColor={"#DFDFDF"} offset={"0%"}></stop>

          <stop stopColor={"#4C4C4C"} offset={"44.317%"}></stop>

          <stop stopColor={"#333"} offset={"100%"}></stop>
        </radialGradient>
      </defs>

      <g fill={"none"} fillRule={"evenodd"}>
        <g fill={"#FFF"}>
          <ellipse
            fillOpacity={".04"}
            cx={"185"}
            cy={"15.576"}
            rx={"16"}
            ry={"15.576"}
          ></ellipse>

          <ellipse
            fillOpacity={".24"}
            cx={"100"}
            cy={"68.402"}
            rx={"24"}
            ry={"23.364"}
          ></ellipse>

          <ellipse
            fillOpacity={".12"}
            cx={"29"}
            cy={"251.231"}
            rx={"29"}
            ry={"28.231"}
          ></ellipse>

          <ellipse
            fillOpacity={".64"}
            cx={"29"}
            cy={"251.231"}
            rx={"8"}
            ry={"7.788"}
          ></ellipse>

          <ellipse
            fillOpacity={".12"}
            cx={"342"}
            cy={"31.303"}
            rx={"8"}
            ry={"7.788"}
          ></ellipse>

          <ellipse
            fillOpacity={".48"}
            cx={"62"}
            cy={"126.811"}
            rx={"2"}
            ry={"1.947"}
          ></ellipse>

          <ellipse
            fillOpacity={".12"}
            cx={"78"}
            cy={"7.072"}
            rx={"2"}
            ry={"1.947"}
          ></ellipse>

          <ellipse
            fillOpacity={".64"}
            cx={"185"}
            cy={"15.576"}
            rx={"6"}
            ry={"5.841"}
          ></ellipse>
        </g>

        <circle
          fill={"url(#FftVK5nZ1a)"}
          cx={"276"}
          cy={"237"}
          r={"200"}
        ></circle>
      </g>
    </svg>
  );
}

export default SphereIcon;
/* prettier-ignore-end */
