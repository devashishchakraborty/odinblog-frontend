import React from "react";

export default function MainLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3 3v18h18V3zm15 15H6v-1h12zm0-2H6v-1h12zm0-4H6V6h12z"
      />
    </svg>
  );
}
