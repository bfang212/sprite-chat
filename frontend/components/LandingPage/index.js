import React, { useState } from "react";
import {
  Box,
  Button,
  Text,
  Heading,
  useGlobalConfig,
  useSession,
} from "@airtable/blocks/ui";
import Character from "./components/Character";
import OutsideSpriteWorld from "./components/OutsideSpriteWorld";

const spriteOptions = [
  {
    type: "KATE",
    label: "Kate",
  },
  {
    type: "NICK",
    label: "Nick",
  },
  {
    type: "PANDA",
    label: "Panda",
  },
];

function LandingPage({ setAuthentication }) {
  const [chosenCharacterType, setChosenCharacterType] = useState(
    spriteOptions[0].type
  );
  const [
    isChooseYourCharacterScreenOn,
    setIsChooseYourCharacterScreenOn,
  ] = useState(true);
  const globalConfig = useGlobalConfig();
  const {
    currentUser,
    currentUser: { id: localUserId, name: currentUserName },
  } = useSession();
  const activeUsers = globalConfig.get("activeUsers");
  const activeUserNames = globalConfig.get("activeUserNames");

  return (
    <Box>
      <OutsideSpriteWorld
        chosenCharacterType={chosenCharacterType}
        handleSignIn={handleSignIn}
        isChooseYourCharacterScreenOn={isChooseYourCharacterScreenOn}
      />
      {isChooseYourCharacterScreenOn && (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          backgroundColor="#00000080"
        >
          <Heading margin="48px auto 24px" textColor="white">
            Choose Your Avatar!
          </Heading>

          <Text textColor="white" marginBottom="24px">
            Pick one of the three avatars to control.
          </Text>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            margin="0 auto 40px"
            width="400px"
          >
            {spriteOptions.map((option) => (
              <Character
                setFigure={setChosenCharacterType}
                selected={chosenCharacterType}
                key={option.type}
                option={option}
              />
            ))}
          </Box>
          <Button onClick={handleClick} variant="primary">
            Okay
          </Button>
        </Box>
      )}
    </Box>
  );

  function handleClick() {
    setIsChooseYourCharacterScreenOn(false);
  }

  function handleSignIn() {
    const currentUserData = {
      ...currentUser,
      lastSignIn: Date.now(),
      characterType: chosenCharacterType,
      characterState: "STAND_DOWN",
      x: 1300,
      y: 50,
      message: {
        message: null,
        timestamp: null,
      },
    };
    globalConfig.setAsync("activeUsers", [...activeUsers, localUserId]);
    globalConfig.setAsync("activeUserNames", [
      ...activeUserNames,
      currentUserName,
    ]);
    globalConfig.setAsync(localUserId, currentUserData);
    setAuthentication(true);
  }
}

export default LandingPage;
