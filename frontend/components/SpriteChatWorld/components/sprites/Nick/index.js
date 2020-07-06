import React, { useState } from "react";

import { UserDown, UserDownStand } from "./animation-states/UserDown";
import { UserUp, UserStandUp } from "./animation-states/UserUp";
import { UserLeft, UserLeftStand } from "./animation-states/UserLeft";
import { UserRight, UserRightStand } from "./animation-states/UserRight";

const Nick = ({ characterState = "STAND_DOWN" }) => {
  switch (characterState) {
    case "WALK_LEFT":
      return <UserLeft />;

    case "STAND_LEFT":
      return <UserLeftStand />;

    case "WALK_RIGHT":
      return <UserRight />;

    case "STAND_RIGHT":
      return <UserRightStand />;

    case "WALK_UP":
      return <UserUp />;

    case "STAND_UP":
      return <UserStandUp />;

    case "WALK_DOWN":
      return <UserDown />;

    case "STAND_DOWN":
    default:
      return <UserDownStand />;
  }
};

export default Nick;
