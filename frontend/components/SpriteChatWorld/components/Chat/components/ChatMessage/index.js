import React from "react";
import { Text, Box, Loader } from "@airtable/blocks/ui";
import getIconColor from "../../../../utils/getIconColor";

function ChatMessage({ userName, userMessage, handleRecordClick }) {
  if (!userName) {
    return (
      <Box display="flex" width="100%" justifyContent="center" marginTop="24px">
        <Loader scale={0.3} />
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      marginTop="24px"
      onClick={handleRecordClick}
      style={{ cursor: "pointer" }}
    >
      <Box
        marginRight="8px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        width="32px"
        height="32px"
        backgroundColor={getIconColor(userName)}
      >
        {userName && <Text textColor="white">{userName[0].toUpperCase()}</Text>}
      </Box>
      <Box maxWidth="160px" display="flex" flexDirection="column">
        <p
          style={{
            fontSize: "16px",
            color: "white",
            wordBreak: "break-all",
            margin: "0 0 8px 0",
            lineHeight: "19px",
          }}
        >
          {userName}
        </p>
        <p
          style={{
            fontSize: "14px",
            color: "white",
            wordBreak: "break-all",
            margin: "0",
            lineHeight: "17px",
          }}
        >
          {userMessage}
        </p>
      </Box>
    </Box>
  );
}

export default ChatMessage;
