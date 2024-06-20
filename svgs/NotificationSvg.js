import * as React from "react";
import Svg, { Path } from "react-native-svg";

function NotificationSvg() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12 21.75a1.951 1.951 0 001.941-1.95H10.06c0 1.072.873 1.95 1.941 1.95zm6.309-5.85v-5.363c0-2.973-2.087-5.508-4.853-6.142v-.682c0-.83-.63-1.463-1.456-1.463-.825 0-1.456.634-1.456 1.462v.683c-2.766.634-4.853 3.169-4.853 6.143V15.9L3.75 17.85v.975h16.5v-.975l-1.941-1.95z"
        fill="#fff"
      />
    </Svg>
  );
}

export default NotificationSvg;
