import React from "react";
import { Text, Box, useGlobalConfig } from "@airtable/blocks/ui";

import Kate from "../sprites/Kate";
import Nick from "../sprites/Nick";
import Panda from "../sprites/Panda";

import UserChatBubble from "../UserChatBubble";

import useCharacterMovement from "./utils/useCharacterMovement";

const Character = ({ userId, isSpriteMovementDisabled }) => {
  const globalConfig = useGlobalConfig();
  const characterData = globalConfig.get(userId);
  const Sprite = getSprite(characterData.characterType);

  const [x, y, characterState] = useCharacterMovement(
    userId,
    isSpriteMovementDisabled
  );

  return (
    <g key={userId} transform={`translate(${x}, ${y})`}>
      <UserChatBubble message={characterData.message} />
      <Sprite characterState={characterState} />
      <g id="user-name" transform="translate(0, 60)">
        <foreignObject x="-23" y="0" width="100" height="50">
          <Box display="grid" justifyContent="center">
            <Box backgroundColor="#00000080" padding="0 5px">
              <Text textColor="white" textAlign="center">
                {characterData.name}
              </Text>
            </Box>
          </Box>
        </foreignObject>
      </g>
    </g>
  );
};

function getSprite(characterType) {
  switch (characterType) {
    case "PANDA":
      return Panda;
    case "KATE":
      return Kate;
    case "NICK":
    default:
      return Nick;
  }
}

export default Character;
