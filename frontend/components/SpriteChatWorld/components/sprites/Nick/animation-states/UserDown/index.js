import React, { useState } from "react";

import useInterval from "../../../../../utils/useInterval";

export const UserDownStand = () => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="17" y="52" width="6" height="1" fill="#281716" />
      <rect x="23" y="51" width="1" height="1" fill="#281716" />
      <rect x="16" y="49" width="1" height="3" fill="#281716" />
      <rect x="24" y="47" width="1" height="4" fill="#281716" />
      <rect x="17" y="47" width="1" height="2" fill="#281716" />
      <rect x="17" y="50" width="1" height="1" fill="#FDD082" />
      <rect x="22" y="49" width="1" height="2" fill="#FDD082" />
      <rect x="18" y="49" width="1" height="3" fill="#FDD082" />
      <rect x="19" y="48" width="3" height="3" fill="#FDD082" />
      <rect x="17" y="51" width="1" height="1" fill="#EA9F54" />
      <rect x="23" y="49" width="1" height="2" fill="#EA9F54" />
      <rect x="22" y="48" width="1" height="1" fill="#EA9F54" />
      <rect x="18" y="48" width="1" height="1" fill="#EA9F54" />
      <rect x="19" y="47" width="4" height="1" fill="#EA9F54" />
      <rect x="20" y="51" width="1" height="1" fill="#D28560" />
      <rect x="17" y="49" width="1" height="1" fill="#D28560" />
      <rect x="23" y="48" width="1" height="1" fill="#D28560" />
      <rect x="18" y="47" width="1" height="1" fill="#D28560" />
      <rect x="21" y="51" width="2" height="1" fill="#FBE7A4" />
      <rect x="19" y="51" width="1" height="1" fill="#FBE7A4" />
      <rect x="23" y="47" width="1" height="1" fill="#9E3C27" />
      <rect x="17" y="40" width="2" height="1" fill="#EA9F54" />
      <rect x="16" y="40" width="1" height="1" fill="#FDD082" />
      <rect x="15" y="40" width="1" height="1" fill="#D28560" />
      <rect x="18" y="39" width="1" height="1" fill="#9E3C27" />
      <rect x="14" y="39" width="1" height="1" fill="#9E3C27" />
      <rect x="18" y="38" width="1" height="1" fill="#FDD082" />
      <rect x="15" y="38" width="2" height="2" fill="#FDD082" />
      <rect x="14" y="38" width="1" height="1" fill="#D28560" />
      <rect x="18" y="37" width="1" height="1" fill="#FDD082" />
      <rect x="16" y="37" width="2" height="1" fill="#FDD082" />
      <rect x="15" y="37" width="1" height="1" fill="#FBE7A4" />
      <rect x="17" y="36" width="1" height="1" fill="#EA9F54" />
      <rect x="15" y="36" width="2" height="1" fill="#FDD082" />
      <rect x="14" y="36" width="1" height="2" fill="#EA9F54" />
      <rect x="15" y="41" width="4" height="1" fill="#281820" />
      <rect x="14" y="40" width="1" height="1" fill="#281820" />
      <rect x="19" y="37" width="1" height="1" fill="#281820" />
      <rect x="18" y="36" width="2" height="1" fill="#281820" />
      <rect x="13" y="36" width="1" height="4" fill="#281820" />
      <rect x="13" y="35" width="6" height="1" fill="#281820" />
      <rect x="17" y="38" width="1" height="2" fill="#9E3C27" />
      <rect x="33" y="46" width="4" height="1" fill="#2C2D16" />
      <rect x="19" y="46" width="4" height="1" fill="#2C2D16" />
      <rect x="32" y="45" width="1" height="2" fill="#2C2D16" />
      <rect x="23" y="45" width="1" height="1" fill="#2C2D16" />
      <rect x="31" y="43" width="1" height="2" fill="#2C2D16" />
      <rect x="24" y="43" width="1" height="2" fill="#2C2D16" />
      <rect x="37" y="42" width="1" height="4" fill="#2C2D16" />
      <rect x="30" y="42" width="1" height="1" fill="#2C2D16" />
      <rect x="25" y="42" width="1" height="1" fill="#2C2D16" />
      <rect x="18" y="42" width="1" height="5" fill="#2C2D16" />
      <rect x="26" y="41" width="4" height="1" fill="#2C2D16" />
      <rect x="37" y="46" width="1" height="1" fill="#2C2D16" />
      <rect x="23" y="46" width="1" height="1" fill="#2C2D16" />
      <rect x="35" y="45" width="1" height="1" fill="#315B49" />
      <rect x="20" y="45" width="1" height="1" fill="#315B49" />
      <rect x="32" y="43" width="1" height="1" fill="#315B49" />
      <rect x="23" y="43" width="1" height="1" fill="#315B49" />
      <rect x="36" y="41" width="1" height="4" fill="#315B49" />
      <rect x="19" y="41" width="1" height="4" fill="#315B49" />
      <rect x="32" y="40" width="1" height="1" fill="#315B49" />
      <rect x="30" y="40" width="1" height="1" fill="#315B49" />
      <rect x="25" y="40" width="1" height="1" fill="#315B49" />
      <rect x="32" y="39" width="2" height="1" fill="#315B49" />
      <rect x="23" y="39" width="1" height="2" fill="#315B49" />
      <rect x="33" y="38" width="1" height="1" fill="#315B49" />
      <rect x="22" y="38" width="1" height="2" fill="#315B49" />
      <rect x="29" y="37" width="4" height="1" fill="#281820" />
      <rect x="24" y="37" width="3" height="1" fill="#281820" />
      <rect x="21" y="45" width="1" height="1" fill="#557E85" />
      <rect x="35" y="44" width="1" height="1" fill="#557E85" />
      <rect x="34" y="44" width="1" height="2" fill="#557E85" />
      <rect x="20" y="44" width="2" height="1" fill="#557E85" />
      <rect x="33" y="43" width="1" height="3" fill="#557E85" />
      <rect x="32" y="42" width="2" height="1" fill="#557E85" />
      <rect x="22" y="42" width="1" height="4" fill="#557E85" />
      <rect x="31" y="41" width="2" height="1" fill="#557E85" />
      <rect x="24" y="41" width="1" height="1" fill="#557E85" />
      <rect x="23" y="41" width="1" height="2" fill="#557E85" />
      <rect x="33" y="40" width="1" height="1" fill="#557E85" />
      <rect x="22" y="40" width="1" height="1" fill="#557E85" />
      <rect x="26" y="39" width="4" height="2" fill="#557E85" />
      <rect x="34" y="38" width="2" height="2" fill="#557E85" />
      <rect x="32" y="38" width="1" height="1" fill="#557E85" />
      <rect x="30" y="38" width="2" height="2" fill="#557E85" />
      <rect x="24" y="38" width="2" height="2" fill="#557E85" />
      <rect x="23" y="38" width="1" height="1" fill="#557E85" />
      <rect x="20" y="38" width="2" height="2" fill="#557E85" />
      <rect x="34" y="37" width="1" height="1" fill="#557E85" />
      <rect x="33" y="37" width="1" height="1" fill="#557E85" />
      <rect x="21" y="37" width="2" height="1" fill="#557E85" />
      <rect x="33" y="41" width="1" height="1" fill="#79979D" />
      <rect x="22" y="41" width="1" height="1" fill="#79979D" />
      <rect x="34" y="40" width="2" height="4" fill="#79979D" />
      <rect x="20" y="40" width="2" height="4" fill="#79979D" />
      <rect x="26" y="38" width="4" height="1" fill="#79979D" />
      <rect x="36" y="45" width="1" height="1" fill="#2C2D16" />
      <rect x="19" y="45" width="1" height="1" fill="#2C2D16" />
      <rect x="32" y="44" width="1" height="1" fill="#2C2D16" />
      <rect x="23" y="44" width="1" height="1" fill="#2C2D16" />
      <rect x="31" y="42" width="1" height="1" fill="#2C2D16" />
      <rect x="24" y="42" width="1" height="1" fill="#2C2D16" />
      <rect x="30" y="41" width="1" height="1" fill="#2C2D16" />
      <rect x="25" y="41" width="1" height="1" fill="#2C2D16" />
      <rect x="31" y="40" width="1" height="1" fill="#2C2D16" />
      <rect x="24" y="40" width="1" height="1" fill="#2C2D16" />
      <rect x="19" y="38" width="1" height="3" fill="#2C2D16" />
      <rect x="23" y="37" width="1" height="1" fill="#2C2D16" />
      <rect x="35" y="36" width="1" height="2" fill="#2C2D16" />
      <rect x="20" y="36" width="1" height="2" fill="#2C2D16" />
      <rect x="13" y="30" width="1" height="5" fill="#281820" />
      <rect x="14" y="27" width="1" height="3" fill="#281820" />
      <rect x="15" y="25" width="1" height="2" fill="#281820" />
      <rect x="16" y="24" width="1" height="1" fill="#281820" />
      <rect x="17" y="23" width="3" height="1" fill="#281820" />
      <rect x="22" y="34" width="2" height="1" fill="#958080" />
      <rect x="21" y="33" width="1" height="2" fill="#958080" />
      <rect x="20" y="32" width="1" height="1" fill="#958080" />
      <rect x="19" y="30" width="1" height="1" fill="#958080" />
      <rect x="17" y="30" width="1" height="1" fill="#958080" />
      <rect x="18" y="29" width="1" height="1" fill="#958080" />
      <rect x="15" y="27" width="1" height="3" fill="#958080" />
      <rect x="24" y="35" width="1" height="2" fill="#E5E6C7" />
      <rect x="23" y="33" width="1" height="1" fill="#E5E6C7" />
      <rect x="15" y="32" width="1" height="2" fill="#E5E6C7" />
      <rect x="26" y="29" width="1" height="1" fill="#E5E6C7" />
      <rect x="24" y="29" width="2" height="4" fill="#E5E6C7" />
      <rect x="23" y="29" width="1" height="3" fill="#E5E6C7" />
      <rect x="23" y="28" width="1" height="1" fill="#E5E6C7" />
      <rect x="17" y="28" width="2" height="1" fill="#E5E6C7" />
      <rect x="22" y="27" width="1" height="6" fill="#E5E6C7" />
      <rect x="19" y="27" width="2" height="2" fill="#E5E6C7" />
      <rect x="16" y="27" width="1" height="2" fill="#E5E6C7" />
      <rect x="21" y="26" width="1" height="5" fill="#E5E6C7" />
      <rect x="20" y="25" width="1" height="2" fill="#E5E6C7" />
      <rect x="20" y="33" width="1" height="1" fill="#424242" />
      <rect x="19" y="31" width="1" height="1" fill="#424242" />
      <rect x="18" y="31" width="1" height="1" fill="#424242" />
      <rect x="18" y="30" width="1" height="1" fill="#424242" />
      <rect x="14" y="30" width="1" height="1" fill="#424242" />
      <rect x="16" y="25" width="1" height="1" fill="#424242" />
      <rect x="17" y="24" width="1" height="1" fill="#424242" />
      <rect x="14" y="31" width="4" height="1" fill="#C4B59F" />
      <rect x="21" y="35" width="3" height="1" fill="#C4B59F" />
      <rect x="24" y="34" width="1" height="1" fill="#C4B59F" />
      <rect x="22" y="33" width="1" height="1" fill="#C4B59F" />
      <rect x="16" y="32" width="1" height="3" fill="#C4B59F" />
      <rect x="21" y="31" width="1" height="2" fill="#C4B59F" />
      <rect x="20" y="30" width="1" height="2" fill="#C4B59F" />
      <rect x="15" y="30" width="2" height="1" fill="#C4B59F" />
      <rect x="19" y="29" width="2" height="1" fill="#C4B59F" />
      <rect x="16" y="29" width="2" height="1" fill="#C4B59F" />
      <rect x="24" y="28" width="2" height="1" fill="#C4B59F" />
      <rect x="23" y="27" width="1" height="1" fill="#C4B59F" />
      <rect x="16" y="26" width="1" height="1" fill="#C4B59F" />
      <rect x="18" y="24" width="2" height="1" fill="#C4B59F" />
      <rect x="21" y="36" width="3" height="1" fill="#281820" />
      <rect x="20" y="34" width="1" height="2" fill="#281820" />
      <rect x="19" y="33" width="1" height="1" fill="#281820" />
      <rect x="18" y="32" width="2" height="1" fill="#281820" />
      <rect x="17" y="32" width="1" height="3" fill="#281820" />
      <rect x="27" y="37" width="2" height="1" fill="#434343" />
      <rect x="29" y="36" width="1" height="1" fill="#434343" />
      <rect x="26" y="36" width="1" height="1" fill="#434343" />
      <rect x="30" y="33" width="1" height="3" fill="#434343" />
      <rect x="25" y="33" width="1" height="3" fill="#434343" />
      <rect x="29" y="30" width="1" height="3" fill="#434343" />
      <rect x="26" y="30" width="1" height="3" fill="#434343" />
      <rect x="27" y="29" width="2" height="1" fill="#434343" />
      <rect x="28" y="28" width="1" height="1" fill="#434343" />
      <rect x="27" y="36" width="1" height="1" fill="#6B6B6B" />
      <rect x="26" y="33" width="1" height="3" fill="#6B6B6B" />
      <rect x="27" y="28" width="1" height="1" fill="#6B6B6B" />
      <rect x="29" y="33" width="1" height="3" fill="#5B5B5B" />
      <rect x="27" y="32" width="1" height="4" fill="#5B5B5B" />
      <rect x="28" y="30" width="1" height="7" fill="#5B5B5B" />
      <rect x="27" y="30" width="1" height="2" fill="#2A2A2A" />
      <rect x="29" y="28" width="1" height="1" fill="#2A2A2A" />
      <rect x="26" y="28" width="1" height="1" fill="#2A2A2A" />
      <rect x="27" y="27" width="2" height="1" fill="#2A2A2A" />
      <rect x="29" y="27" width="3" height="1" fill="#281820" />
      <rect x="24" y="27" width="3" height="1" fill="#281820" />
      <rect x="32" y="26" width="2" height="1" fill="#281820" />
      <rect x="22" y="26" width="2" height="1" fill="#281820" />
      <rect x="34" y="25" width="1" height="1" fill="#281820" />
      <rect x="21" y="25" width="1" height="1" fill="#281820" />
      <rect x="20" y="24" width="1" height="1" fill="#281820" />
      <rect x="36" y="22" width="1" height="1" fill="#281820" />
      <rect x="35" y="22" width="1" height="3" fill="#281820" />
      <rect x="20" y="22" width="1" height="2" fill="#281820" />
      <rect x="19" y="22" width="1" height="1" fill="#281820" />
      <rect x="37" y="21" width="1" height="1" fill="#281820" />
      <rect x="32" y="21" width="1" height="1" fill="#281820" />
      <rect x="18" y="21" width="1" height="1" fill="#281820" />
      <rect x="34" y="20" width="1" height="1" fill="#281820" />
      <rect x="31" y="20" width="2" height="1" fill="#281820" />
      <rect x="24" y="20" width="1" height="1" fill="#281820" />
      <rect x="23" y="20" width="1" height="2" fill="#281820" />
      <rect x="20" y="20" width="1" height="1" fill="#281820" />
      <rect x="38" y="19" width="1" height="2" fill="#281820" />
      <rect x="34" y="19" width="3" height="1" fill="#281820" />
      <rect x="21" y="19" width="1" height="1" fill="#281820" />
      <rect x="17" y="19" width="1" height="2" fill="#281820" />
      <rect x="35" y="18" width="2" height="1" fill="#281820" />
      <rect x="33" y="18" width="1" height="2" fill="#281820" />
      <rect x="39" y="17" width="1" height="2" fill="#281820" />
      <rect x="36" y="17" width="1" height="1" fill="#281820" />
      <rect x="25" y="17" width="1" height="1" fill="#281820" />
      <rect x="22" y="17" width="1" height="1" fill="#281820" />
      <rect x="16" y="17" width="1" height="2" fill="#281820" />
      <rect x="32" y="16" width="1" height="2" fill="#281820" />
      <rect x="29" y="16" width="1" height="2" fill="#281820" />
      <rect x="19" y="16" width="1" height="3" fill="#281820" />
      <rect x="17" y="16" width="1" height="1" fill="#281820" />
      <rect x="40" y="15" width="1" height="2" fill="#281820" />
      <rect x="39" y="15" width="1" height="1" fill="#281820" />
      <rect x="37" y="15" width="2" height="2" fill="#281820" />
      <rect x="31" y="15" width="1" height="1" fill="#281820" />
      <rect x="24" y="15" width="1" height="1" fill="#281820" />
      <rect x="16" y="15" width="1" height="1" fill="#281820" />
      <rect x="15" y="15" width="1" height="2" fill="#281820" />
      <rect x="30" y="14" width="1" height="2" fill="#281820" />
      <rect x="26" y="14" width="1" height="2" fill="#281820" />
      <rect x="27" y="13" width="1" height="1" fill="#281820" />
      <rect x="28" y="12" width="1" height="4" fill="#281820" />
      <rect x="38" y="11" width="1" height="4" fill="#281820" />
      <rect x="18" y="10" width="1" height="7" fill="#281820" />
      <rect x="37" y="9" width="1" height="2" fill="#281820" />
      <rect x="36" y="8" width="1" height="1" fill="#281820" />
      <rect x="19" y="8" width="1" height="3" fill="#281820" />
      <rect x="35" y="7" width="1" height="1" fill="#281820" />
      <rect x="20" y="7" width="1" height="1" fill="#281820" />
      <rect x="33" y="6" width="2" height="1" fill="#281820" />
      <rect x="21" y="6" width="2" height="1" fill="#281820" />
      <rect x="30" y="5" width="3" height="1" fill="#281820" />
      <rect x="23" y="5" width="3" height="1" fill="#281820" />
      <rect x="26" y="4" width="4" height="1" fill="#281820" />
      <rect x="25" y="25" width="6" height="1" fill="#FDD082" />
      <rect x="27" y="24" width="6" height="1" fill="#FDD082" />
      <rect x="30" y="23" width="4" height="1" fill="#FDD082" />
      <rect x="23" y="23" width="4" height="2" fill="#FDD082" />
      <rect x="33" y="22" width="1" height="1" fill="#FDD082" />
      <rect x="22" y="22" width="1" height="2" fill="#FDD082" />
      <rect x="29" y="21" width="1" height="3" fill="#FDD082" />
      <rect x="26" y="21" width="1" height="2" fill="#FDD082" />
      <rect x="36" y="20" width="1" height="2" fill="#FDD082" />
      <rect x="19" y="20" width="1" height="2" fill="#FDD082" />
      <rect x="37" y="18" width="1" height="3" fill="#FDD082" />
      <rect x="29" y="18" width="1" height="2" fill="#FDD082" />
      <rect x="25" y="18" width="1" height="1" fill="#FDD082" />
      <rect x="22" y="18" width="1" height="1" fill="#FDD082" />
      <rect x="18" y="18" width="1" height="3" fill="#FDD082" />
      <rect x="38" y="17" width="1" height="2" fill="#FDD082" />
      <rect x="17" y="17" width="1" height="2" fill="#FDD082" />
      <rect x="39" y="16" width="1" height="1" fill="#FDD082" />
      <rect x="31" y="16" width="1" height="2" fill="#FDD082" />
      <rect x="30" y="16" width="1" height="3" fill="#FDD082" />
      <rect x="28" y="16" width="1" height="7" fill="#FDD082" />
      <rect x="26" y="16" width="1" height="4" fill="#FDD082" />
      <rect x="23" y="16" width="2" height="2" fill="#FDD082" />
      <rect x="16" y="16" width="1" height="1" fill="#FDD082" />
      <rect x="27" y="14" width="1" height="8" fill="#FDD082" />
      <rect x="24" y="26" width="8" height="1" fill="#9E3C27" />
      <rect x="32" y="25" width="2" height="1" fill="#9E3C27" />
      <rect x="23" y="25" width="1" height="1" fill="#9E3C27" />
      <rect x="22" y="25" width="1" height="1" fill="#9E3C27" />
      <rect x="34" y="24" width="1" height="1" fill="#9E3C27" />
      <rect x="21" y="24" width="1" height="1" fill="#9E3C27" />
      <rect x="31" y="19" width="2" height="1" fill="#9E3C27" />
      <rect x="23" y="19" width="2" height="1" fill="#9E3C27" />
      <rect x="37" y="17" width="1" height="1" fill="#9E3C27" />
      <rect x="18" y="17" width="1" height="1" fill="#9E3C27" />
      <rect x="31" y="25" width="1" height="1" fill="#EA9F54" />
      <rect x="24" y="25" width="1" height="1" fill="#EA9F54" />
      <rect x="33" y="24" width="1" height="1" fill="#EA9F54" />
      <rect x="22" y="24" width="1" height="1" fill="#EA9F54" />
      <rect x="28" y="23" width="1" height="1" fill="#EA9F54" />
      <rect x="34" y="21" width="1" height="2" fill="#EA9F54" />
      <rect x="29" y="20" width="1" height="1" fill="#EA9F54" />
      <rect x="26" y="20" width="1" height="1" fill="#EA9F54" />
      <rect x="21" y="20" width="1" height="3" fill="#EA9F54" />
      <rect x="30" y="19" width="1" height="1" fill="#EA9F54" />
      <rect x="25" y="19" width="1" height="1" fill="#EA9F54" />
      <rect x="34" y="23" width="1" height="1" fill="#D28560" />
      <rect x="21" y="23" width="1" height="1" fill="#D28560" />
      <rect x="20" y="21" width="1" height="1" fill="#D28560" />
      <rect x="35" y="20" width="1" height="2" fill="#D28560" />
      <rect x="22" y="19" width="1" height="1" fill="#D28560" />
      <rect x="19" y="19" width="1" height="1" fill="#D28560" />
      <rect x="31" y="22" width="2" height="1" fill="#A45227" />
      <rect x="23" y="22" width="2" height="1" fill="#A45227" />
      <rect x="31" y="21" width="1" height="1" fill="#BE734B" />
      <rect x="24" y="21" width="1" height="1" fill="#BE734B" />
      <rect x="33" y="20" width="1" height="1" fill="#BE734B" />
      <rect x="30" y="20" width="1" height="1" fill="#BE734B" />
      <rect x="25" y="20" width="1" height="1" fill="#BE734B" />
      <rect x="22" y="20" width="1" height="1" fill="#BE734B" />
      <rect x="33" y="21" width="1" height="1" fill="#F6F0D1" />
      <rect x="30" y="21" width="1" height="2" fill="#F6F0D1" />
      <rect x="25" y="21" width="1" height="2" fill="#F6F0D1" />
      <rect x="22" y="21" width="1" height="1" fill="#F6F0D1" />
      <rect x="20" y="17" width="1" height="3" fill="#7D5D5D" />
      <rect x="27" y="22" width="1" height="2" fill="#FBE7A4" />
      <rect x="31" y="18" width="2" height="1" fill="#FBE7A4" />
      <rect x="23" y="18" width="2" height="1" fill="#FBE7A4" />
      <rect x="21" y="15" width="1" height="1" fill="#EDDF95" />
      <rect x="32" y="14" width="1" height="1" fill="#EDDF95" />
      <rect x="29" y="12" width="1" height="1" fill="#EDDF95" />
      <rect x="34" y="11" width="1" height="3" fill="#EDDF95" />
      <rect x="32" y="11" width="1" height="1" fill="#EDDF95" />
      <rect x="31" y="10" width="1" height="3" fill="#EDDF95" />
      <rect x="21" y="10" width="1" height="2" fill="#EDDF95" />
      <rect x="33" y="9" width="1" height="2" fill="#EDDF95" />
      <rect x="29" y="9" width="3" height="1" fill="#EDDF95" />
      <rect x="26" y="9" width="1" height="3" fill="#EDDF95" />
      <rect x="22" y="9" width="1" height="5" fill="#EDDF95" />
      <rect x="25" y="8" width="1" height="6" fill="#EDDF95" />
      <rect x="23" y="8" width="1" height="2" fill="#EDDF95" />
      <rect x="28" y="7" width="3" height="2" fill="#EDDF95" />
      <rect x="27" y="7" width="1" height="3" fill="#EDDF95" />
      <rect x="24" y="7" width="1" height="5" fill="#EDDF95" />
      <rect x="34" y="18" width="1" height="1" fill="#7D5D5D" />
      <rect x="21" y="18" width="1" height="1" fill="#7D5D5D" />
      <rect x="35" y="17" width="1" height="1" fill="#7D5D5D" />
      <rect x="33" y="17" width="1" height="1" fill="#7D5D5D" />
      <rect x="36" y="16" width="1" height="1" fill="#7D5D5D" />
      <rect x="25" y="16" width="1" height="1" fill="#7D5D5D" />
      <rect x="22" y="16" width="1" height="1" fill="#7D5D5D" />
      <rect x="23" y="15" width="1" height="1" fill="#7D5D5D" />
      <rect x="24" y="14" width="1" height="1" fill="#7D5D5D" />
      <rect x="19" y="14" width="1" height="2" fill="#7D5D5D" />
      <rect x="37" y="13" width="1" height="2" fill="#7D5D5D" />
      <rect x="37" y="11" width="1" height="1" fill="#7D5D5D" />
      <rect x="19" y="11" width="1" height="1" fill="#7D5D5D" />
      <rect x="36" y="9" width="1" height="1" fill="#7D5D5D" />
      <rect x="20" y="8" width="1" height="2" fill="#7D5D5D" />
      <rect x="32" y="6" width="1" height="1" fill="#7D5D5D" />
      <rect x="29" y="5" width="1" height="1" fill="#7D5D5D" />
      <rect x="34" y="17" width="1" height="1" fill="#A87D52" />
      <rect x="21" y="17" width="1" height="1" fill="#A87D52" />
      <rect x="35" y="16" width="1" height="1" fill="#A87D52" />
      <rect x="20" y="16" width="1" height="1" fill="#A87D52" />
      <rect x="29" y="15" width="1" height="1" fill="#A87D52" />
      <rect x="25" y="15" width="1" height="1" fill="#A87D52" />
      <rect x="22" y="15" width="1" height="1" fill="#A87D52" />
      <rect x="31" y="14" width="1" height="1" fill="#A87D52" />
      <rect x="23" y="14" width="1" height="1" fill="#A87D52" />
      <rect x="33" y="13" width="1" height="4" fill="#A87D52" />
      <rect x="26" y="13" width="1" height="1" fill="#A87D52" />
      <rect x="24" y="13" width="1" height="1" fill="#A87D52" />
      <rect x="20" y="13" width="1" height="1" fill="#A87D52" />
      <rect x="37" y="12" width="1" height="1" fill="#A87D52" />
      <rect x="30" y="12" width="1" height="2" fill="#A87D52" />
      <rect x="27" y="12" width="1" height="1" fill="#A87D52" />
      <rect x="19" y="12" width="1" height="2" fill="#A87D52" />
      <rect x="28" y="11" width="1" height="1" fill="#A87D52" />
      <rect x="36" y="10" width="1" height="6" fill="#A87D52" />
      <rect x="20" y="10" width="1" height="2" fill="#A87D52" />
      <rect x="35" y="9" width="1" height="1" fill="#A87D52" />
      <rect x="34" y="8" width="2" height="1" fill="#A87D52" />
      <rect x="32" y="7" width="3" height="1" fill="#A87D52" />
      <rect x="21" y="7" width="1" height="2" fill="#A87D52" />
      <rect x="31" y="6" width="1" height="1" fill="#A87D52" />
      <rect x="23" y="6" width="2" height="1" fill="#A87D52" />
      <rect x="26" y="5" width="3" height="1" fill="#A87D52" />
      <rect x="21" y="16" width="1" height="1" fill="#C0AB81" />
      <rect x="32" y="15" width="1" height="1" fill="#C0AB81" />
      <rect x="34" y="14" width="1" height="3" fill="#C0AB81" />
      <rect x="25" y="14" width="1" height="1" fill="#C0AB81" />
      <rect x="22" y="14" width="1" height="1" fill="#C0AB81" />
      <rect x="20" y="14" width="1" height="2" fill="#C0AB81" />
      <rect x="31" y="13" width="1" height="1" fill="#C0AB81" />
      <rect x="29" y="13" width="1" height="2" fill="#C0AB81" />
      <rect x="23" y="13" width="1" height="1" fill="#C0AB81" />
      <rect x="21" y="13" width="1" height="2" fill="#C0AB81" />
      <rect x="26" y="12" width="1" height="1" fill="#C0AB81" />
      <rect x="24" y="12" width="1" height="1" fill="#C0AB81" />
      <rect x="20" y="12" width="2" height="1" fill="#C0AB81" />
      <rect x="33" y="11" width="1" height="2" fill="#C0AB81" />
      <rect x="35" y="10" width="1" height="6" fill="#C0AB81" />
      <rect x="30" y="10" width="1" height="2" fill="#C0AB81" />
      <rect x="27" y="10" width="1" height="2" fill="#C0AB81" />
      <rect x="34" y="9" width="1" height="2" fill="#C0AB81" />
      <rect x="28" y="9" width="1" height="2" fill="#C0AB81" />
      <rect x="21" y="9" width="1" height="1" fill="#C0AB81" />
      <rect x="33" y="8" width="1" height="1" fill="#C0AB81" />
      <rect x="32" y="8" width="1" height="3" fill="#C0AB81" />
      <rect x="26" y="8" width="1" height="1" fill="#C0AB81" />
      <rect x="31" y="7" width="1" height="2" fill="#C0AB81" />
      <rect x="23" y="7" width="1" height="1" fill="#C0AB81" />
      <rect x="22" y="7" width="1" height="2" fill="#C0AB81" />
      <rect x="27" y="6" width="4" height="1" fill="#C0AB81" />
      <rect x="25" y="6" width="2" height="2" fill="#C0AB81" />
      <rect x="32" y="12" width="1" height="2" fill="#F6F6F3" />
      <rect x="29" y="10" width="1" height="2" fill="#F6F6F3" />
      <rect x="23" y="10" width="1" height="3" fill="#F6F6F3" />
      <rect
        width="6"
        height="1"
        transform="matrix(-1 0 0 1 39 52)"
        fill="#281716"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 51)"
        fill="#281716"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 40 49)"
        fill="#281716"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 39 47)"
        fill="#281716"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 32 47)"
        fill="#281716"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 50)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 38 49)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 34 49)"
        fill="#FDD082"
      />
      <rect
        width="3"
        height="3"
        transform="matrix(-1 0 0 1 37 48)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 51)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 33 49)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 48)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 34 48)"
        fill="#EA9F54"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 37 47)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 51)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 49)"
        fill="#D28560"
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
        transform="matrix(-1 0 0 1 38 47)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 51)"
        fill="#FBE7A4"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 35 51)"
        fill="#FBE7A4"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 47)"
        fill="#9E3C27"
      />
      <rect x="36" y="38" width="1" height="3" fill="#281820" />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 41 40)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 40 40)"
        fill="#FDD082"
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
        transform="matrix(-1 0 0 1 38 39)"
        fill="#9E3C27"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 41 38)"
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
        transform="matrix(-1 0 0 1 42 38)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 39 38)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 38)"
        fill="#FDD082"
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
        transform="matrix(-1 0 0 1 38 37)"
        fill="#FDD082"
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
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 36)"
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
        height="1"
        transform="matrix(-1 0 0 1 37 37)"
        fill="#281820"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 43 36)"
        fill="#281820"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 38 36)"
        fill="#281820"
      />
      <rect
        width="6"
        height="1"
        transform="matrix(-1 0 0 1 43 35)"
        fill="#281820"
      />
      <rect
        width="1"
        height="5"
        transform="matrix(-1 0 0 1 43 30)"
        fill="#281820"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 42 27)"
        fill="#281820"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 41 25)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 40 24)"
        fill="#281820"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 39 23)"
        fill="#281820"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 35 33)"
        fill="#958080"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 34 34)"
        fill="#958080"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 32)"
        fill="#958080"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 30)"
        fill="#958080"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 30)"
        fill="#958080"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 29)"
        fill="#958080"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 41 27)"
        fill="#958080"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 32 35)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 33)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 41 32)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 33 29)"
        fill="#E5E6C7"
      />
      <rect
        width="2"
        height="4"
        transform="matrix(-1 0 0 1 32 29)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 30 29)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 40 27)"
        fill="#E5E6C7"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 39 28)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 28)"
        fill="#E5E6C7"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 37 27)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="6"
        transform="matrix(-1 0 0 1 34 27)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="5"
        transform="matrix(-1 0 0 1 35 26)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 36 25)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 33)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 31)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 31)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 42 30)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 30)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 40 25)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 24)"
        fill="#424242"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 42 31)"
        fill="#C4B59F"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 35 35)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 32 34)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 34 33)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 40 32)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 35 31)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 41 30)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 36 30)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 40 29)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 37 29)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 32 28)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 27)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 40 26)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 38 24)"
        fill="#C4B59F"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 35 36)"
        fill="#281820"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 36 34)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 33)"
        fill="#281820"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 39 32)"
        fill="#281820"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 38 32)"
        fill="#281820"
      />
    </svg>
  );
};

