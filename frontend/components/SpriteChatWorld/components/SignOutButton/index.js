import React from "react";
import { useGlobalConfig, Button, useSession } from "@airtable/blocks/ui";

function SignOutButton({ setAuthentication }) {
  const globalConfig = useGlobalConfig();
  const activeUsers = globalConfig.get("activeUsers");
  const activeUserNames = globalConfig.get("activeUserNames");
  const {
    currentUser: { id },
  } = useSession();

  return (
    <Button
      marginBottom="8px"
      marginRight="8px"
      position="absolute"
      bottom="0"
      right="0"
      onClick={SignOut}
      color="white"
      icon="logout"
      variant="danger"
    >
      Sign Out
    </Button>
  );

  function SignOut() {
    const userIndex = activeUsers.indexOf(id);
    globalConfig.setAsync("activeUsers", [
      ...activeUsers.slice(0, userIndex),
      ...activeUsers.slice(userIndex + 1),
    ]);
    globalConfig.setAsync("activeUserNames", [
      ...activeUserNames.slice(0, userIndex),
      ...activeUserNames.slice(userIndex + 1),
    ]);

    globalConfig.setAsync(id, undefined);
    setAuthentication(false);
  }
}

export default SignOutButton;
