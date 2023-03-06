import * as React from "react";
import { SVGProps } from "react";

const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 25S19 16.116 19 9.375c0-2.486-1-4.871-2.782-6.63A9.565 9.565 0 0 0 9.5 0C6.98 0 4.564.988 2.782 2.746A9.313 9.313 0 0 0 0 9.375C0 16.115 9.5 25 9.5 25Zm0-10.938a4.783 4.783 0 0 1-3.359-1.372A4.657 4.657 0 0 1 4.75 9.375c0-1.243.5-2.435 1.391-3.315A4.782 4.782 0 0 1 9.5 4.688c1.26 0 2.468.493 3.359 1.372a4.656 4.656 0 0 1 1.391 3.315c0 1.243-.5 2.435-1.391 3.315A4.783 4.783 0 0 1 9.5 14.063Z"
      fill="#ABB2BF"
    />
  </svg>
);

export default LocationIcon;
