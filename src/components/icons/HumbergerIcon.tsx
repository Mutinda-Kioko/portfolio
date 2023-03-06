import * as React from "react";
import { SVGProps } from "react";

const HumbergerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#D9D9D9" d="M0 5h24v2H0zM9 12h15v2H9z" />
  </svg>
);

export default HumbergerIcon;
