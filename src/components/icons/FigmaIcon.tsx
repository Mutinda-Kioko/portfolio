import * as React from "react";
import { SVGProps } from "react";

const FigmaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 10c0-.884.369-1.732 1.025-2.357a3.59 3.59 0 0 1 2.475-.976 3.59 3.59 0 0 1 2.475.976A3.255 3.255 0 0 1 14 10c0 .884-.369 1.732-1.025 2.357a3.59 3.59 0 0 1-2.475.976 3.59 3.59 0 0 1-2.475-.976A3.255 3.255 0 0 1 7 10Zm-7 6.667c0-.884.369-1.732 1.025-2.357a3.59 3.59 0 0 1 2.475-.977H7v3.334c0 .884-.369 1.732-1.025 2.357A3.59 3.59 0 0 1 3.5 20a3.59 3.59 0 0 1-2.475-.976A3.255 3.255 0 0 1 0 16.667ZM7 0v6.667h3.5a3.59 3.59 0 0 0 2.475-.977A3.255 3.255 0 0 0 14 3.333c0-.884-.369-1.732-1.025-2.357A3.59 3.59 0 0 0 10.5 0H7ZM0 3.333c0 .884.369 1.732 1.025 2.357a3.59 3.59 0 0 0 2.475.977H7V0H3.5a3.59 3.59 0 0 0-2.475.976A3.255 3.255 0 0 0 0 3.333ZM0 10c0 .884.369 1.732 1.025 2.357a3.59 3.59 0 0 0 2.475.976H7V6.667H3.5a3.59 3.59 0 0 0-2.475.976A3.255 3.255 0 0 0 0 10Z"
      fill="#ABB2BF"
    />
  </svg>
);

export default FigmaIcon;