import React, { useState } from "react";

import useInterval from "../../../../../utils/useInterval";

export const UserStandUp = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 4H30V5H29V4ZM31 5H33V6H31V5ZM35 7H33V6H35V7ZM36 8H35V7H36V8ZM37 9H36V8H37V9ZM38 15V9H37V15H36V17H35V20H34V22H33V24H32V23H30V24H29V22H28V24H27V25H25V24H24V23H23V21H22V20H21V17H20V16V15H19V10H20V8H21V7H23V6H25V5H23V6H21V7H20V8H19V10H18V15H15V16V17H16V19H17V20H18V21H19V22H20V23H17V24H16V25H15V27H14V30H13V39H14V40H15V41H19V40H15V39H14V30H15V27H16V25H17V24H22V25H23V26H24V27H32V26H33H34V25H35V24H36H39V25H40V27H41V30H42V34H39V32H38V31H37H36V33H35V35H36V40H37V41H41V40H42V39H43V30H42V27H41V25H40V24H39V23H36V22H37V21H38V20H39V19H40V17H41V16V15H38ZM39 17V19H38V20H37V21H36V20V17H37V15H38V16V17H39ZM39 17V16H40V17H39ZM36 21V22H35V21H36ZM42 39V35H38V36H37V40H41V39H42ZM36 33V34H38V32H37V33H36ZM32 26V25H31V26H32ZM20 21H19V20H18V19H17V17H18V16H19V17H20V21ZM20 21V22H21V21H20ZM17 17H16V16H17V17ZM24 26H25V25H24V26ZM28 24V25H29V24H28ZM33 36V37H23V36H33ZM38 45H39V46H38V45ZM39 50V46H40V50H39ZM38 51V50H39V51H38ZM33 51H38V52H33V51ZM33 51H32V46H33V51ZM17 46H16V50H17V51H18V52H23V51H24V46H23V51H18V50H17V46ZM17 46V45H18V46H17ZM27 4H26V5H27V4Z"
        fill="#1C0E06"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 48H19V50H21V48ZM37 48H35V50H37V48Z"
        fill="#FBE7A4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36 47H35H34V50H35V51H36V50H35V48H36V47ZM21 50V48H20V47H22V48V50H21ZM21 50V51H20V50H21Z"
        fill="#FDD082"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37 45H38V46H39V48H37V46V45ZM18 46H17V48H19V46V45H18V46ZM19 50H18V51H19V50ZM22 50H23V51H22V50ZM34 50H33V51H34V50ZM38 50H37V51H38V50Z"
        fill="#9E3C27"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33 46H36V47H34V48H33V47V46ZM36 47H37V48H36V47ZM19 49H18V50H19V51H20V50H19V49ZM37 49H38V50H37V49ZM37 50V51H36V50H37ZM22 48V47H20V46H23V47V48H22ZM20 47H19V48H20V47Z"
        fill="#EA9F54"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36 46H37V47H36V46ZM37 48H39V49V50H38V49H37V48ZM18 50V49H19V48H17V49V50H18ZM22 50H21V51H22V50ZM22 50H23V48H22V50ZM35 50H34V48H33V50H34V51H35V50ZM20 46H19V47H20V46Z"
        fill="#D28560"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M34 25H36V26H37V27H39V26H40V27V28H39V29H37V30H35V31H34V32H33V33H31V31H30V36H26V31H25V32V33H23V32H22V31H21V30H19V29H17V28H16V26H17V27H19V26H20V25H22V26H23V27H25V28H31V27H33V26H34V25ZM15 31H16V33H15V31ZM41 31H40V33H41V31Z"
        fill="#E5E6C7"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 7H27V8H26V10H25V9V8H24V9H23V11H22V17H23V16H24V17H25V18H26V17V16V15H27V17H28V14H29V12H30V11H31V13H33V12H34V13H36V12H35V11V10H34V11H33V10H32V9H31V10H30V8H29V12H27V10V9H28V7ZM27 12H26V13V14H27V12ZM24 13H23V14H24V13ZM30 14H31V15H30V14ZM33 15H32V17H33V15Z"
        fill="#EDDF95"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 6H27V7H24H23V9H22V10H20V14H21V15H20V16H21H22V14V11H23V9H24V8H25V10H26V8H27V7H29V8H28V12H29V14H28V17H27V15H26V18H25V17H24V16H23V17H22V19H25V20H26V19H27V21H28V17H29V19H30V17H31V16H32V13H31V15H30V12H29V8H30V10H31V9H32V10H33V11H34V8H33V7H32V8H31H30V7H29V6ZM32 8H33V9H32V8ZM30 15H29V17H30V15ZM35 11H36V12H35V11ZM33 12H34V13H36V15H35V16H34V15H33V12ZM35 16H36V17H35V16ZM32 17H33V18H32V17ZM32 19H31V18H32V19ZM32 19H33V20H32V19ZM31 20H30V21H31V20Z"
        fill="#C0AB81"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 4H27V5H25V6H27V5H28V6H31V7H32V6H31V5H29V4ZM35 7H34V8H35V9H36V11H37V9H36V8H35V7ZM20 10H19V11H20V10ZM21 8V10H20V8H21ZM21 8H22V7H21V8ZM19 13H20V15H19V13ZM35 17H34V19H33V20H31V18H30V20H31V21H29V20H28V21H27V23H26V22H24V20H23V19H22V18H21V20H22V21H23V23H24V24H25V25H26H27V24H28V25H29V24H28V22H29H30V23H32V24H33V23V22H34V21V20H35V19V17ZM23 6H24V7H23V6Z"
        fill="#7D5D5D"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35 24H36V25H35V24ZM40 27H41V29H40V27ZM37 29H39V30H37V29ZM36 31V30H37V31H36ZM35 32V31H36V32H35ZM35 32V35H34V34H32V33H34V32H35ZM15 31H14V32H15V31ZM20 31H21V32H20V31ZM19 30H20V31H19V30ZM19 30H17V29H19V30ZM21 32H22V33H24V34H22V35H21V32ZM42 31H41V32H42V31ZM38 31H39V32H38V31ZM16 27H15V29H16V27ZM21 24H20V25H21V24Z"
        fill="#958080"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36 24H38V25H36V24ZM32 26H33V27H32V26ZM31 27H25V28H31V27ZM40 28H39V30H38V31H39V34H40V31H41V29H40V28ZM35 31H34V32H33V33H34V32H35V31ZM35 31H36V30H35V31ZM14 32H15V33H14V32ZM42 32H41V33H42V32ZM32 33H31V31H30V36H31H32H33V35H34V34H33H32V33ZM22 34H23H24V33H25V31H26V33V34V36H23V35H22V34ZM23 32H22V31H21V30H20V31H21V32H22V33H23V32ZM17 30H18V31H17V34H16V31H15V29H16V28H17V30ZM24 26H23V27H24V26ZM20 24H18V25H20V24Z"
        fill="#C4B59F"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M41 35H40H39V36H38V38H37V39H38H39V40H40V39H41V37H40V36H41V35ZM15 37H16V36H15V35H17V36H18V37V38H19V39H18H17V40H16V39H15V37Z"
        fill="#FDD082"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 35H14V37H15V35ZM41 35H42V37H41V35ZM37 37H38V38H37V37ZM19 40V39H17V40H19ZM37 39V40H39V39H37ZM19 37H18V38H19V37ZM39 35H38V36H39V35ZM17 35H18V36H17V35Z"
        fill="#EA9F54"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 37H14V38H15V37ZM41 37H42V38H41V37ZM16 39H15V40H16V39ZM41 39H40V40H41V39Z"
        fill="#D28560"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 36H15V37H16V36ZM41 36H40V37H41V36Z"
        fill="#FBE7A4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37 36H38V37H37V36ZM15 38H14V39H15V38ZM42 38H41V39H42V38ZM19 36H18V37H19V36Z"
        fill="#9E3C27"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 31H20V32V33H19V32H18V34H20V33H21V34V35H20V36V40H19V36H18V35H14V34H17V31H18ZM21 35H23V36H21V35ZM33 35H35V36H33V35Z"
        fill="#1C0E06"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31 37H25V39H26V40H30V39H31V37ZM20 39H22V40H23V42H22V43H20V39ZM34 39H36V43H34V42H33V40H34V39Z"
        fill="#79979D"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35 37H36V38H35V37ZM20 40H19V43H20V40ZM36 40H37V43H36V40ZM32 42H33V43H32V42ZM22 45V44H20V45H22ZM34 44V45H36V44H34ZM24 42H23V43H24V42ZM33 40H32V41H33V40ZM29 40H31V41H29V40ZM27 40H25V41H27V40ZM23 40H24V41H23V40ZM34 37H33V39H34V37ZM22 37H23V39H22V37ZM21 37H20V38H21V37Z"
        fill="#315B49"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35 36H33V37H31V39H30V40H32V39H33V40H34V39H36V38H35V37V36ZM34 39H33V37H34V39ZM20 38H21V36H22H23V37H22V38V39H20V38ZM23 39V40H22V39H23ZM23 39H24V40H26V39H25V37H23V39ZM27 40H28H29V41H28H27V40ZM20 43V44H22V45H23V42H24V41H23V42H22V43H20ZM33 45V42H34V43H36V44H34V45H33ZM33 42H32V41H33V42Z"
        fill="#557E85"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35 35H36V37H35V35ZM32 39H33V40H32V39ZM32 40V42H31V40H32ZM20 43H19V45H20V43ZM23 43H24V44H23V43ZM33 43H32V44H33V43ZM37 43H36V45H37V43ZM25 40H24V39H23V40H24V42H25V40ZM21 35H20V37H21V35Z"
        fill="#2E403A"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 41H18V45H19V46H23V45H19V41ZM37 41H38V45H37V41ZM37 45V46H32V45V44H33V45H37Z"
        fill="#2C2D16"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31 41H25V42H24V44H23V46H24V44H25V42H31V44H32V42H31V41Z"
        fill="#2C2D16"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38 24H39V25H38V24ZM39 25H40V26H39V25ZM15 30H14V31H15V30ZM18 30H19V31H18V30ZM41 30H42V31H41V30ZM21 32H20V33H21V32ZM36 32H35V33H36V32ZM38 30H37V31H38V30ZM17 25H16V26H17V25ZM17 25V24H18V25H17Z"
        fill="#424242"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25 25H24V26H25V25ZM32 25H31V26H32V25Z"
        fill="#EA9F54"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 24H21V25H22V26H23V25H22V24Z"
        fill="#281820"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 5H27V6H24V7H27V6H28V5ZM32 6H33V7H32V6ZM32 8V7H31V6H29V7H28V8H29V7H30V8H32ZM33 8V9H32V8H33ZM34 8H33V7H34V8ZM36 11H35V10H34V8H35V9H36V11ZM36 15V12V11H37V12V15H36ZM35 16V15H36V16H35ZM32 19H33H34V17H35V16H34V15H33V18H32V17V16H31V17H30V15H29V17H28V20H29V21H30V19H29V17H30V18H32V19ZM32 19V20H31V19H32ZM20 11H19V13H20V11ZM20 14H21V15H20V14ZM22 16V17V18H21V17H20V16H22ZM23 19H22V18H23V19ZM23 19H25V20H26V19H27V20V22V23H26V22H24V20H23V19ZM30 22H29V24H30V22ZM22 8H21V10H22V9H23V7H22V8Z"
        fill="#A87D52"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 18H18V19H19V21H20V19H19V18ZM37 18H38V19H37V18ZM37 19V21H36V19H37Z"
        fill="#FDD082"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38 15H37V17H38V15ZM18 16H19V17H18V16ZM21 21H20V22H21V21ZM36 21H35V22H36V21Z"
        fill="#9E3C27"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37 17H38V18H37V17ZM37 19H36V18H37V19ZM37 19H38V20H37V19ZM19 19H18V20H19V19ZM19 18V17H18V18H19ZM19 18V19H20V18H19Z"
        fill="#EA9F54"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 17H19V18H20V17ZM37 17H36V18H37V17Z"
        fill="#D28560"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 9H27V12H26V14H27V12H28V9ZM30 11H31V14H30V11ZM23 13H24V14H23V13ZM32 13H33V15H32V13Z"
        fill="#F6F6F3"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40 16H39V17H40V16ZM39 17H38V19H39V17ZM17 17H18V19H17V17ZM17 17V16H16V17H17Z"
        fill="#EAA377"
      />
    </svg>
  );
};

