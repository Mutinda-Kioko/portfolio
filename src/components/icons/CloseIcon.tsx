import * as React from "react";
import { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#D9D9D9" d="M11 12h1v-1h-1z" />
    <path fill="#D9D9D9" d="M3 19.97 19.97 3l1.415 1.415-16.97 16.97z" />
    <path fill="#D9D9D9" d="m4 3 16.97 16.97-1.414 1.415-16.97-16.97z" />
  </svg>
);

export default CloseIcon;