export const UserDown = () => {
  const [state, setState] = useState(0);

  useInterval(() => {
    setState((state + 1) % 2);
  }, 300);

  switch (state) {
    case 0:
      return <UserDown1 />;
    case 1:
    default:
      return <UserDown2 />;
  }
};

function UserDown1() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="32" y="53" width="4" height="1" fill="#281716" />
      <rect x="36" y="52" width="1" height="2" fill="#281716" />
      <rect x="31" y="52" width="1" height="1" fill="#281716" />
      <rect x="37" y="51" width="1" height="2" fill="#281716" />
      <rect x="38" y="49" width="1" height="3" fill="#281716" />
      <rect x="30" y="48" width="1" height="4" fill="#281716" />
      <rect x="37" y="47" width="1" height="2" fill="#281716" />
      <rect x="31" y="47" width="1" height="1" fill="#281716" />
      <rect x="32" y="52" width="4" height="1" fill="#9E3C27" />
      <rect x="31" y="51" width="1" height="1" fill="#9E3C27" />
      <rect x="37" y="49" width="1" height="1" fill="#9E3C27" />
      <rect x="31" y="48" width="1" height="1" fill="#9E3C27" />
      <rect x="35" y="47" width="2" height="1" fill="#9E3C27" />
      <rect x="36" y="49" width="1" height="1" fill="#EA9F54" />
      <rect x="32" y="48" width="4" height="1" fill="#EA9F54" />
      <rect x="33" y="47" width="2" height="1" fill="#EA9F54" />
      <rect x="36" y="50" width="1" height="1" fill="#FDD082" />
      <rect x="32" y="49" width="4" height="1" fill="#FDD082" />
      <rect x="35" y="50" width="1" height="1" fill="#FBE7A4" />
      <rect x="32" y="50" width="2" height="1" fill="#FBE7A4" />
      <rect x="32" y="51" width="5" height="1" fill="#D28560" />
      <rect x="37" y="50" width="1" height="1" fill="#D28560" />
      <rect x="34" y="50" width="1" height="1" fill="#D28560" />
      <rect x="31" y="49" width="1" height="2" fill="#D28560" />
      <rect x="36" y="48" width="1" height="1" fill="#D28560" />
      <rect x="32" y="47" width="1" height="1" fill="#D28560" />
      <rect x="19" y="51" width="6" height="1" fill="#281716" />
      <rect x="25" y="50" width="1" height="1" fill="#281716" />
      <rect x="18" y="48" width="1" height="3" fill="#281716" />
      <rect x="26" y="46" width="1" height="4" fill="#281716" />
      <rect x="19" y="46" width="1" height="2" fill="#281716" />
      <rect x="19" y="49" width="1" height="1" fill="#FDD082" />
      <rect x="24" y="48" width="1" height="2" fill="#FDD082" />
      <rect x="20" y="48" width="1" height="3" fill="#FDD082" />
      <rect x="21" y="47" width="3" height="3" fill="#FDD082" />
      <rect x="19" y="50" width="1" height="1" fill="#EA9F54" />
      <rect x="25" y="48" width="1" height="2" fill="#EA9F54" />
      <rect x="24" y="47" width="1" height="1" fill="#EA9F54" />
      <rect x="20" y="47" width="1" height="1" fill="#EA9F54" />
      <rect x="21" y="46" width="4" height="1" fill="#EA9F54" />
      <rect x="22" y="50" width="1" height="1" fill="#D28560" />
      <rect x="19" y="48" width="1" height="1" fill="#D28560" />
      <rect x="25" y="47" width="1" height="1" fill="#D28560" />
      <rect x="20" y="46" width="1" height="1" fill="#D28560" />
      <rect x="23" y="50" width="2" height="1" fill="#FBE7A4" />
      <rect x="21" y="50" width="1" height="1" fill="#FBE7A4" />
      <rect x="25" y="46" width="1" height="1" fill="#9E3C27" />
      <rect x="13" y="31" width="1" height="5" fill="#281820" />
      <rect x="14" y="28" width="1" height="3" fill="#281820" />
      <rect x="15" y="26" width="1" height="2" fill="#281820" />
      <rect x="16" y="25" width="1" height="1" fill="#281820" />
      <rect x="17" y="24" width="3" height="1" fill="#281820" />
      <rect x="22" y="35" width="2" height="1" fill="#958080" />
      <rect x="21" y="34" width="1" height="2" fill="#958080" />
      <rect x="20" y="33" width="1" height="1" fill="#958080" />
      <rect x="19" y="31" width="1" height="1" fill="#958080" />
      <rect x="17" y="31" width="1" height="1" fill="#958080" />
      <rect x="18" y="30" width="1" height="1" fill="#958080" />
      <rect x="15" y="28" width="1" height="3" fill="#958080" />
      <rect x="24" y="36" width="1" height="2" fill="#E5E6C7" />
      <rect x="23" y="34" width="1" height="1" fill="#E5E6C7" />
      <rect x="15" y="33" width="1" height="2" fill="#E5E6C7" />
      <rect x="26" y="30" width="1" height="1" fill="#E5E6C7" />
      <rect x="24" y="30" width="2" height="4" fill="#E5E6C7" />
      <rect x="23" y="30" width="1" height="3" fill="#E5E6C7" />
      <rect x="23" y="29" width="1" height="1" fill="#E5E6C7" />
      <rect x="17" y="29" width="2" height="1" fill="#E5E6C7" />
      <rect x="22" y="28" width="1" height="6" fill="#E5E6C7" />
      <rect x="19" y="28" width="2" height="2" fill="#E5E6C7" />
      <rect x="16" y="28" width="1" height="2" fill="#E5E6C7" />
      <rect x="21" y="27" width="1" height="5" fill="#E5E6C7" />
      <rect x="20" y="26" width="1" height="2" fill="#E5E6C7" />
      <rect x="20" y="34" width="1" height="1" fill="#424242" />
      <rect x="19" y="32" width="1" height="1" fill="#424242" />
      <rect x="18" y="32" width="1" height="1" fill="#424242" />
      <rect x="18" y="31" width="1" height="1" fill="#424242" />
      <rect x="14" y="31" width="1" height="1" fill="#424242" />
      <rect x="16" y="26" width="1" height="1" fill="#424242" />
      <rect x="17" y="25" width="1" height="1" fill="#424242" />
      <rect x="14" y="32" width="4" height="1" fill="#C4B59F" />
      <rect x="21" y="36" width="3" height="1" fill="#C4B59F" />
      <rect x="24" y="35" width="1" height="1" fill="#C4B59F" />
      <rect x="22" y="34" width="1" height="1" fill="#C4B59F" />
      <rect x="16" y="33" width="1" height="3" fill="#C4B59F" />
      <rect x="21" y="32" width="1" height="2" fill="#C4B59F" />
      <rect x="20" y="31" width="1" height="2" fill="#C4B59F" />
      <rect x="15" y="31" width="2" height="1" fill="#C4B59F" />
      <rect x="19" y="30" width="2" height="1" fill="#C4B59F" />
      <rect x="16" y="30" width="2" height="1" fill="#C4B59F" />
      <rect x="24" y="29" width="2" height="1" fill="#C4B59F" />
      <rect x="23" y="28" width="1" height="1" fill="#C4B59F" />
      <rect x="16" y="27" width="1" height="1" fill="#C4B59F" />
      <rect x="18" y="25" width="2" height="1" fill="#C4B59F" />
      <rect x="21" y="37" width="3" height="1" fill="#281820" />
      <rect x="20" y="35" width="1" height="2" fill="#281820" />
      <rect x="19" y="34" width="1" height="1" fill="#281820" />
      <rect x="18" y="33" width="2" height="1" fill="#281820" />
      <rect x="17" y="33" width="1" height="3" fill="#281820" />
      <rect x="32" y="46" width="5" height="1" fill="#2C2D16" />
      <rect x="36" y="45" width="1" height="1" fill="#2C2D16" />
      <rect x="31" y="45" width="1" height="2" fill="#2C2D16" />
      <rect x="21" y="45" width="6" height="1" fill="#2C2D16" />
      <rect x="20" y="43" width="1" height="3" fill="#2C2D16" />
      <rect x="30" y="42" width="1" height="3" fill="#2C2D16" />
      <rect x="26" y="42" width="1" height="3" fill="#2C2D16" />
      <rect x="27" y="41" width="3" height="1" fill="#2C2D16" />
      <rect x="37" y="40" width="1" height="5" fill="#2C2D16" />
      <rect x="32" y="37" width="1" height="1" fill="#2C2D16" />
      <rect x="29" y="37" width="3" height="1" fill="#281820" />
      <rect x="25" y="37" width="2" height="1" fill="#281820" />
      <rect x="36" y="44" width="1" height="1" fill="#2E403A" />
      <rect x="31" y="44" width="1" height="1" fill="#2E403A" />
      <rect x="25" y="44" width="1" height="1" fill="#2E403A" />
      <rect x="20" y="42" width="1" height="1" fill="#2E403A" />
      <rect x="30" y="41" width="1" height="1" fill="#2E403A" />
      <rect x="25" y="41" width="2" height="1" fill="#2E403A" />
      <rect x="36" y="40" width="1" height="2" fill="#2E403A" />
      <rect x="31" y="40" width="1" height="1" fill="#2E403A" />
      <rect x="24" y="40" width="1" height="1" fill="#2E403A" />
      <rect x="20" y="37" width="1" height="2" fill="#2E403A" />
      <rect x="35" y="45" width="1" height="1" fill="#315B49" />
      <rect x="32" y="45" width="1" height="1" fill="#315B49" />
      <rect x="22" y="44" width="3" height="1" fill="#315B49" />
      <rect x="31" y="43" width="1" height="1" fill="#315B49" />
      <rect x="24" y="43" width="2" height="1" fill="#315B49" />
      <rect x="21" y="43" width="1" height="2" fill="#315B49" />
      <rect x="36" y="42" width="1" height="2" fill="#315B49" />
      <rect x="25" y="42" width="1" height="1" fill="#315B49" />
      <rect x="31" y="41" width="1" height="1" fill="#315B49" />
      <rect x="24" y="41" width="1" height="1" fill="#315B49" />
      <rect x="30" y="40" width="1" height="1" fill="#315B49" />
      <rect x="25" y="40" width="1" height="1" fill="#315B49" />
      <rect x="32" y="39" width="1" height="1" fill="#315B49" />
      <rect x="23" y="39" width="1" height="2" fill="#315B49" />
      <rect x="20" y="39" width="1" height="3" fill="#315B49" />
      <rect x="22" y="38" width="1" height="2" fill="#315B49" />
      <rect x="35" y="37" width="1" height="2" fill="#315B49" />
      <rect x="35" y="42" width="1" height="3" fill="#557E85" />
      <rect x="31" y="42" width="1" height="1" fill="#557E85" />
      <rect x="24" y="42" width="1" height="1" fill="#557E85" />
      <rect x="34" y="41" width="2" height="1" fill="#557E85" />
      <rect x="23" y="41" width="1" height="2" fill="#557E85" />
      <rect x="33" y="40" width="3" height="1" fill="#557E85" />
      <rect x="32" y="40" width="1" height="5" fill="#557E85" />
      <rect x="22" y="40" width="1" height="2" fill="#557E85" />
      <rect x="33" y="39" width="3" height="1" fill="#557E85" />
      <rect x="26" y="39" width="4" height="2" fill="#557E85" />
      <rect x="24" y="39" width="2" height="1" fill="#557E85" />
      <rect x="32" y="38" width="3" height="1" fill="#557E85" />
      <rect x="30" y="38" width="2" height="2" fill="#557E85" />
      <rect x="23" y="38" width="3" height="1" fill="#557E85" />
      <rect x="21" y="38" width="1" height="5" fill="#557E85" />
      <rect x="33" y="37" width="2" height="1" fill="#557E85" />
      <rect x="23" y="43" width="1" height="1" fill="#79979D" />
      <rect x="33" y="42" width="2" height="4" fill="#79979D" />
      <rect x="22" y="42" width="1" height="2" fill="#79979D" />
      <rect x="33" y="41" width="1" height="1" fill="#79979D" />
      <rect x="26" y="38" width="4" height="1" fill="#79979D" />
      <rect x="17" y="41" width="2" height="1" fill="#EA9F54" />
      <rect x="16" y="41" width="1" height="1" fill="#FDD082" />
      <rect x="15" y="41" width="1" height="1" fill="#D28560" />
      <rect x="18" y="40" width="1" height="1" fill="#9E3C27" />
      <rect x="14" y="40" width="1" height="1" fill="#9E3C27" />
      <rect x="18" y="39" width="1" height="1" fill="#FDD082" />
      <rect x="15" y="39" width="2" height="2" fill="#FDD082" />
      <rect x="14" y="39" width="1" height="1" fill="#D28560" />
      <rect x="18" y="38" width="1" height="1" fill="#FDD082" />
      <rect x="16" y="38" width="2" height="1" fill="#FDD082" />
      <rect x="15" y="38" width="1" height="1" fill="#FBE7A4" />
      <rect x="17" y="37" width="1" height="1" fill="#EA9F54" />
      <rect x="15" y="37" width="2" height="1" fill="#FDD082" />
      <rect x="14" y="37" width="1" height="2" fill="#EA9F54" />
      <rect x="15" y="42" width="4" height="1" fill="#281820" />
      <rect x="14" y="41" width="1" height="1" fill="#281820" />
      <rect x="19" y="38" width="1" height="1" fill="#281820" />
      <rect x="18" y="37" width="2" height="1" fill="#281820" />
      <rect x="13" y="37" width="1" height="4" fill="#281820" />
      <rect x="13" y="36" width="6" height="1" fill="#281820" />
      <rect x="19" y="39" width="1" height="4" fill="#281820" />
      <rect x="17" y="39" width="1" height="2" fill="#9E3C27" />
      <rect x="27" y="37" width="2" height="1" fill="#434343" />
      <rect x="29" y="36" width="1" height="1" fill="#434343" />
      <rect x="26" y="36" width="1" height="1" fill="#434343" />
      <rect x="30" y="33" width="1" height="3" fill="#434343" />
      <rect x="25" y="33" width="1" height="3" fill="#434343" />
      <rect x="29" y="30" width="1" height="3" fill="#434343" />
      <rect x="26" y="30" width="1" height="3" fill="#434343" />
      <rect x="27" y="29" width="2" height="1" fill="#434343" />
      <rect x="28" y="28" width="1" height="1" fill="#434343" />
      <rect x="27" y="36" width="1" height="1" fill="#6B6B6B" />
      <rect x="26" y="33" width="1" height="3" fill="#6B6B6B" />
      <rect x="27" y="28" width="1" height="1" fill="#6B6B6B" />
      <rect x="29" y="33" width="1" height="3" fill="#5B5B5B" />
      <rect x="27" y="32" width="1" height="4" fill="#5B5B5B" />
      <rect x="28" y="30" width="1" height="7" fill="#5B5B5B" />
      <rect x="27" y="30" width="1" height="2" fill="#2A2A2A" />
      <rect x="29" y="28" width="1" height="1" fill="#2A2A2A" />
      <rect x="26" y="28" width="1" height="1" fill="#2A2A2A" />
      <rect x="27" y="27" width="2" height="1" fill="#2A2A2A" />
      <rect x="29" y="27" width="3" height="1" fill="#281820" />
      <rect x="24" y="27" width="3" height="1" fill="#281820" />
      <rect x="32" y="26" width="2" height="1" fill="#281820" />
      <rect x="22" y="26" width="2" height="1" fill="#281820" />
      <rect x="34" y="25" width="1" height="1" fill="#281820" />
      <rect x="21" y="25" width="1" height="1" fill="#281820" />
      <rect x="20" y="24" width="1" height="1" fill="#281820" />
      <rect x="36" y="22" width="1" height="1" fill="#281820" />
      <rect x="35" y="22" width="1" height="3" fill="#281820" />
      <rect x="20" y="22" width="1" height="2" fill="#281820" />
      <rect x="19" y="22" width="1" height="1" fill="#281820" />
      <rect x="37" y="21" width="1" height="1" fill="#281820" />
      <rect x="32" y="21" width="1" height="1" fill="#281820" />
      <rect x="18" y="21" width="1" height="1" fill="#281820" />
      <rect x="34" y="20" width="1" height="1" fill="#281820" />
      <rect x="31" y="20" width="2" height="1" fill="#281820" />
      <rect x="24" y="20" width="1" height="1" fill="#281820" />
      <rect x="23" y="20" width="1" height="2" fill="#281820" />
      <rect x="20" y="20" width="1" height="1" fill="#281820" />
      <rect x="38" y="19" width="1" height="2" fill="#281820" />
      <rect x="34" y="19" width="3" height="1" fill="#281820" />
      <rect x="21" y="19" width="1" height="1" fill="#281820" />
      <rect x="17" y="19" width="1" height="2" fill="#281820" />
      <rect x="35" y="18" width="2" height="1" fill="#281820" />
      <rect x="33" y="18" width="1" height="2" fill="#281820" />
      <rect x="39" y="17" width="1" height="2" fill="#281820" />
      <rect x="36" y="17" width="1" height="1" fill="#281820" />
      <rect x="25" y="17" width="1" height="1" fill="#281820" />
      <rect x="22" y="17" width="1" height="1" fill="#281820" />
      <rect x="16" y="17" width="1" height="2" fill="#281820" />
      <rect x="32" y="16" width="1" height="2" fill="#281820" />
      <rect x="29" y="16" width="1" height="2" fill="#281820" />
      <rect x="19" y="16" width="1" height="3" fill="#281820" />
      <rect x="17" y="16" width="1" height="1" fill="#281820" />
      <rect x="40" y="15" width="1" height="2" fill="#281820" />
      <rect x="39" y="15" width="1" height="1" fill="#281820" />
      <rect x="37" y="15" width="2" height="2" fill="#281820" />
      <rect x="31" y="15" width="1" height="1" fill="#281820" />
      <rect x="24" y="15" width="1" height="1" fill="#281820" />
      <rect x="16" y="15" width="1" height="1" fill="#281820" />
      <rect x="15" y="15" width="1" height="2" fill="#281820" />
      <rect x="30" y="14" width="1" height="2" fill="#281820" />
      <rect x="26" y="14" width="1" height="2" fill="#281820" />
      <rect x="27" y="13" width="1" height="1" fill="#281820" />
      <rect x="28" y="12" width="1" height="4" fill="#281820" />
      <rect x="38" y="11" width="1" height="4" fill="#281820" />
      <rect x="18" y="10" width="1" height="7" fill="#281820" />
      <rect x="37" y="9" width="1" height="2" fill="#281820" />
      <rect x="36" y="8" width="1" height="1" fill="#281820" />
      <rect x="19" y="8" width="1" height="3" fill="#281820" />
      <rect x="35" y="7" width="1" height="1" fill="#281820" />
      <rect x="20" y="7" width="1" height="1" fill="#281820" />
      <rect x="33" y="6" width="2" height="1" fill="#281820" />
      <rect x="21" y="6" width="2" height="1" fill="#281820" />
      <rect x="30" y="5" width="3" height="1" fill="#281820" />
      <rect x="23" y="5" width="3" height="1" fill="#281820" />
      <rect x="26" y="4" width="4" height="1" fill="#281820" />
      <rect x="25" y="25" width="6" height="1" fill="#FDD082" />
      <rect x="27" y="24" width="6" height="1" fill="#FDD082" />
      <rect x="30" y="23" width="4" height="1" fill="#FDD082" />
      <rect x="23" y="23" width="4" height="2" fill="#FDD082" />
      <rect x="33" y="22" width="1" height="1" fill="#FDD082" />
      <rect x="22" y="22" width="1" height="2" fill="#FDD082" />
      <rect x="29" y="21" width="1" height="3" fill="#FDD082" />
      <rect x="26" y="21" width="1" height="2" fill="#FDD082" />
      <rect x="36" y="20" width="1" height="2" fill="#FDD082" />
      <rect x="19" y="20" width="1" height="2" fill="#FDD082" />
      <rect x="37" y="18" width="1" height="3" fill="#FDD082" />
      <rect x="29" y="18" width="1" height="2" fill="#FDD082" />
      <rect x="25" y="18" width="1" height="1" fill="#FDD082" />
      <rect x="22" y="18" width="1" height="1" fill="#FDD082" />
      <rect x="18" y="18" width="1" height="3" fill="#FDD082" />
      <rect x="38" y="17" width="1" height="2" fill="#FDD082" />
      <rect x="17" y="17" width="1" height="2" fill="#FDD082" />
      <rect x="39" y="16" width="1" height="1" fill="#FDD082" />
      <rect x="31" y="16" width="1" height="2" fill="#FDD082" />
      <rect x="30" y="16" width="1" height="3" fill="#FDD082" />
      <rect x="28" y="16" width="1" height="7" fill="#FDD082" />
      <rect x="26" y="16" width="1" height="4" fill="#FDD082" />
      <rect x="23" y="16" width="2" height="2" fill="#FDD082" />
      <rect x="16" y="16" width="1" height="1" fill="#FDD082" />
      <rect x="27" y="14" width="1" height="8" fill="#FDD082" />
      <rect x="24" y="26" width="8" height="1" fill="#9E3C27" />
      <rect x="32" y="25" width="2" height="1" fill="#9E3C27" />
      <rect x="23" y="25" width="1" height="1" fill="#9E3C27" />
      <rect x="22" y="25" width="1" height="1" fill="#9E3C27" />
      <rect x="34" y="24" width="1" height="1" fill="#9E3C27" />
      <rect x="21" y="24" width="1" height="1" fill="#9E3C27" />
      <rect x="31" y="19" width="2" height="1" fill="#9E3C27" />
      <rect x="23" y="19" width="2" height="1" fill="#9E3C27" />
      <rect x="37" y="17" width="1" height="1" fill="#9E3C27" />
      <rect x="18" y="17" width="1" height="1" fill="#9E3C27" />
      <rect x="31" y="25" width="1" height="1" fill="#EA9F54" />
      <rect x="24" y="25" width="1" height="1" fill="#EA9F54" />
      <rect x="33" y="24" width="1" height="1" fill="#EA9F54" />
      <rect x="22" y="24" width="1" height="1" fill="#EA9F54" />
      <rect x="28" y="23" width="1" height="1" fill="#EA9F54" />
      <rect x="34" y="21" width="1" height="2" fill="#EA9F54" />
      <rect x="29" y="20" width="1" height="1" fill="#EA9F54" />
      <rect x="26" y="20" width="1" height="1" fill="#EA9F54" />
      <rect x="21" y="20" width="1" height="3" fill="#EA9F54" />
      <rect x="30" y="19" width="1" height="1" fill="#EA9F54" />
      <rect x="25" y="19" width="1" height="1" fill="#EA9F54" />
      <rect x="34" y="23" width="1" height="1" fill="#D28560" />
      <rect x="21" y="23" width="1" height="1" fill="#D28560" />
      <rect x="20" y="21" width="1" height="1" fill="#D28560" />
      <rect x="35" y="20" width="1" height="2" fill="#D28560" />
      <rect x="22" y="19" width="1" height="1" fill="#D28560" />
      <rect x="19" y="19" width="1" height="1" fill="#D28560" />
      <rect x="31" y="22" width="2" height="1" fill="#A45227" />
      <rect x="23" y="22" width="2" height="1" fill="#A45227" />
      <rect x="31" y="21" width="1" height="1" fill="#BE734B" />
      <rect x="24" y="21" width="1" height="1" fill="#BE734B" />
      <rect x="33" y="20" width="1" height="1" fill="#BE734B" />
      <rect x="30" y="20" width="1" height="1" fill="#BE734B" />
      <rect x="25" y="20" width="1" height="1" fill="#BE734B" />
      <rect x="22" y="20" width="1" height="1" fill="#BE734B" />
      <rect x="33" y="21" width="1" height="1" fill="#F6F0D1" />
      <rect x="30" y="21" width="1" height="2" fill="#F6F0D1" />
      <rect x="25" y="21" width="1" height="2" fill="#F6F0D1" />
      <rect x="22" y="21" width="1" height="1" fill="#F6F0D1" />
      <rect x="20" y="17" width="1" height="3" fill="#7D5D5D" />
      <rect x="27" y="22" width="1" height="2" fill="#FBE7A4" />
      <rect x="31" y="18" width="2" height="1" fill="#FBE7A4" />
      <rect x="23" y="18" width="2" height="1" fill="#FBE7A4" />
      <rect x="21" y="15" width="1" height="1" fill="#EDDF95" />
      <rect x="32" y="14" width="1" height="1" fill="#EDDF95" />
      <rect x="29" y="12" width="1" height="1" fill="#EDDF95" />
      <rect x="34" y="11" width="1" height="3" fill="#EDDF95" />
      <rect x="32" y="11" width="1" height="1" fill="#EDDF95" />
      <rect x="31" y="10" width="1" height="3" fill="#EDDF95" />
      <rect x="21" y="10" width="1" height="2" fill="#EDDF95" />
      <rect x="33" y="9" width="1" height="2" fill="#EDDF95" />
      <rect x="29" y="9" width="3" height="1" fill="#EDDF95" />
      <rect x="26" y="9" width="1" height="3" fill="#EDDF95" />
      <rect x="22" y="9" width="1" height="5" fill="#EDDF95" />
      <rect x="25" y="8" width="1" height="6" fill="#EDDF95" />
      <rect x="23" y="8" width="1" height="2" fill="#EDDF95" />
      <rect x="28" y="7" width="3" height="2" fill="#EDDF95" />
      <rect x="27" y="7" width="1" height="3" fill="#EDDF95" />
      <rect x="24" y="7" width="1" height="5" fill="#EDDF95" />
      <rect x="34" y="18" width="1" height="1" fill="#7D5D5D" />
      <rect x="21" y="18" width="1" height="1" fill="#7D5D5D" />
      <rect x="35" y="17" width="1" height="1" fill="#7D5D5D" />
      <rect x="33" y="17" width="1" height="1" fill="#7D5D5D" />
      <rect x="36" y="16" width="1" height="1" fill="#7D5D5D" />
      <rect x="25" y="16" width="1" height="1" fill="#7D5D5D" />
      <rect x="22" y="16" width="1" height="1" fill="#7D5D5D" />
      <rect x="23" y="15" width="1" height="1" fill="#7D5D5D" />
      <rect x="24" y="14" width="1" height="1" fill="#7D5D5D" />
      <rect x="19" y="14" width="1" height="2" fill="#7D5D5D" />
      <rect x="37" y="13" width="1" height="2" fill="#7D5D5D" />
      <rect x="37" y="11" width="1" height="1" fill="#7D5D5D" />
      <rect x="19" y="11" width="1" height="1" fill="#7D5D5D" />
      <rect x="36" y="9" width="1" height="1" fill="#7D5D5D" />
      <rect x="20" y="8" width="1" height="2" fill="#7D5D5D" />
      <rect x="32" y="6" width="1" height="1" fill="#7D5D5D" />
      <rect x="29" y="5" width="1" height="1" fill="#7D5D5D" />
      <rect x="34" y="17" width="1" height="1" fill="#A87D52" />
      <rect x="21" y="17" width="1" height="1" fill="#A87D52" />
      <rect x="35" y="16" width="1" height="1" fill="#A87D52" />
      <rect x="20" y="16" width="1" height="1" fill="#A87D52" />
      <rect x="29" y="15" width="1" height="1" fill="#A87D52" />
      <rect x="25" y="15" width="1" height="1" fill="#A87D52" />
      <rect x="22" y="15" width="1" height="1" fill="#A87D52" />
      <rect x="31" y="14" width="1" height="1" fill="#A87D52" />
      <rect x="23" y="14" width="1" height="1" fill="#A87D52" />
      <rect x="33" y="13" width="1" height="4" fill="#A87D52" />
      <rect x="26" y="13" width="1" height="1" fill="#A87D52" />
      <rect x="24" y="13" width="1" height="1" fill="#A87D52" />
      <rect x="20" y="13" width="1" height="1" fill="#A87D52" />
      <rect x="37" y="12" width="1" height="1" fill="#A87D52" />
      <rect x="30" y="12" width="1" height="2" fill="#A87D52" />
      <rect x="27" y="12" width="1" height="1" fill="#A87D52" />
      <rect x="19" y="12" width="1" height="2" fill="#A87D52" />
      <rect x="28" y="11" width="1" height="1" fill="#A87D52" />
      <rect x="36" y="10" width="1" height="6" fill="#A87D52" />
      <rect x="20" y="10" width="1" height="2" fill="#A87D52" />
      <rect x="35" y="9" width="1" height="1" fill="#A87D52" />
      <rect x="34" y="8" width="2" height="1" fill="#A87D52" />
      <rect x="32" y="7" width="3" height="1" fill="#A87D52" />
      <rect x="21" y="7" width="1" height="2" fill="#A87D52" />
      <rect x="31" y="6" width="1" height="1" fill="#A87D52" />
      <rect x="23" y="6" width="2" height="1" fill="#A87D52" />
      <rect x="26" y="5" width="3" height="1" fill="#A87D52" />
      <rect x="21" y="16" width="1" height="1" fill="#C0AB81" />
      <rect x="32" y="15" width="1" height="1" fill="#C0AB81" />
      <rect x="34" y="14" width="1" height="3" fill="#C0AB81" />
      <rect x="25" y="14" width="1" height="1" fill="#C0AB81" />
      <rect x="22" y="14" width="1" height="1" fill="#C0AB81" />
      <rect x="20" y="14" width="1" height="2" fill="#C0AB81" />
      <rect x="31" y="13" width="1" height="1" fill="#C0AB81" />
      <rect x="29" y="13" width="1" height="2" fill="#C0AB81" />
      <rect x="23" y="13" width="1" height="1" fill="#C0AB81" />
      <rect x="21" y="13" width="1" height="2" fill="#C0AB81" />
      <rect x="26" y="12" width="1" height="1" fill="#C0AB81" />
      <rect x="24" y="12" width="1" height="1" fill="#C0AB81" />
      <rect x="20" y="12" width="2" height="1" fill="#C0AB81" />
      <rect x="33" y="11" width="1" height="2" fill="#C0AB81" />
      <rect x="35" y="10" width="1" height="6" fill="#C0AB81" />
      <rect x="30" y="10" width="1" height="2" fill="#C0AB81" />
      <rect x="27" y="10" width="1" height="2" fill="#C0AB81" />
      <rect x="34" y="9" width="1" height="2" fill="#C0AB81" />
      <rect x="28" y="9" width="1" height="2" fill="#C0AB81" />
      <rect x="21" y="9" width="1" height="1" fill="#C0AB81" />
      <rect x="33" y="8" width="1" height="1" fill="#C0AB81" />
      <rect x="32" y="8" width="1" height="3" fill="#C0AB81" />
      <rect x="26" y="8" width="1" height="1" fill="#C0AB81" />
      <rect x="31" y="7" width="1" height="2" fill="#C0AB81" />
      <rect x="23" y="7" width="1" height="1" fill="#C0AB81" />
      <rect x="22" y="7" width="1" height="2" fill="#C0AB81" />
      <rect x="27" y="6" width="4" height="1" fill="#C0AB81" />
      <rect x="25" y="6" width="2" height="2" fill="#C0AB81" />
      <rect x="32" y="12" width="1" height="2" fill="#F6F6F3" />
      <rect x="29" y="10" width="1" height="2" fill="#F6F6F3" />
      <rect x="23" y="10" width="1" height="3" fill="#F6F6F3" />
      <rect x="14" y="33" width="1" height="3" fill="#C4B59F" />
      <rect x="41" y="32" width="1" height="1" fill="#C4B59F" />
      <rect x="17" y="26" width="1" height="1" fill="#C4B59F" />
      <rect x="38" y="25" width="1" height="3" fill="#C4B59F" />
      <rect
        width="1"
        height="5"
        transform="matrix(-1 0 0 1 43 30)"
        fill="#281820"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 42 27)"
        fill="#281820"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 41 25)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 40 24)"
        fill="#281820"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 39 23)"
        fill="#281820"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 35 33)"
        fill="#958080"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 34 34)"
        fill="#958080"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 32)"
        fill="#958080"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 30)"
        fill="#958080"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 30)"
        fill="#958080"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 29)"
        fill="#958080"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 41 27)"
        fill="#958080"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 32 35)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 33)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 41 32)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 33 29)"
        fill="#E5E6C7"
      />
      <rect
        width="2"
        height="4"
        transform="matrix(-1 0 0 1 32 29)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 30 29)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 40 27)"
        fill="#E5E6C7"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 39 28)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 28)"
        fill="#E5E6C7"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 37 27)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="6"
        transform="matrix(-1 0 0 1 34 27)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="5"
        transform="matrix(-1 0 0 1 35 26)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 36 25)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 33)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 31)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 31)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 42 30)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 30)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 40 25)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 24)"
        fill="#424242"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 42 31)"
        fill="#C4B59F"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 35 35)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 32 34)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 34 33)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 40 32)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 35 31)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 41 30)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 36 30)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 40 29)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 37 29)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 32 28)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 27)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 40 26)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 38 24)"
        fill="#C4B59F"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 35 36)"
        fill="#281820"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 36 34)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 33)"
        fill="#281820"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 39 32)"
        fill="#281820"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 38 32)"
        fill="#281820"
      />
      <rect x="36" y="39" width="1" height="1" fill="#281716" />
      <rect x="36" y="36" width="1" height="3" fill="#281820" />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 41 38)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 40 38)"
        fill="#FDD082"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 39 38)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 37)"
        fill="#9E3C27"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 41 36)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 42 37)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 42 36)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 39 36)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 36)"
        fill="#FDD082"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 40 35)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 41 35)"
        fill="#FBE7A4"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 35)"
        fill="#FDD082"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 41 34)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 42 34)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 34)"
        fill="#EA9F54"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 41 39)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 42 38)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 35)"
        fill="#281820"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 43 34)"
        fill="#281820"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 38 34)"
        fill="#281820"
      />
      <rect
        width="6"
        height="1"
        transform="matrix(-1 0 0 1 43 33)"
        fill="#281820"
      />
    </svg>
  );
}

