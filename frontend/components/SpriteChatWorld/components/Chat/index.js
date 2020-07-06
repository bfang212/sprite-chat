import React, { useState } from "react";
import { session } from "@airtable/blocks";
import {
  Box,
  useBase,
  useRecords,
  Input,
  useGlobalConfig,
  Icon,
  colors,
  colorUtils,
  expandRecord,
} from "@airtable/blocks/ui";

import ChatMessage from "./components/ChatMessage";

const Fields = {
  NAME: "UserName",
  MESSAGE: "Message",
  TIMESTAMP: "TimeStamp",
};

const TABLE_NAME = "Chat Log";

function Chat({ setIsSpriteMovementDisabled }) {
  const base = useBase();
  const table = base.getTableByNameIfExists(TABLE_NAME);
  const records = useRecords(table);
  const {
    currentUser: { id: localUserId },
  } = session;
  const [MESSAGE, setMessage] = useState("");
  const globalConfig = useGlobalConfig();
  const localUserData = globalConfig.get(localUserId);

  return (
    <Box
      border="default"
      position="absolute"
      bottom="0"
      left="0"
      width="240px"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box
        width="100%"
        height="100%"
        position="absolute"
        left="0"
        backgroundColor="black"
        opacity="0.7"
        zIndex="1"
      />
      <Box
        height="calc(100% - 48px)"
        overflowY="scroll"
        zIndex="2"
        display="flex"
        flexDirection="column-reverse"
        padding="0 16px"
      >
        {records.reverse().map((record) => {
          const userName = record.getCellValueAsString(Fields.NAME);
          const userMessage = record.getCellValueAsString(Fields.MESSAGE);
          const recordTimestamp = record.getCellValueAsString(Fields.TIMESTAMP);
          const handleRecordClick = () => expandRecord(record);
          return (
            <ChatMessage
              key={`${userName}-${userMessage}-${recordTimestamp}`}
              userName={userName}
              userMessage={userMessage}
              handleRecordClick={handleRecordClick}
            />
          );
        })}
      </Box>
      <div
        onKeyPress={handleKeyPress}
        onFocus={() => {
          setIsSpriteMovementDisabled(true);
        }}
        onBlur={() => {
          setIsSpriteMovementDisabled(false);
        }}
        style={{
          zIndex: "2",
          margin: "16px auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: `${colorUtils.getHexForColor(colors.GRAY_LIGHT_2)}`,
        }}
      >
        <Input
          value={MESSAGE}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Type something!"
          width="200px"
        />
        <Icon
          onClick={handleClick}
          name="play"
          size={16}
          fillColor={
            MESSAGE ? colorUtils.getHexForColor(colors.BLUE_BRIGHT) : "inherit"
          }
          style={{ cursor: "pointer" }}
        />
      </div>
    </Box>
  );

  function handleClick() {
    if (MESSAGE) {
      table.createRecordAsync({
        [Fields.MESSAGE]: MESSAGE,
      });
  
      globalConfig.setAsync(localUserId, {
        ...localUserData,
        message: {
          message: MESSAGE,
          timestamp: Math.floor(Date.now() / 1000),
        },
      });
      setMessage("");
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter" && MESSAGE) {
      table.createRecordAsync({
        [Fields.MESSAGE]: MESSAGE,
      });

      globalConfig.setAsync(localUserId, {
        ...localUserData,
        message: {
          message: MESSAGE,
          timestamp: Math.floor(Date.now() / 1000),
        },
      });

      setMessage("");
    }
  }
}

export default Chat;