export const UserUp = () => {
  const [state, setState] = useState(0);

  useInterval(() => {
    setState((state + 1) % 2);
  }, 300);

  switch (state) {
    case 0:
      return <UserUp1 />;
    case 1:
    default:
      return <UserUp2 />;
  }
};

function UserUp1() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="31" y="52" width="5" height="1" fill="#281716" />
      <rect x="36" y="51" width="1" height="1" fill="#281716" />
      <rect x="37" y="47" width="1" height="4" fill="#281716" />
      <rect x="36" y="46" width="1" height="1" fill="#281716" />
      <rect x="30" y="46" width="1" height="6" fill="#281716" />
      <rect x="32" y="51" width="1" height="1" fill="#D28560" />
      <rect x="36" y="50" width="1" height="1" fill="#D28560" />
      <rect x="35" y="49" width="2" height="1" fill="#D28560" />
      <rect x="31" y="49" width="1" height="2" fill="#D28560" />
      <rect x="34" y="47" width="1" height="1" fill="#D28560" />
      <rect x="31" y="46" width="1" height="1" fill="#D28560" />
      <rect x="34" y="51" width="1" height="1" fill="#EA9F54" />
      <rect x="35" y="50" width="1" height="1" fill="#EA9F54" />
      <rect x="34" y="48" width="1" height="1" fill="#EA9F54" />
      <rect x="31" y="47" width="1" height="2" fill="#EA9F54" />
      <rect x="32" y="46" width="2" height="2" fill="#EA9F54" />
      <rect x="33" y="51" width="1" height="1" fill="#FDD082" />
      <rect x="33" y="48" width="1" height="1" fill="#FDD082" />
      <rect x="32" y="48" width="1" height="3" fill="#FDD082" />
      <rect x="35" y="51" width="1" height="1" fill="#9E3C27" />
      <rect x="31" y="51" width="1" height="1" fill="#9E3C27" />
      <rect x="36" y="47" width="1" height="2" fill="#9E3C27" />
      <rect x="35" y="47" width="1" height="2" fill="#9E3C27" />
      <rect x="34" y="46" width="2" height="1" fill="#9E3C27" />
      <rect x="33" y="49" width="2" height="2" fill="#FBE7A4" />
      <rect x="22" y="48" width="1" height="1" fill="#FDD082" />
      <rect x="21" y="46" width="3" height="2" fill="#FDD082" />
      <rect x="21" y="48" width="1" height="1" fill="#EA9F54" />
      <rect x="20" y="47" width="1" height="1" fill="#EA9F54" />
      <rect x="21" y="45" width="3" height="1" fill="#EA9F54" />
      <rect x="24" y="48" width="1" height="1" fill="#9E3C27" />
      <rect x="19" y="48" width="2" height="1" fill="#9E3C27" />
      <rect x="19" y="45" width="1" height="2" fill="#9E3C27" />
      <rect x="24" y="44" width="1" height="2" fill="#9E3C27" />
      <rect x="21" y="44" width="1" height="1" fill="#9E3C27" />
      <rect x="20" y="44" width="1" height="2" fill="#9E3C27" />
      <rect x="23" y="48" width="1" height="1" fill="#D28560" />
      <rect x="19" y="47" width="1" height="1" fill="#D28560" />
      <rect x="24" y="46" width="1" height="2" fill="#D28560" />
      <rect x="20" y="46" width="1" height="1" fill="#D28560" />
      <rect x="22" y="44" width="2" height="1" fill="#D28560" />
      <rect x="19" y="49" width="6" height="1" fill="#281716" />
      <rect x="18" y="45" width="1" height="4" fill="#281716" />
      <rect x="25" y="44" width="1" height="5" fill="#281716" />
      <rect x="19" y="44" width="1" height="1" fill="#281716" />
      <rect x="23" y="36" width="10" height="1" fill="#1C0E06" />
      <rect x="14" y="28" width="1" height="2" fill="#1C0E06" />
      <rect x="41" y="27" width="1" height="3" fill="#1C0E06" />
      <rect x="24" y="26" width="8" height="1" fill="#1C0E06" />
      <rect x="40" y="25" width="1" height="2" fill="#1C0E06" />
      <rect x="33" y="25" width="1" height="1" fill="#1C0E06" />
      <rect x="32" y="25" width="1" height="1" fill="#1C0E06" />
      <rect x="25" y="25" width="6" height="1" fill="#1C0E06" />
      <rect x="23" y="25" width="1" height="1" fill="#1C0E06" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M34 25H36V26H37V27H39V26H40V27V28H39V29H37V30H35V31H34V32H33V33H31V31H30V36H26V31H25V32V33H23V32H22V31H21V30H19V29H17V28H16V26H17V27H19V26H20V25H22V26H23V27H25V28H31V27H33V26H34V25ZM15 31H16V33H15V31Z"
        fill="#E5E6C7"
      />
      <rect x="39" y="24" width="1" height="1" fill="#1C0E06" />
      <rect x="34" y="24" width="1" height="1" fill="#1C0E06" />
      <rect x="29" y="24" width="5" height="1" fill="#1C0E06" />
      <rect x="27" y="24" width="1" height="1" fill="#1C0E06" />
      <rect x="22" y="24" width="3" height="1" fill="#1C0E06" />
      <rect x="36" y="23" width="3" height="1" fill="#1C0E06" />
      <rect x="30" y="23" width="2" height="1" fill="#1C0E06" />
      <rect x="35" y="22" width="1" height="2" fill="#1C0E06" />
      <rect x="33" y="22" width="2" height="2" fill="#1C0E06" />
      <rect x="28" y="22" width="1" height="2" fill="#1C0E06" />
      <rect x="20" y="22" width="1" height="1" fill="#1C0E06" />
      <rect x="36" y="21" width="1" height="1" fill="#1C0E06" />
      <rect x="22" y="21" width="1" height="2" fill="#1C0E06" />
      <rect x="19" y="21" width="1" height="1" fill="#1C0E06" />
      <rect x="37" y="20" width="1" height="1" fill="#1C0E06" />
      <rect x="35" y="20" width="1" height="1" fill="#1C0E06" />
      <rect x="34" y="20" width="1" height="2" fill="#1C0E06" />
      <rect x="21" y="20" width="1" height="3" fill="#1C0E06" />
      <rect x="18" y="20" width="1" height="1" fill="#1C0E06" />
      <rect x="38" y="19" width="1" height="1" fill="#1C0E06" />
      <rect x="17" y="19" width="1" height="1" fill="#1C0E06" />
      <rect x="39" y="17" width="1" height="2" fill="#1C0E06" />
      <rect x="35" y="17" width="1" height="3" fill="#1C0E06" />
      <rect x="20" y="17" width="1" height="4" fill="#1C0E06" />
      <rect x="16" y="17" width="1" height="2" fill="#1C0E06" />
      <rect x="40" y="16" width="1" height="1" fill="#1C0E06" />
      <rect x="38" y="16" width="1" height="1" fill="#1C0E06" />
      <rect x="19" y="16" width="1" height="1" fill="#1C0E06" />
      <rect x="17" y="16" width="1" height="1" fill="#1C0E06" />
      <rect x="15" y="16" width="1" height="1" fill="#1C0E06" />
      <rect x="38" y="15" width="3" height="1" fill="#1C0E06" />
      <rect x="36" y="15" width="1" height="2" fill="#1C0E06" />
      <rect x="15" y="15" width="5" height="1" fill="#1C0E06" />
      <rect x="18" y="10" width="1" height="5" fill="#1C0E06" />
      <rect x="37" y="9" width="1" height="6" fill="#1C0E06" />
      <rect x="36" y="8" width="1" height="1" fill="#1C0E06" />
      <rect x="19" y="8" width="1" height="2" fill="#1C0E06" />
      <rect x="35" y="7" width="1" height="1" fill="#1C0E06" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 7H27V8H26V10H25V9V8H24V9H23V11H22V17H23V16H24V17H25V18H26V17V16V15H27V17H28V14H29V12H30V11H31V13H33V12H34V13H36V12H35V11V10H34V11H33V10H32V9H31V10H30V8H29V12H27V10V9H28V7ZM27 12H26V13V14H27V12ZM24 13H23V14H24V13ZM30 14H31V15H30V14ZM33 15H32V17H33V15Z"
        fill="#EDDF95"
      />
      <rect x="20" y="7" width="1" height="1" fill="#1C0E06" />
      <rect x="33" y="6" width="2" height="1" fill="#1C0E06" />
      <rect x="21" y="6" width="2" height="1" fill="#1C0E06" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 6H27V7H24H23V9H22V10H20V14H21V15H20V16H21H22V14V11H23V9H24V8H25V10H26V8H27V7H29V8H28V12H29V14H28V17H27V15H26V18H25V17H24V16H23V17H22V19H25V20H26V19H27V21H28V17H29V19H30V17H31V16H32V13H31V15H30V12H29V8H30V10H31V9H32V10H33V11H34V8H33V7H32V8H31H30V7H29V6ZM32 8H33V9H32V8ZM30 15H29V17H30V15ZM35 11H36V12H35V11ZM33 12H34V13H36V15H35V16H34V15H33V12ZM35 16H36V17H35V16ZM32 17H33V18H32V17ZM32 19H31V18H32V19ZM32 19H33V20H32V19ZM31 20H30V21H31V20Z"
        fill="#C0AB81"
      />
      <rect x="31" y="5" width="2" height="1" fill="#1C0E06" />
      <rect x="23" y="5" width="2" height="1" fill="#1C0E06" />
      <rect x="29" y="4" width="1" height="1" fill="#1C0E06" />
      <rect x="26" y="4" width="1" height="1" fill="#1C0E06" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 4H27V5H25V6H27V5H28V6H31V7H32V6H31V5H29V4ZM35 7H34V8H35V9H36V11H37V9H36V8H35V7ZM20 10H19V11H20V10ZM21 8V10H20V8H21ZM21 8H22V7H21V8ZM19 13H20V15H19V13ZM35 17H34V19H33V20H31V18H30V20H31V21H29V20H28V21H27V23H26V22H24V20H23V19H22V18H21V20H22V21H23V23H24V24H25V25H26H27V24H28V25H29V24H28V22H29H30V23H32V24H33V23V22H34V21V20H35V19V17ZM23 6H24V7H23V6Z"
        fill="#7D5D5D"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35 24H36V25H35V24ZM41 27H40V29H41V27ZM15 28H16V29H15V28ZM37 29H39V30H37V29ZM36 31V30H37V31H36ZM35 32V31H36V32H35ZM35 32V35H34V34H32V33H34V32H35ZM15 31H14V32H15V31ZM20 31H21V32H20V31ZM19 30H20V31H19V30ZM19 30H17V29H19V30ZM21 32H22V33H24V34H22V35H21V32ZM38 31H39V32H38V31ZM21 24H20V25H21V24Z"
        fill="#958080"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38 24H36V25H38V24ZM33 26H32V27H33V26ZM25 27H31V28H25V27ZM17 28H16V29H15V31H16V34H17V31H18V30H17V28ZM41 29H40V31H41V29ZM39 30H38V31H39V30ZM35 31H34V32H33V33H34V32H35V31ZM35 31H36V30H35V31ZM14 32H15V33H14V32ZM31 33H32V34H33H34V35H33V36H32H31H30V31H31V33ZM23 34H22V35H23V36H26V34V33V31H25V33H24V34H23ZM23 32H22V31H21V30H20V31H21V32H22V33H23V32ZM23 26H24V27H23V26Z"
        fill="#C4B59F"
      />
      <rect x="17" y="40" width="2" height="1" fill="#EA9F54" />
      <rect x="16" y="40" width="1" height="1" fill="#FDD082" />
      <rect x="15" y="40" width="1" height="1" fill="#D28560" />
      <rect x="18" y="39" width="1" height="1" fill="#FDD082" />
      <rect x="14" y="39" width="1" height="1" fill="#9E3C27" />
      <rect x="18" y="38" width="1" height="1" fill="#EA9F54" />
      <rect x="15" y="38" width="3" height="2" fill="#FDD082" />
      <rect x="14" y="38" width="1" height="1" fill="#D28560" />
      <rect x="18" y="37" width="1" height="1" fill="#9E3C27" />
      <rect x="16" y="37" width="2" height="1" fill="#FDD082" />
      <rect x="15" y="37" width="1" height="1" fill="#FBE7A4" />
      <rect x="17" y="36" width="1" height="1" fill="#EA9F54" />
      <rect x="15" y="36" width="2" height="1" fill="#FDD082" />
      <rect x="14" y="36" width="1" height="2" fill="#EA9F54" />
      <rect x="15" y="41" width="4" height="1" fill="#281820" />
      <rect x="14" y="40" width="1" height="1" fill="#281820" />
      <rect x="19" y="37" width="1" height="4" fill="#281820" />
      <rect x="18" y="36" width="2" height="1" fill="#281820" />
      <rect x="13" y="36" width="1" height="4" fill="#281820" />
      <rect x="13" y="35" width="7" height="1" fill="#281820" />
      <rect x="31" y="45" width="5" height="1" fill="#2C2D16" />
      <rect x="35" y="44" width="1" height="1" fill="#2C2D16" />
      <rect x="20" y="43" width="6" height="1" fill="#2C2D16" />
      <rect x="30" y="42" width="1" height="4" fill="#2C2D16" />
      <rect x="25" y="42" width="1" height="1" fill="#2C2D16" />
      <rect x="26" y="41" width="4" height="1" fill="#2C2D16" />
      <rect x="19" y="41" width="1" height="3" fill="#2C2D16" />
      <rect x="36" y="38" width="1" height="5" fill="#2C2D16" />
      <rect x="34" y="44" width="1" height="1" fill="#315B49" />
      <rect x="31" y="43" width="1" height="2" fill="#315B49" />
      <rect x="35" y="42" width="1" height="1" fill="#315B49" />
      <rect x="24" y="42" width="1" height="1" fill="#315B49" />
      <rect x="31" y="41" width="1" height="1" fill="#315B49" />
      <rect x="32" y="40" width="1" height="1" fill="#315B49" />
      <rect x="29" y="40" width="2" height="1" fill="#315B49" />
      <rect x="25" y="40" width="2" height="1" fill="#315B49" />
      <rect x="23" y="40" width="1" height="1" fill="#315B49" />
      <rect x="24" y="39" width="1" height="1" fill="#315B49" />
      <rect x="22" y="39" width="1" height="1" fill="#315B49" />
      <rect x="35" y="37" width="1" height="1" fill="#315B49" />
      <rect x="33" y="37" width="1" height="2" fill="#315B49" />
      <rect x="21" y="37" width="2" height="2" fill="#315B49" />
      <rect x="20" y="37" width="1" height="5" fill="#315B49" />
      <rect x="21" y="36" width="1" height="1" fill="#315B49" />
      <rect x="35" y="43" width="1" height="1" fill="#2E403A" />
      <rect x="20" y="42" width="1" height="1" fill="#2E403A" />
      <rect x="30" y="41" width="1" height="1" fill="#2E403A" />
      <rect x="25" y="41" width="1" height="1" fill="#2E403A" />
      <rect x="31" y="40" width="1" height="1" fill="#2E403A" />
      <rect x="24" y="40" width="1" height="2" fill="#2E403A" />
      <rect x="32" y="39" width="1" height="1" fill="#2E403A" />
      <rect x="23" y="39" width="1" height="1" fill="#2E403A" />
      <rect x="20" y="35" width="1" height="2" fill="#2E403A" />
      <rect x="36" y="43" width="1" height="1" fill="#2C2D16" />
      <rect x="35" y="35" width="1" height="2" fill="#2E403A" />
      <rect x="31" y="42" width="1" height="1" fill="#557E85" />
      <rect x="32" y="41" width="1" height="4" fill="#557E85" />
      <rect x="23" y="41" width="1" height="2" fill="#557E85" />
      <rect x="27" y="40" width="2" height="1" fill="#557E85" />
      <rect x="22" y="40" width="1" height="3" fill="#557E85" />
      <rect x="33" y="39" width="1" height="2" fill="#557E85" />
      <rect x="31" y="39" width="1" height="1" fill="#557E85" />
      <rect x="30" y="39" width="1" height="1" fill="#557E85" />
      <rect x="25" y="39" width="1" height="1" fill="#557E85" />
      <rect x="21" y="39" width="1" height="4" fill="#557E85" />
      <rect x="35" y="38" width="1" height="4" fill="#557E85" />
      <rect x="34" y="38" width="1" height="2" fill="#557E85" />
      <rect x="34" y="37" width="1" height="1" fill="#557E85" />
      <rect x="31" y="37" width="2" height="2" fill="#557E85" />
      <rect x="23" y="37" width="2" height="2" fill="#557E85" />
      <rect x="33" y="36" width="2" height="1" fill="#557E85" />
      <rect x="22" y="36" width="1" height="1" fill="#557E85" />
      <rect x="33" y="41" width="1" height="4" fill="#79979D" />
      <rect x="34" y="40" width="1" height="4" fill="#79979D" />
      <rect x="26" y="39" width="4" height="1" fill="#79979D" />
      <rect x="25" y="37" width="6" height="2" fill="#79979D" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M39 24H38V25H39V26H40V25H39V24ZM15 30H14V31H15V30ZM18 30H19V31H18V30ZM38 30H37V31H38V30ZM20 32H21V33H20V32ZM35 32H36V33H35V32Z"
        fill="#424242"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25 25H24V26H25V25ZM32 25H31V26H32V25Z"
        fill="#EA9F54"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 24H21V25H22V26H23V25H22V24Z"
        fill="#281820"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 5H27V6H24V7H27V6H28V5ZM32 6H33V7H32V6ZM32 8V7H31V6H29V7H28V8H29V7H30V8H32ZM33 8V9H32V8H33ZM34 8H33V7H34V8ZM36 11H35V10H34V8H35V9H36V11ZM36 15V12V11H37V12V15H36ZM35 16V15H36V16H35ZM32 19H33H34V17H35V16H34V15H33V18H32V17V16H31V17H30V15H29V17H28V20H29V21H30V19H29V17H30V18H32V19ZM32 19V20H31V19H32ZM20 11H19V13H20V11ZM20 14H21V15H20V14ZM22 16V17V18H21V17H20V16H22ZM23 19H22V18H23V19ZM23 19H25V20H26V19H27V20V22V23H26V22H24V20H23V19ZM30 22H29V24H30V22ZM22 8H21V10H22V9H23V7H22V8Z"
        fill="#A87D52"
      />
      <rect x="13" y="31" width="1" height="4" fill="#281820" />
      <rect x="42" y="30" width="1" height="2" fill="#281820" />
      <rect x="14" y="28" width="1" height="2" fill="#281820" />
      <rect x="15" y="26" width="1" height="2" fill="#281820" />
      <rect x="16" y="25" width="1" height="1" fill="#281820" />
      <rect x="17" y="24" width="2" height="1" fill="#281820" />
      <rect x="19" y="23" width="5" height="1" fill="#281820" />
      <rect x="40" y="37" width="1" height="1" fill="#D28560" />
      <rect x="37" y="37" width="2" height="1" fill="#EA9F54" />
      <rect x="41" y="36" width="1" height="1" fill="#9E3C27" />
      <rect x="37" y="36" width="1" height="1" fill="#FDD082" />
      <rect x="41" y="35" width="1" height="1" fill="#D28560" />
      <rect x="40" y="35" width="1" height="2" fill="#FDD082" />
      <rect x="37" y="35" width="1" height="1" fill="#EA9F54" />
      <rect x="40" y="34" width="1" height="1" fill="#FBE7A4" />
      <rect x="38" y="34" width="1" height="3" fill="#FDD082" />
      <rect x="37" y="34" width="1" height="1" fill="#9E3C27" />
      <rect x="41" y="33" width="1" height="2" fill="#EA9F54" />
      <rect x="40" y="33" width="1" height="1" fill="#FDD082" />
      <rect x="39" y="33" width="1" height="5" fill="#FDD082" />
      <rect x="38" y="33" width="1" height="1" fill="#EA9F54" />
      <rect x="39" y="37" width="1" height="1" fill="#FDD082" />
      <rect x="38" y="35" width="3" height="2" fill="#FDD082" />
      <rect x="39" y="34" width="2" height="1" fill="#FDD082" />
      <rect x="40" y="33" width="1" height="1" fill="#FDD082" />
      <rect x="37" y="35" width="1" height="1" fill="#EA9F54" />
      <rect x="38" y="34" width="1" height="1" fill="#EA9F54" />
      <rect x="41" y="33" width="1" height="2" fill="#EA9F54" />
      <rect x="39" y="33" width="1" height="1" fill="#EA9F54" />
      <rect x="37" y="37" width="1" height="1" fill="#9E3C27" />
      <rect x="41" y="36" width="1" height="1" fill="#9E3C27" />
      <rect x="37" y="34" width="1" height="1" fill="#9E3C27" />
      <rect x="40" y="37" width="1" height="1" fill="#D28560" />
      <rect x="38" y="37" width="1" height="1" fill="#D28560" />
      <rect x="37" y="36" width="1" height="1" fill="#D28560" />
      <rect x="41" y="35" width="1" height="1" fill="#D28560" />
      <rect x="38" y="33" width="1" height="1" fill="#D28560" />
      <rect x="37" y="38" width="4" height="1" fill="#281820" />
      <rect x="41" y="37" width="1" height="1" fill="#281820" />
      <rect x="36" y="34" width="1" height="4" fill="#281820" />
      <rect x="42" y="33" width="1" height="4" fill="#281820" />
      <rect x="37" y="33" width="1" height="1" fill="#281820" />
      <rect x="37" y="32" width="6" height="1" fill="#281820" />
      <rect x="33" y="35" width="2" height="1" fill="#281820" />
      <rect x="17" y="34" width="1" height="1" fill="#281820" />
      <rect x="35" y="33" width="1" height="2" fill="#281820" />
      <rect x="20" y="33" width="1" height="2" fill="#281820" />
      <rect x="18" y="33" width="1" height="1" fill="#281820" />
      <rect x="36" y="31" width="2" height="2" fill="#281820" />
      <rect x="18" y="31" width="2" height="2" fill="#281820" />
      <rect x="21" y="35" width="2" height="1" fill="#281820" />
      <rect x="16" y="34" width="1" height="1" fill="#C4B59F" />
      <rect x="15" y="33" width="1" height="1" fill="#E5E6C7" />
      <rect x="14" y="33" width="1" height="1" fill="#C4B59F" />
      <rect x="40" y="31" width="1" height="1" fill="#C4B59F" />
      <rect x="17" y="31" width="1" height="3" fill="#C4B59F" />
      <rect x="41" y="30" width="1" height="2" fill="#958080" />
      <rect x="39" y="30" width="1" height="2" fill="#C4B59F" />
      <rect x="39" y="28" width="1" height="2" fill="#958080" />
      <rect x="17" y="25" width="3" height="1" fill="#958080" />
      <rect x="19" y="24" width="1" height="1" fill="#958080" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 18H18V19H19V21H20V19H19V18ZM37 18H38V19H37V18ZM37 19V21H36V19H37Z"
        fill="#FDD082"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M38 15H37V17H38V15ZM18 16H19V17H18V16ZM21 21H20V22H21V21ZM36 21H35V22H36V21Z"
        fill="#9E3C27"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37 17H38V18H37V17ZM37 19H36V18H37V19ZM37 19H38V20H37V19ZM19 19H18V20H19V19ZM19 18V17H18V18H19ZM19 18V19H20V18H19Z"
        fill="#EA9F54"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20 17H19V18H20V17ZM37 17H36V18H37V17Z"
        fill="#D28560"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 9H27V12H26V14H27V12H28V9ZM30 11H31V14H30V11ZM23 13H24V14H23V13ZM32 13H33V15H32V13Z"
        fill="#F6F6F3"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40 16H39V17H40V16ZM39 17H38V19H39V17ZM17 17H18V19H17V17ZM17 17V16H16V17H17Z"
        fill="#EAA377"
      />
    </svg>
  );
}