function UserDown2() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="13" y="30" width="1" height="5" fill="#281820" />
      <rect x="14" y="27" width="1" height="3" fill="#281820" />
      <rect x="15" y="25" width="1" height="2" fill="#281820" />
      <rect x="16" y="24" width="1" height="1" fill="#281820" />
      <rect x="17" y="23" width="3" height="1" fill="#281820" />
      <rect x="22" y="34" width="2" height="1" fill="#958080" />
      <rect x="21" y="33" width="1" height="2" fill="#958080" />
      <rect x="20" y="32" width="1" height="1" fill="#958080" />
      <rect x="19" y="30" width="1" height="1" fill="#958080" />
      <rect x="17" y="30" width="1" height="1" fill="#958080" />
      <rect x="18" y="29" width="1" height="1" fill="#958080" />
      <rect x="15" y="27" width="1" height="3" fill="#958080" />
      <rect x="24" y="35" width="1" height="2" fill="#E5E6C7" />
      <rect x="23" y="33" width="1" height="1" fill="#E5E6C7" />
      <rect x="15" y="32" width="1" height="2" fill="#E5E6C7" />
      <rect x="26" y="29" width="1" height="1" fill="#E5E6C7" />
      <rect x="24" y="29" width="2" height="4" fill="#E5E6C7" />
      <rect x="23" y="29" width="1" height="3" fill="#E5E6C7" />
      <rect x="23" y="28" width="1" height="1" fill="#E5E6C7" />
      <rect x="17" y="28" width="2" height="1" fill="#E5E6C7" />
      <rect x="22" y="27" width="1" height="6" fill="#E5E6C7" />
      <rect x="19" y="27" width="2" height="2" fill="#E5E6C7" />
      <rect x="16" y="27" width="1" height="2" fill="#E5E6C7" />
      <rect x="21" y="26" width="1" height="5" fill="#E5E6C7" />
      <rect x="20" y="25" width="1" height="2" fill="#E5E6C7" />
      <rect x="20" y="33" width="1" height="1" fill="#424242" />
      <rect x="19" y="31" width="1" height="1" fill="#424242" />
      <rect x="18" y="31" width="1" height="1" fill="#424242" />
      <rect x="18" y="30" width="1" height="1" fill="#424242" />
      <rect x="14" y="30" width="1" height="1" fill="#424242" />
      <rect x="16" y="25" width="1" height="1" fill="#424242" />
      <rect x="17" y="24" width="1" height="1" fill="#424242" />
      <rect x="14" y="31" width="4" height="1" fill="#C4B59F" />
      <rect x="21" y="35" width="3" height="1" fill="#C4B59F" />
      <rect x="24" y="34" width="1" height="1" fill="#C4B59F" />
      <rect x="22" y="33" width="1" height="1" fill="#C4B59F" />
      <rect x="16" y="32" width="1" height="3" fill="#C4B59F" />
      <rect x="21" y="31" width="1" height="2" fill="#C4B59F" />
      <rect x="20" y="30" width="1" height="2" fill="#C4B59F" />
      <rect x="15" y="30" width="2" height="1" fill="#C4B59F" />
      <rect x="19" y="29" width="2" height="1" fill="#C4B59F" />
      <rect x="16" y="29" width="2" height="1" fill="#C4B59F" />
      <rect x="24" y="28" width="2" height="1" fill="#C4B59F" />
      <rect x="23" y="27" width="1" height="1" fill="#C4B59F" />
      <rect x="16" y="26" width="1" height="1" fill="#C4B59F" />
      <rect x="18" y="24" width="2" height="1" fill="#C4B59F" />
      <rect x="21" y="36" width="3" height="1" fill="#281820" />
      <rect x="20" y="34" width="1" height="2" fill="#281820" />
      <rect x="19" y="33" width="1" height="1" fill="#281820" />
      <rect x="18" y="32" width="2" height="1" fill="#281820" />
      <rect x="17" y="32" width="1" height="3" fill="#281820" />
      <rect x="17" y="38" width="2" height="1" fill="#EA9F54" />
      <rect x="16" y="38" width="1" height="1" fill="#FDD082" />
      <rect x="15" y="38" width="1" height="1" fill="#D28560" />
      <rect x="18" y="37" width="1" height="1" fill="#9E3C27" />
      <rect x="14" y="37" width="1" height="1" fill="#9E3C27" />
      <rect x="18" y="36" width="1" height="1" fill="#FDD082" />
      <rect x="15" y="36" width="2" height="2" fill="#FDD082" />
      <rect x="14" y="36" width="1" height="1" fill="#D28560" />
      <rect x="18" y="35" width="1" height="1" fill="#FDD082" />
      <rect x="16" y="35" width="2" height="1" fill="#FDD082" />
      <rect x="15" y="35" width="1" height="1" fill="#FBE7A4" />
      <rect x="17" y="34" width="1" height="1" fill="#EA9F54" />
      <rect x="15" y="34" width="2" height="1" fill="#FDD082" />
      <rect x="14" y="34" width="1" height="2" fill="#EA9F54" />
      <rect x="15" y="39" width="4" height="1" fill="#281820" />
      <rect x="14" y="38" width="1" height="1" fill="#281820" />
      <rect x="19" y="35" width="1" height="1" fill="#281820" />
      <rect x="18" y="34" width="2" height="1" fill="#281820" />
      <rect x="13" y="34" width="1" height="4" fill="#281820" />
      <rect x="13" y="33" width="6" height="1" fill="#281820" />
      <rect x="17" y="36" width="1" height="2" fill="#9E3C27" />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 20 39)"
        fill="#281716"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 20 36)"
        fill="#281820"
      />
      <rect x="29" y="27" width="3" height="1" fill="#281820" />
      <rect x="24" y="27" width="3" height="1" fill="#281820" />
      <rect x="32" y="26" width="2" height="1" fill="#281820" />
      <rect x="22" y="26" width="2" height="1" fill="#281820" />
      <rect x="34" y="25" width="1" height="1" fill="#281820" />
      <rect x="21" y="25" width="1" height="1" fill="#281820" />
      <rect x="20" y="24" width="1" height="1" fill="#281820" />
      <rect x="36" y="22" width="1" height="1" fill="#281820" />
      <rect x="35" y="22" width="1" height="3" fill="#281820" />
      <rect x="20" y="22" width="1" height="2" fill="#281820" />
      <rect x="19" y="22" width="1" height="1" fill="#281820" />
      <rect x="37" y="21" width="1" height="1" fill="#281820" />
      <rect x="32" y="21" width="1" height="1" fill="#281820" />
      <rect x="18" y="21" width="1" height="1" fill="#281820" />
      <rect x="34" y="20" width="1" height="1" fill="#281820" />
      <rect x="31" y="20" width="2" height="1" fill="#281820" />
      <rect x="24" y="20" width="1" height="1" fill="#281820" />
      <rect x="23" y="20" width="1" height="2" fill="#281820" />
      <rect x="20" y="20" width="1" height="1" fill="#281820" />
      <rect x="38" y="19" width="1" height="2" fill="#281820" />
      <rect x="34" y="19" width="3" height="1" fill="#281820" />
      <rect x="21" y="19" width="1" height="1" fill="#281820" />
      <rect x="17" y="19" width="1" height="2" fill="#281820" />
      <rect x="35" y="18" width="2" height="1" fill="#281820" />
      <rect x="33" y="18" width="1" height="2" fill="#281820" />
      <rect x="39" y="17" width="1" height="2" fill="#281820" />
      <rect x="36" y="17" width="1" height="1" fill="#281820" />
      <rect x="25" y="17" width="1" height="1" fill="#281820" />
      <rect x="22" y="17" width="1" height="1" fill="#281820" />
      <rect x="16" y="17" width="1" height="2" fill="#281820" />
      <rect x="32" y="16" width="1" height="2" fill="#281820" />
      <rect x="29" y="16" width="1" height="2" fill="#281820" />
      <rect x="19" y="16" width="1" height="3" fill="#281820" />
      <rect x="17" y="16" width="1" height="1" fill="#281820" />
      <rect x="40" y="15" width="1" height="2" fill="#281820" />
      <rect x="39" y="15" width="1" height="1" fill="#281820" />
      <rect x="37" y="15" width="2" height="2" fill="#281820" />
      <rect x="31" y="15" width="1" height="1" fill="#281820" />
      <rect x="24" y="15" width="1" height="1" fill="#281820" />
      <rect x="16" y="15" width="1" height="1" fill="#281820" />
      <rect x="15" y="15" width="1" height="2" fill="#281820" />
      <rect x="30" y="14" width="1" height="2" fill="#281820" />
      <rect x="26" y="14" width="1" height="2" fill="#281820" />
      <rect x="27" y="13" width="1" height="1" fill="#281820" />
      <rect x="28" y="12" width="1" height="4" fill="#281820" />
      <rect x="38" y="11" width="1" height="4" fill="#281820" />
      <rect x="18" y="10" width="1" height="7" fill="#281820" />
      <rect x="37" y="9" width="1" height="2" fill="#281820" />
      <rect x="36" y="8" width="1" height="1" fill="#281820" />
      <rect x="19" y="8" width="1" height="3" fill="#281820" />
      <rect x="35" y="7" width="1" height="1" fill="#281820" />
      <rect x="20" y="7" width="1" height="1" fill="#281820" />
      <rect x="33" y="6" width="2" height="1" fill="#281820" />
      <rect x="21" y="6" width="2" height="1" fill="#281820" />
      <rect x="30" y="5" width="3" height="1" fill="#281820" />
      <rect x="23" y="5" width="3" height="1" fill="#281820" />
      <rect x="26" y="4" width="4" height="1" fill="#281820" />
      <rect x="25" y="25" width="6" height="1" fill="#FDD082" />
      <rect x="27" y="24" width="6" height="1" fill="#FDD082" />
      <rect x="30" y="23" width="4" height="1" fill="#FDD082" />
      <rect x="23" y="23" width="4" height="2" fill="#FDD082" />
      <rect x="33" y="22" width="1" height="1" fill="#FDD082" />
      <rect x="22" y="22" width="1" height="2" fill="#FDD082" />
      <rect x="29" y="21" width="1" height="3" fill="#FDD082" />
      <rect x="26" y="21" width="1" height="2" fill="#FDD082" />
      <rect x="36" y="20" width="1" height="2" fill="#FDD082" />
      <rect x="19" y="20" width="1" height="2" fill="#FDD082" />
      <rect x="37" y="18" width="1" height="3" fill="#FDD082" />
      <rect x="29" y="18" width="1" height="2" fill="#FDD082" />
      <rect x="25" y="18" width="1" height="1" fill="#FDD082" />
      <rect x="22" y="18" width="1" height="1" fill="#FDD082" />
      <rect x="18" y="18" width="1" height="3" fill="#FDD082" />
      <rect x="38" y="17" width="1" height="2" fill="#FDD082" />
      <rect x="17" y="17" width="1" height="2" fill="#FDD082" />
      <rect x="39" y="16" width="1" height="1" fill="#FDD082" />
      <rect x="31" y="16" width="1" height="2" fill="#FDD082" />
      <rect x="30" y="16" width="1" height="3" fill="#FDD082" />
      <rect x="28" y="16" width="1" height="7" fill="#FDD082" />
      <rect x="26" y="16" width="1" height="4" fill="#FDD082" />
      <rect x="23" y="16" width="2" height="2" fill="#FDD082" />
      <rect x="16" y="16" width="1" height="1" fill="#FDD082" />
      <rect x="27" y="14" width="1" height="8" fill="#FDD082" />
      <rect x="24" y="26" width="8" height="1" fill="#9E3C27" />
      <rect x="32" y="25" width="2" height="1" fill="#9E3C27" />
      <rect x="23" y="25" width="1" height="1" fill="#9E3C27" />
      <rect x="22" y="25" width="1" height="1" fill="#9E3C27" />
      <rect x="34" y="24" width="1" height="1" fill="#9E3C27" />
      <rect x="21" y="24" width="1" height="1" fill="#9E3C27" />
      <rect x="31" y="19" width="2" height="1" fill="#9E3C27" />
      <rect x="23" y="19" width="2" height="1" fill="#9E3C27" />
      <rect x="37" y="17" width="1" height="1" fill="#9E3C27" />
      <rect x="18" y="17" width="1" height="1" fill="#9E3C27" />
      <rect x="31" y="25" width="1" height="1" fill="#EA9F54" />
      <rect x="24" y="25" width="1" height="1" fill="#EA9F54" />
      <rect x="33" y="24" width="1" height="1" fill="#EA9F54" />
      <rect x="22" y="24" width="1" height="1" fill="#EA9F54" />
      <rect x="28" y="23" width="1" height="1" fill="#EA9F54" />
      <rect x="34" y="21" width="1" height="2" fill="#EA9F54" />
      <rect x="29" y="20" width="1" height="1" fill="#EA9F54" />
      <rect x="26" y="20" width="1" height="1" fill="#EA9F54" />
      <rect x="21" y="20" width="1" height="3" fill="#EA9F54" />
      <rect x="30" y="19" width="1" height="1" fill="#EA9F54" />
      <rect x="25" y="19" width="1" height="1" fill="#EA9F54" />
      <rect x="34" y="23" width="1" height="1" fill="#D28560" />
      <rect x="21" y="23" width="1" height="1" fill="#D28560" />
      <rect x="20" y="21" width="1" height="1" fill="#D28560" />
      <rect x="35" y="20" width="1" height="2" fill="#D28560" />
      <rect x="22" y="19" width="1" height="1" fill="#D28560" />
      <rect x="19" y="19" width="1" height="1" fill="#D28560" />
      <rect x="31" y="22" width="2" height="1" fill="#A45227" />
      <rect x="23" y="22" width="2" height="1" fill="#A45227" />
      <rect x="31" y="21" width="1" height="1" fill="#BE734B" />
      <rect x="24" y="21" width="1" height="1" fill="#BE734B" />
      <rect x="33" y="20" width="1" height="1" fill="#BE734B" />
      <rect x="30" y="20" width="1" height="1" fill="#BE734B" />
      <rect x="25" y="20" width="1" height="1" fill="#BE734B" />
      <rect x="22" y="20" width="1" height="1" fill="#BE734B" />
      <rect x="33" y="21" width="1" height="1" fill="#F6F0D1" />
      <rect x="30" y="21" width="1" height="2" fill="#F6F0D1" />
      <rect x="25" y="21" width="1" height="2" fill="#F6F0D1" />
      <rect x="22" y="21" width="1" height="1" fill="#F6F0D1" />
      <rect x="20" y="17" width="1" height="3" fill="#7D5D5D" />
      <rect x="27" y="22" width="1" height="2" fill="#FBE7A4" />
      <rect x="31" y="18" width="2" height="1" fill="#FBE7A4" />
      <rect x="23" y="18" width="2" height="1" fill="#FBE7A4" />
      <rect x="21" y="15" width="1" height="1" fill="#EDDF95" />
      <rect x="32" y="14" width="1" height="1" fill="#EDDF95" />
      <rect x="29" y="12" width="1" height="1" fill="#EDDF95" />
      <rect x="34" y="11" width="1" height="3" fill="#EDDF95" />
      <rect x="32" y="11" width="1" height="1" fill="#EDDF95" />
      <rect x="31" y="10" width="1" height="3" fill="#EDDF95" />
      <rect x="21" y="10" width="1" height="2" fill="#EDDF95" />
      <rect x="33" y="9" width="1" height="2" fill="#EDDF95" />
      <rect x="29" y="9" width="3" height="1" fill="#EDDF95" />
      <rect x="26" y="9" width="1" height="3" fill="#EDDF95" />
      <rect x="22" y="9" width="1" height="5" fill="#EDDF95" />
      <rect x="25" y="8" width="1" height="6" fill="#EDDF95" />
      <rect x="23" y="8" width="1" height="2" fill="#EDDF95" />
      <rect x="28" y="7" width="3" height="2" fill="#EDDF95" />
      <rect x="27" y="7" width="1" height="3" fill="#EDDF95" />
      <rect x="24" y="7" width="1" height="5" fill="#EDDF95" />
      <rect x="34" y="18" width="1" height="1" fill="#7D5D5D" />
      <rect x="21" y="18" width="1" height="1" fill="#7D5D5D" />
      <rect x="35" y="17" width="1" height="1" fill="#7D5D5D" />
      <rect x="33" y="17" width="1" height="1" fill="#7D5D5D" />
      <rect x="36" y="16" width="1" height="1" fill="#7D5D5D" />
      <rect x="25" y="16" width="1" height="1" fill="#7D5D5D" />
      <rect x="22" y="16" width="1" height="1" fill="#7D5D5D" />
      <rect x="23" y="15" width="1" height="1" fill="#7D5D5D" />
      <rect x="24" y="14" width="1" height="1" fill="#7D5D5D" />
      <rect x="19" y="14" width="1" height="2" fill="#7D5D5D" />
      <rect x="37" y="13" width="1" height="2" fill="#7D5D5D" />
      <rect x="37" y="11" width="1" height="1" fill="#7D5D5D" />
      <rect x="19" y="11" width="1" height="1" fill="#7D5D5D" />
      <rect x="36" y="9" width="1" height="1" fill="#7D5D5D" />
      <rect x="20" y="8" width="1" height="2" fill="#7D5D5D" />
      <rect x="32" y="6" width="1" height="1" fill="#7D5D5D" />
      <rect x="29" y="5" width="1" height="1" fill="#7D5D5D" />
      <rect x="34" y="17" width="1" height="1" fill="#A87D52" />
      <rect x="21" y="17" width="1" height="1" fill="#A87D52" />
      <rect x="35" y="16" width="1" height="1" fill="#A87D52" />
      <rect x="20" y="16" width="1" height="1" fill="#A87D52" />
      <rect x="29" y="15" width="1" height="1" fill="#A87D52" />
      <rect x="25" y="15" width="1" height="1" fill="#A87D52" />
      <rect x="22" y="15" width="1" height="1" fill="#A87D52" />
      <rect x="31" y="14" width="1" height="1" fill="#A87D52" />
      <rect x="23" y="14" width="1" height="1" fill="#A87D52" />
      <rect x="33" y="13" width="1" height="4" fill="#A87D52" />
      <rect x="26" y="13" width="1" height="1" fill="#A87D52" />
      <rect x="24" y="13" width="1" height="1" fill="#A87D52" />
      <rect x="20" y="13" width="1" height="1" fill="#A87D52" />
      <rect x="37" y="12" width="1" height="1" fill="#A87D52" />
      <rect x="30" y="12" width="1" height="2" fill="#A87D52" />
      <rect x="27" y="12" width="1" height="1" fill="#A87D52" />
      <rect x="19" y="12" width="1" height="2" fill="#A87D52" />
      <rect x="28" y="11" width="1" height="1" fill="#A87D52" />
      <rect x="36" y="10" width="1" height="6" fill="#A87D52" />
      <rect x="20" y="10" width="1" height="2" fill="#A87D52" />
      <rect x="35" y="9" width="1" height="1" fill="#A87D52" />
      <rect x="34" y="8" width="2" height="1" fill="#A87D52" />
      <rect x="32" y="7" width="3" height="1" fill="#A87D52" />
      <rect x="21" y="7" width="1" height="2" fill="#A87D52" />
      <rect x="31" y="6" width="1" height="1" fill="#A87D52" />
      <rect x="23" y="6" width="2" height="1" fill="#A87D52" />
      <rect x="26" y="5" width="3" height="1" fill="#A87D52" />
      <rect x="21" y="16" width="1" height="1" fill="#C0AB81" />
      <rect x="32" y="15" width="1" height="1" fill="#C0AB81" />
      <rect x="34" y="14" width="1" height="3" fill="#C0AB81" />
      <rect x="25" y="14" width="1" height="1" fill="#C0AB81" />
      <rect x="22" y="14" width="1" height="1" fill="#C0AB81" />
      <rect x="20" y="14" width="1" height="2" fill="#C0AB81" />
      <rect x="31" y="13" width="1" height="1" fill="#C0AB81" />
      <rect x="29" y="13" width="1" height="2" fill="#C0AB81" />
      <rect x="23" y="13" width="1" height="1" fill="#C0AB81" />
      <rect x="21" y="13" width="1" height="2" fill="#C0AB81" />
      <rect x="26" y="12" width="1" height="1" fill="#C0AB81" />
      <rect x="24" y="12" width="1" height="1" fill="#C0AB81" />
      <rect x="20" y="12" width="2" height="1" fill="#C0AB81" />
      <rect x="33" y="11" width="1" height="2" fill="#C0AB81" />
      <rect x="35" y="10" width="1" height="6" fill="#C0AB81" />
      <rect x="30" y="10" width="1" height="2" fill="#C0AB81" />
      <rect x="27" y="10" width="1" height="2" fill="#C0AB81" />
      <rect x="34" y="9" width="1" height="2" fill="#C0AB81" />
      <rect x="28" y="9" width="1" height="2" fill="#C0AB81" />
      <rect x="21" y="9" width="1" height="1" fill="#C0AB81" />
      <rect x="33" y="8" width="1" height="1" fill="#C0AB81" />
      <rect x="32" y="8" width="1" height="3" fill="#C0AB81" />
      <rect x="26" y="8" width="1" height="1" fill="#C0AB81" />
      <rect x="31" y="7" width="1" height="2" fill="#C0AB81" />
      <rect x="23" y="7" width="1" height="1" fill="#C0AB81" />
      <rect x="22" y="7" width="1" height="2" fill="#C0AB81" />
      <rect x="27" y="6" width="4" height="1" fill="#C0AB81" />
      <rect x="25" y="6" width="2" height="2" fill="#C0AB81" />
      <rect x="32" y="12" width="1" height="2" fill="#F6F6F3" />
      <rect x="29" y="10" width="1" height="2" fill="#F6F6F3" />
      <rect x="23" y="10" width="1" height="3" fill="#F6F6F3" />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 24 53)"
        fill="#281716"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 25 52)"
        fill="#281716"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 20 52)"
        fill="#281716"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 19 51)"
        fill="#281716"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 18 49)"
        fill="#281716"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 26 48)"
        fill="#281716"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 25 47)"
        fill="#281716"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 19 47)"
        fill="#281716"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 24 52)"
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
        height="1"
        transform="matrix(-1 0 0 1 19 49)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 25 48)"
        fill="#9E3C27"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 21 47)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 20 49)"
        fill="#EA9F54"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 24 48)"
        fill="#EA9F54"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 23 47)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 20 50)"
        fill="#FDD082"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 24 49)"
        fill="#FDD082"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 24 50)"
        fill="#FBE7A4"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 21 50)"
        fill="#FBE7A4"
      />
      <rect
        width="5"
        height="1"
        transform="matrix(-1 0 0 1 24 51)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 22 50)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 19 50)"
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
        transform="matrix(-1 0 0 1 20 48)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 24 47)"
        fill="#D28560"
      />
      <rect
        width="6"
        height="1"
        transform="matrix(-1 0 0 1 37 51)"
        fill="#281716"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 31 50)"
        fill="#281716"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 38 48)"
        fill="#281716"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 37 46)"
        fill="#281716"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 30 46)"
        fill="#281716"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 49)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 36 48)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 32 48)"
        fill="#FDD082"
      />
      <rect
        width="3"
        height="3"
        transform="matrix(-1 0 0 1 35 47)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 50)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 31 48)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 47)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 32 47)"
        fill="#EA9F54"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 35 46)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 34 50)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 48)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 31 47)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 46)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 35 50)"
        fill="#FBE7A4"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 33 50)"
        fill="#FBE7A4"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 31 46)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="5"
        transform="matrix(-1 0 0 1 43 31)"
        fill="#281820"
      />
      <rect
        width="1"
        height="3"
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
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 39 24)"
        fill="#281820"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 35 34)"
        fill="#958080"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 34 35)"
        fill="#958080"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 33)"
        fill="#958080"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 31)"
        fill="#958080"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 31)"
        fill="#958080"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 30)"
        fill="#958080"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 41 28)"
        fill="#958080"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 32 36)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 34)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 41 33)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 33 30)"
        fill="#E5E6C7"
      />
      <rect
        width="2"
        height="4"
        transform="matrix(-1 0 0 1 32 30)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 30 30)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 40 28)"
        fill="#E5E6C7"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 39 29)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 29)"
        fill="#E5E6C7"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 37 28)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="6"
        transform="matrix(-1 0 0 1 34 28)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="5"
        transform="matrix(-1 0 0 1 35 27)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 36 26)"
        fill="#E5E6C7"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 34)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 32)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 32)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 42 31)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 31)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 40 26)"
        fill="#424242"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 25)"
        fill="#424242"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 42 32)"
        fill="#C4B59F"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 35 36)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 32 35)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 34 34)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 40 33)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 35 32)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 41 31)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 36 31)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 40 30)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 37 30)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 32 29)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 28)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 40 27)"
        fill="#C4B59F"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 38 25)"
        fill="#C4B59F"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 35 37)"
        fill="#281820"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 36 35)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 34)"
        fill="#281820"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 39 33)"
        fill="#281820"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 38 33)"
        fill="#281820"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 36 43)"
        fill="#2C2D16"
      />
      <rect
        width="6"
        height="1"
        transform="matrix(-1 0 0 1 35 45)"
        fill="#2C2D16"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 25 45)"
        fill="#2C2D16"
      />
      <rect
        width="5"
        height="1"
        transform="matrix(-1 0 0 1 24 46)"
        fill="#2C2D16"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 20 45)"
        fill="#2C2D16"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 30 42)"
        fill="#2C2D16"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 26 42)"
        fill="#2C2D16"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 29 41)"
        fill="#2C2D16"
      />
      <rect
        width="1"
        height="5"
        transform="matrix(-1 0 0 1 19 40)"
        fill="#2C2D16"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 24 37)"
        fill="#2C2D16"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 31 37)"
        fill="#281820"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 27 37)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 31 44)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 25 44)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 20 44)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 36 42)"
        fill="#2E403A"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 31 41)"
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
        transform="matrix(-1 0 0 1 32 40)"
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
        transform="matrix(-1 0 0 1 20 40)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 36 37)"
        fill="#2E403A"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 24 45)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 21 45)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 35 43)"
        fill="#315B49"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 34 44)"
        fill="#315B49"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 32 43)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 25 43)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 31 42)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 20 42)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 32 41)"
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
        transform="matrix(-1 0 0 1 31 40)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 26 40)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 36 39)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 33 39)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 24 39)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 34 38)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 21 37)"
        fill="#315B49"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 32 42)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 25 42)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 21 42)"
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
        transform="matrix(-1 0 0 1 22 41)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 34 40)"
        fill="#557E85"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 23 40)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="5"
        transform="matrix(-1 0 0 1 24 40)"
        fill="#557E85"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 32 39)"
        fill="#557E85"
      />
      <rect
        width="4"
        height="2"
        transform="matrix(-1 0 0 1 30 39)"
        fill="#557E85"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 23 39)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="5"
        transform="matrix(-1 0 0 1 35 38)"
        fill="#557E85"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 33 38)"
        fill="#557E85"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 26 38)"
        fill="#557E85"
      />
      <rect
        width="3"
        height="1"
        transform="matrix(-1 0 0 1 24 38)"
        fill="#557E85"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 23 37)"
        fill="#557E85"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 33 43)"
        fill="#79979D"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 34 42)"
        fill="#79979D"
      />
      <rect
        width="2"
        height="4"
        transform="matrix(-1 0 0 1 23 42)"
        fill="#79979D"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 23 41)"
        fill="#79979D"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 30 38)"
        fill="#79979D"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 41 41)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 40 41)"
        fill="#FDD082"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 39 41)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 40)"
        fill="#9E3C27"
      />
      <rect
        width="2"
        height="2"
        transform="matrix(-1 0 0 1 41 39)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 42 40)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 42 39)"
        fill="#D28560"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 39 39)"
        fill="#9E3C27"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 39)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 37 39)"
        fill="#281820"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 40 38)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 41 38)"
        fill="#FBE7A4"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 38 38)"
        fill="#FDD082"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 41 37)"
        fill="#FDD082"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 42 37)"
        fill="#EA9F54"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 37)"
        fill="#EA9F54"
      />
      <rect
        width="4"
        height="1"
        transform="matrix(-1 0 0 1 41 42)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 42 41)"
        fill="#281820"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 37 38)"
        fill="#281820"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 43 37)"
        fill="#281820"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 38 37)"
        fill="#281820"
      />
      <rect
        width="6"
        height="1"
        transform="matrix(-1 0 0 1 43 36)"
        fill="#281820"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 29 37)"
        fill="#434343"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 30 36)"
        fill="#434343"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 27 36)"
        fill="#434343"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 31 33)"
        fill="#434343"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 26 33)"
        fill="#434343"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 30 30)"
        fill="#434343"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 27 30)"
        fill="#434343"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 29 29)"
        fill="#434343"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 28 28)"
        fill="#434343"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 29 36)"
        fill="#6B6B6B"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 30 33)"
        fill="#6B6B6B"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 29 28)"
        fill="#6B6B6B"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 27 33)"
        fill="#5B5B5B"
      />
      <rect
        width="1"
        height="4"
        transform="matrix(-1 0 0 1 29 32)"
        fill="#5B5B5B"
      />
      <rect
        width="1"
        height="7"
        transform="matrix(-1 0 0 1 28 30)"
        fill="#5B5B5B"
      />
      <rect
        width="1"
        height="2"
        transform="matrix(-1 0 0 1 29 30)"
        fill="#2A2A2A"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 30 28)"
        fill="#2A2A2A"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 27 28)"
        fill="#2A2A2A"
      />
      <rect
        width="2"
        height="1"
        transform="matrix(-1 0 0 1 29 27)"
        fill="#2A2A2A"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 42 33)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 15 32)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="1"
        transform="matrix(-1 0 0 1 39 26)"
        fill="#C4B59F"
      />
      <rect
        width="1"
        height="3"
        transform="matrix(-1 0 0 1 18 25)"
        fill="#C4B59F"
      />
    </svg>
  );
}
