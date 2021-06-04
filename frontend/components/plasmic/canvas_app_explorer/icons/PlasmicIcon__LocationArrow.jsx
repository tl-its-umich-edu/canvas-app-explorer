// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LocationArrowIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 1792 1792"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1593 349L953 1629q-17 35-57 35-5 0-15-2-22-5-35.5-22.5T832 1600v-576H256q-22 0-39.5-13.5T194 975t4-42 29-30l1280-640q13-7 29-7 27 0 45 19 15 14 18.5 34.5T1593 349z"
        }
      ></path>
    </svg>
  );
}

export default LocationArrowIcon;
/* prettier-ignore-end */
