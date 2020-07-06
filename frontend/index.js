import { initializeBlock, Box, ViewportConstraint } from "@airtable/blocks/ui";
import React, { useState } from "react";

import Chat from "./components/SpriteChatWorld/components/Chat";
import SpriteChatWorld from "./components/SpriteChatWorld";
import LandingPage from "./components/LandingPage";
import StatusBar from "./components/SpriteChatWorld/components/StatusBar";
import useAuthentication from "./components/SpriteChatWorld/utils/useAuthentication";
import SignOutButton from "./components/SpriteChatWorld/components/SignOutButton";

function SpriteChatApp() {
  const [isAuthenticated, setAuthentication, hasPermission] = useAuthentication(
    false
  );

  if (!hasPermission) {
    return (
      <Box>
        You do not have permission to use Block. Please contact your
        Administrator.
      </Box>
    );
  }

  return (
    <ViewportConstraint minSize={{ width: 500 }}>
      <Box id="sprite-chat-app" height="100%" width="100%">
        {isAuthenticated ? (
          <MainContent setAuthentication={setAuthentication} />
        ) : (
          <LandingPage setAuthentication={setAuthentication} />
        )}
      </Box>
    </ViewportConstraint>
  );
}

function MainContent({ setAuthentication }) {
  const [isSpriteMovementDisabled, setIsSpriteMovementDisabled] = useState(
    false
  );

  return (
    <Box height="100vh" width="100vw" position="absolute" top="0" left="0">
      <SpriteChatWorld isSpriteMovementDisabled={isSpriteMovementDisabled} />
      <Chat
        isSpriteMovementDisabled={isSpriteMovementDisabled}
        setIsSpriteMovementDisabled={setIsSpriteMovementDisabled}
      />
      <StatusBar />
      <SignOutButton setAuthentication={setAuthentication} />
    </Box>
  );
}

initializeBlock(() => <SpriteChatApp />);
