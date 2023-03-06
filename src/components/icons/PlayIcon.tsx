import * as React from "react";
import { SVGProps } from "react";

const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.192 10.394 2.466 17.778C1.386 18.404 0 17.646 0 16.384V1.616C0 .356 1.384-.404 2.466.224l12.726 7.384a1.603 1.603 0 0 1 0 2.786Z"
      fill="#ABB2BF"
    />
  </svg>
);

export default PlayIcon;