function UserUp2() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="5"
        height="1"
        transform="matrix(-1 0 0 1 25 52)"
        fill="#281716"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 20 51)"
        fill="#281716"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 19 47)"
        fill="#281716"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 20 46)"
        fill="#281716"
      />
      <rect
        width="1"
        height="6"
        transform="matrix(-1 0 0 1 26 46)"
        fill="#281716"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 24 51)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 20 50)"
        fill="#D28560"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 21 49)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 25 49)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 22 47)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 25 46)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 22 51)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 21 50)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 22 48)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 25 47)"
        fill="#EA9F54"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 24 46)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 23 51)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 23 48)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 24 48)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 21 51)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 25 51)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 20 47)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 21 47)"
        fill="#9E3C27"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 22 46)"
        fill="#9E3C27"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 23 49)"
        fill="#FBE7A4"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 34 48)"
        fill="#FDD082"
      />
      <rect
        width="3"
        height="2"
        transform="matrix(-1 0 0 1 35 46)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 35 48)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 47)"
        fill="#EA9F54"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 35 45)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 32 48)"
        fill="#9E3C27"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 37 48)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 37 45)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 32 44)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 35 44)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 36 44)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 48)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 47)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 32 46)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 46)"
        fill="#D28560"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 34 44)"
        fill="#D28560"
      />
      <rect
        width="6"
        height="1"
        transform="matrix(-1 0 0 1 37 49)"
        fill="#281716"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 38 45)"
        fill="#281716"
      />
      <rect
        width="1"
        height="5"
        transform="matrix(-1 0 0 1 31 44)"
        fill="#281716"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 44)"
        fill="#281716"
      />
      <rect
        width="10"
        height="1"
        transform="matrix(-1 0 0 1 33 36)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 42 28)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 15 27)"
        fill="#1C0E06"
      />
      <rect
        width="8"
        height="1"
        transform="matrix(-1 0 0 1 32 26)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 16 25)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 23 25)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 24 25)"
        fill="#1C0E06"
      />
      <rect
        width="6"
        height="1"
        transform="matrix(-1 0 0 1 31 25)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 25)"
        fill="#1C0E06"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 25H20V26H19V27H17V26H16V27V28H17V29H19V30H21V31H22V32H23V33H25V31H26V36H30V31H31V32V33H33V32H34V31H35V30H37V29H39V28H40V26H39V27H37V26H36V25H34V26H33V27H31V28H25V27H23V26H22V25ZM41 31H40V33H41V31Z"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 17 24)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 22 24)"
        fill="#1C0E06"
      />
      <rect
        width="5"
        height="1"
        transform="matrix(-1 0 0 1 27 24)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 29 24)"
        fill="#1C0E06"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 34 24)"
        fill="#1C0E06"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 20 23)"
        fill="#1C0E06"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 26 23)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 21 22)"
        fill="#1C0E06"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 23 22)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 28 22)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 22)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 20 21)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 34 21)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 21)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 19 20)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 21 20)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 22 20)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 35 20)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 20)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 18 19)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 19)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 17 17)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 21 17)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 36 17)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 40 17)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 16 16)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 18 16)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 16)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 16)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 41 16)"
        fill="#1C0E06"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 18 15)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 20 15)"
        fill="#1C0E06"
      />
      <rect
        width="5"
        height="1"
        transform="matrix(-1 0 0 1 41 15)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="5"
        transform="matrix(-1 0 0 1 38 10)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="6"
        transform="matrix(-1 0 0 1 19 9)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 20 8)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 37 8)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 21 7)"
        fill="#1C0E06"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 7H29V8H30V10H31V9V8H32V9H33V11H34V17H33V16H32V17H31V18H30V17V16V15H29V17H28V14H27V12H26V11H25V13H23V12H22V13H20V12H21V11V10H22V11H23V10H24V9H25V10H26V8H27V12H29V10V9H28V7ZM29 12H30V13V14H29V12ZM32 13H33V14H32V13ZM26 14H25V15H26V14ZM23 15H24V17H23V15Z"
        fill="#EDDF95"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 7)"
        fill="#1C0E06"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 23 6)"
        fill="#1C0E06"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 35 6)"
        fill="#1C0E06"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27 6H29V7H32H33V9H34V10H36V14H35V15H36V16H35H34V14V11H33V9H32V8H31V10H30V8H29V7H27V8H28V12H27V14H28V17H29V15H30V18H31V17H32V16H33V17H34V19H31V20H30V19H29V21H28V17H27V19H26V17H25V16H24V13H25V15H26V12H27V8H26V10H25V9H24V10H23V11H22V8H23V7H24V8H25H26V7H27V6ZM24 8H23V9H24V8ZM26 15H27V17H26V15ZM21 11H20V12H21V11ZM23 12H22V13H20V15H21V16H22V15H23V12ZM21 16H20V17H21V16ZM24 17H23V18H24V17ZM24 19H25V18H24V19ZM24 19H23V20H24V19ZM25 20H26V21H25V20Z"
        fill="#C0AB81"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 25 5)"
        fill="#1C0E06"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 33 5)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 27 4)"
        fill="#1C0E06"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 30 4)"
        fill="#1C0E06"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27 4H29V5H31V6H29V5H28V6H25V7H24V6H25V5H27V4ZM21 7H22V8H21V9H20V11H19V9H20V8H21V7ZM36 10H37V11H36V10ZM35 8V10H36V8H35ZM35 8H34V7H35V8ZM37 13H36V15H37V13ZM21 17H22V19H23V20H25V18H26V20H25V21H27V20H28V21H29V23H30V22H32V20H33V19H34V18H35V20H34V21H33V23H32V24H31V25H30H29V24H28V25H27V24H28V22H27H26V23H24V24H23V23V22H22V21V20H21V19V17ZM33 6H32V7H33V6Z"
        fill="#7D5D5D"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 24H20V25H21V24ZM15 27H16V29H15V27ZM41 28H40V29H41V28ZM19 29H17V30H19V29ZM20 31V30H19V31H20ZM21 32V31H20V32H21ZM21 32V35H22V34H24V33H22V32H21ZM41 31H42V32H41V31ZM36 31H35V32H36V31ZM37 30H36V31H37V30ZM37 30H39V29H37V30ZM35 32H34V33H32V34H34V35H35V32ZM18 31H17V32H18V31ZM35 24H36V25H35V24Z"
        fill="#958080"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 24H20V25H18V24ZM23 26H24V27H23V26ZM31 27H25V28H31V27ZM39 28H40V29H41V31H40V34H39V31H38V30H39V28ZM15 29H16V31H15V29ZM17 30H18V31H17V30ZM21 31H22V32H23V33H22V32H21V31ZM21 31H20V30H21V31ZM42 32H41V33H42V32ZM25 33H24V34H23H22V35H23V36H24H25H26V31H25V33ZM33 34H34V35H33V36H30V34V33V31H31V33H32V34H33ZM33 32H34V31H35V30H36V31H35V32H34V33H33V32ZM33 26H32V27H33V26Z"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 39 40)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 40 40)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 41 40)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 39)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 42 39)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 38)"
        fill="#EA9F54"
      />
      <rect
        width="3"
        height="2"
        transform="matrix(-1 0 0 1 41 38)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 42 38)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 37)"
        fill="#9E3C27"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 40 37)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 41 37)"
        fill="#FBE7A4"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 36)"
        fill="#EA9F54"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 41 36)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 42 36)"
        fill="#EA9F54"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 41 41)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 42 40)"
        fill="#281820"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 37 37)"
        fill="#281820"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 38 36)"
        fill="#281820"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 43 36)"
        fill="#281820"
      />
      <rect
        width="7"
        height="1"
        transform="matrix(-1 0 0 1 43 35)"
        fill="#281820"
      />
      <rect
        width="5"
        height="1"
        transform="matrix(-1 0 0 1 25 45)"
        fill="#2C2D16"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 21 44)"
        fill="#2C2D16"
      />
      <rect
        width="6"
        height="1"
        transform="matrix(-1 0 0 1 36 43)"
        fill="#2C2D16"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 26 42)"
        fill="#2C2D16"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 31 42)"
        fill="#2C2D16"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 30 41)"
        fill="#2C2D16"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 37 41)"
        fill="#2C2D16"
      />
      <rect
        width="1"
        height="5"
        transform="matrix(-1 0 0 1 20 38)"
        fill="#2C2D16"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 22 44)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 25 43)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 21 42)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 32 42)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 25 41)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 24 40)"
        fill="#315B49"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 27 40)"
        fill="#315B49"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 31 40)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 40)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 32 39)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 34 39)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 21 37)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 23 37)"
        fill="#315B49"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 35 37)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="5"
        transform="matrix(-1 0 0 1 36 37)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 35 36)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 21 43)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 42)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 26 41)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 31 41)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 25 40)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 32 40)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 24 39)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 39)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 36 35)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 20 43)"
        fill="#2C2D16"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 21 35)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 25 42)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 24 41)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 33 41)"
        fill="#557E85"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 29 40)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 34 40)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 23 39)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 25 39)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 26 39)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 31 39)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 35 39)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 21 38)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 22 38)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 22 37)"
        fill="#557E85"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 25 37)"
        fill="#557E85"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 33 37)"
        fill="#557E85"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 23 36)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 34 36)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 23 41)"
        fill="#79979D"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 22 40)"
        fill="#79979D"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 30 39)"
        fill="#79979D"
      />
      <rect
        width="6"
        height="2"
        transform="matrix(-1 0 0 1 31 37)"
        fill="#79979D"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 24H18V25H17V26H16V25H17V24ZM41 30H42V31H41V30ZM38 30H37V31H38V30ZM18 30H19V31H18V30ZM36 32H35V33H36V32ZM21 32H20V33H21V32Z"
        fill="#424242"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M31 25H32V26H31V25ZM24 25H25V26H24V25Z"
        fill="#EA9F54"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M34 24H35V25H34V26H33V25H34V24Z"
        fill="#281820"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 5H29V6H32V7H29V6H28V5ZM24 6H23V7H24V6ZM24 8V7H25V6H27V7H28V8H27V7H26V8H24ZM23 8V9H24V8H23ZM22 8H23V7H22V8ZM20 11H21V10H22V8H21V9H20V11ZM20 15V12V11H19V12V15H20ZM21 16V15H20V16H21ZM24 19H23H22V17H21V16H22V15H23V18H24V17V16H25V17H26V15H27V17H28V20H27V21H26V19H27V17H26V18H24V19ZM24 19V20H25V19H24ZM36 11H37V13H36V11ZM36 14H35V15H36V14ZM34 16V17V18H35V17H36V16H34ZM33 19H34V18H33V19ZM33 19H31V20H30V19H29V20V22V23H30V22H32V20H33V19ZM26 22H27V24H26V22ZM34 8H35V10H34V9H33V7H34V8Z"
        fill="#A87D52"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 43 31)"
        fill="#281820"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 14 30)"
        fill="#281820"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 42 28)"
        fill="#281820"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 41 26)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 40 25)"
        fill="#281820"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 39 24)"
        fill="#281820"
      />
      <rect
        width="5"
        height="1"
        transform="matrix(-1 0 0 1 37 23)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 16 37)"
        fill="#D28560"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 19 37)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 15 36)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 19 36)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 15 35)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 16 35)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 19 35)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 16 34)"
        fill="#FBE7A4"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 18 34)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 19 34)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 15 33)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 16 33)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="5"
        transform="matrix(-1 0 0 1 17 33)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 18 33)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 17 37)"
        fill="#FDD082"
      />
      <rect
        width="3"
        height="2"
        transform="matrix(-1 0 0 1 18 35)"
        fill="#FDD082"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 17 34)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 16 33)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 19 35)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 18 34)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 15 33)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 17 33)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 19 37)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 15 36)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 19 34)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 16 37)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 18 37)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 19 36)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 15 35)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 18 33)"
        fill="#D28560"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 19 38)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 15 37)"
        fill="#281820"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 20 34)"
        fill="#281820"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 14 33)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 19 33)"
        fill="#281820"
      />
      <rect
        width="6"
        height="1"
        transform="matrix(-1 0 0 1 19 32)"
        fill="#281820"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 23 35)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 34)"
        fill="#281820"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 21 33)"
        fill="#281820"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 36 33)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 33)"
        fill="#281820"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 20 31)"
        fill="#281820"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 38 31)"
        fill="#281820"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 35 35)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 40 34)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 41 33)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 42 33)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 16 31)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 39 31)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 15 30)"
        fill="#958080"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 17 30)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 17 28)"
        fill="#958080"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 39 25)"
        fill="#958080"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 24)"
        fill="#958080"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37 18H38V19H37V21H36V19H37V18ZM19 18H18V19H19V18ZM19 19V21H20V19H19Z"
        fill="#FDD082"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 15H19V17H18V15ZM38 16H37V17H38V16ZM35 21H36V22H35V21ZM20 21H21V22H20V21Z"
        fill="#9E3C27"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 17H18V18H19V17ZM19 19H20V18H19V19ZM19 19H18V20H19V19ZM37 19H38V20H37V19ZM37 18V17H38V18H37ZM37 18V19H36V18H37Z"
        fill="#EA9F54"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M36 17H37V18H36V17ZM19 17H20V18H19V17Z"
        fill="#D28560"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28 9H29V12H30V14H29V12H28V9ZM26 11H25V14H26V11ZM33 13H32V14H33V13ZM24 13H23V15H24V13Z"
        fill="#F6F6F3"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 16H16V17H17V19H18V17H17V16ZM39 16H40V17H39V16ZM39 17V19H38V17H39Z"
        fill="#EAA377"
      />
    </svg>
  );
}
