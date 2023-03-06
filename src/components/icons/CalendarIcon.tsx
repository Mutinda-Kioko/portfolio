import * as React from "react";
import { SVGProps } from "react";

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.375 0A.625.625 0 0 1 5 .625v.625h10V.625a.625.625 0 1 1 1.25 0v.625h1.25a2.5 2.5 0 0 1 2.5 2.5V17.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 0 17.5V6.25h20V5H0V3.75a2.5 2.5 0 0 1 2.5-2.5h1.25V.625A.625.625 0 0 1 4.375 0Z"
      fill="#ABB2BF"
    />
  </svg>
);

export default CalendarIcon;
