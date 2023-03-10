import * as React from "react";
import { SVGProps } from "react";

const CardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 2.667C0 1.959.29 1.28.805.78A2.794 2.794 0 0 1 2.75 0h16.5c.73 0 1.429.281 1.945.781.515.5.805 1.178.805 1.886v6.666H0V2.667ZM15.813 4a.698.698 0 0 0-.487.195.656.656 0 0 0-.201.472V6c0 .177.072.346.201.471a.698.698 0 0 0 .486.196h2.75c.183 0 .358-.07.487-.196A.656.656 0 0 0 19.25 6V4.667a.656.656 0 0 0-.201-.472.698.698 0 0 0-.486-.195h-2.75ZM0 12v1.333c0 .708.29 1.386.805 1.886.516.5 1.216.781 1.945.781h16.5c.73 0 1.429-.281 1.945-.781.515-.5.805-1.178.805-1.886V12H0Z"
      fill="#ABB2BF"
    />
  </svg>
);

export default CardIcon;
