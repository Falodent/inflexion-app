// components/AnimatedLogo.jsx
import React from "react";

const AnimatedLogo = () => {
  return (
    <svg
      width="100%"
      height="280"
      viewBox="0 0 1336 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block mx-auto object-contain mt-[200px]"
    >
      {/* Blue square - will not animate */}
      <path
        className="logo-path"
        style={{ animationDelay: "3s" }}
        d="M1335.05 279.999H1265.98V212.497H1335.05V279.999Z"
        fill="#0000FF"
        stroke="#0000FF"
      />

      {/* D letter */}
      <path
        className="logo-path"
        style={{ animationDelay: "2.65s" }}
        d="M1016.36 0.571289H1130.96C1177.01 0.571289 1212.33 12.9991 1236.92 37.8546C1261.52 62.4485 1273.81 96.5922 1273.81 140.286C1273.81 183.979 1261.52 218.253 1236.92 243.109C1212.33 267.703 1177.01 280 1130.96 280H1016.36V0.571289ZM1082.69 223.879H1129.78C1153.85 223.879 1172.3 216.945 1185.12 203.079C1198.2 188.95 1204.74 168.019 1204.74 140.286C1204.74 112.552 1198.2 91.7519 1185.12 77.8851C1172.3 63.7567 1153.85 56.6925 1129.78 56.6925H1082.69V223.879Z"
        fill="#030303"
        stroke="#030303"
        strokeWidth="2"
      />

      {/* X letter */}
      <path
        className="logo-path"
        style={{ animationDelay: "2.25s" }}
        d="M1011.41 0.571289L920.754 136.753L1017.3 280H940.377L917.222 245.071C906.234 228.588 894.198 210.012 881.116 189.343C877.192 195.884 865.287 214.46 845.403 245.071L822.248 280H746.896L843.833 137.931L752.783 0.571289H829.312L850.505 33.1451C850.766 33.93 861.624 51.1981 883.079 84.9493C895.376 64.8032 906.234 47.5352 915.652 33.1451L937.238 0.571289H1011.41Z"
        fill="#030303"
        stroke="#030303"
        strokeWidth="2"
      />

      {/* L letter */}
      <path
        className="logo-path"
        style={{ animationDelay: "1.75s" }}
        d="M635.578 0.571289V220.739H763.519V280H569.253V0.571289H635.578Z"
        fill="#030303"
        stroke="#030303"
        strokeWidth="2"
      />

      {/* F letter */}
      <path
        className="logo-path"
        style={{ animationDelay: "1.25s" }}
        d="M558.631 0.571289V59.8321H419.702V110.459H548.035V166.58H419.702V280H353.377V0.571289H558.631Z"
        fill="#030303"
        stroke="#030303"
        strokeWidth="2"
      />

      {/* N letter */}
      <path
        className="logo-path"
        style={{ animationDelay: "0.75s" }}
        d="M271.275 59.0472V0.571289H334.461V280H263.034L194.747 168.542C173.816 133.745 159.295 108.366 151.184 92.406C152.23 128.25 152.754 171.29 152.754 221.524V280H89.5684V0.571289H160.995L229.283 112.029C248.905 144.472 263.426 170.112 272.845 188.95C271.799 152.583 271.275 109.282 271.275 59.0472Z"
        fill="#030303"
        stroke="#030303"
        strokeWidth="2"
      />

      {/* I letter */}
      <path
        className="logo-path"
        style={{ animationDelay: "0.5s" }}
        d="M66.6708 280H0.345703V0.571289H66.6708V280Z"
        fill="#030303"
        stroke="#030303"
        strokeWidth="2"
      />
    </svg>
  );
};

export default AnimatedLogo;
