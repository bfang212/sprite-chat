import React from "react";
import { Box, Text } from "@airtable/blocks/ui";
import { loadCSSFromString } from "@airtable/blocks/ui";

import Nick from "../../SpriteChatWorld/components/sprites/Nick";
import Kate from "../../SpriteChatWorld/components/sprites/Kate";
import Panda from "../../SpriteChatWorld/components/sprites/Panda";

loadCSSFromString(`
  .character-circle:hover {
      background-color: white;
      cursor: pointer;
  }
`);

function Character({ option, selected, setFigure }) {
  const isOnFocus = option.type === selected;

  let Character;

  switch (option.type) {
    case "NICK":
      Character = Nick;
      break;
    case "KATE":
      Character = Kate;
      break;
    case "PANDA":
      Character = Panda;
      break;
    default:
      break;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      onClick={() => setFigure(option.type)}
    >
      <Box
        className="character-circle"
        backgroundColor={isOnFocus ? "white" : "transparent"}
        border="1px solid white"
        borderRadius="50%"
        padding="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        onClick={() => setFigure(option.type)}
      >
        <Character characterState="STAND_DOWN" />
      </Box>
      <Text textColor="white" marginTop="10px">
        {option.label}
      </Text>
    </Box>
  );
}

export default Character;
