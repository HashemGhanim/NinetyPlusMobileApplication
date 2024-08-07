import Svg, { Rect, Path } from "react-native-svg";

export default function GoogleSvg() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width={24} height={24} rx={12} fill="#fff" />
      <Path
        d="M6.99 13.877l-.627 2.34-2.29.048A8.96 8.96 0 013 12c0-1.492.363-2.9 1.006-4.14l2.04.375.893 2.026A5.35 5.35 0 006.649 12c0 .66.12 1.293.34 1.877z"
        fill="#FBBB00"
      />
      <Path
        d="M20.843 10.318a9.014 9.014 0 01-.04 3.56 8.998 8.998 0 01-3.168 5.14l-2.569-.131-.363-2.27a5.364 5.364 0 002.308-2.738h-4.813v-3.56h8.645z"
        fill="#518EF8"
      />
      <Path
        d="M17.634 19.018A8.962 8.962 0 0112 21a8.999 8.999 0 01-7.928-4.735l2.917-2.387a5.351 5.351 0 007.713 2.74l2.932 2.4z"
        fill="#28B446"
      />
      <Path
        d="M17.744 5.072L14.83 7.459a5.353 5.353 0 00-7.89 2.802l-2.933-2.4A8.998 8.998 0 0111.999 3c2.184 0 4.187.778 5.745 2.072z"
        fill="#F14336"
      />
    </Svg>
  );
}
