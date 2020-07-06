import React from "react";
import { useViewport, useGlobalConfig } from "@airtable/blocks/ui";
import useZoom from "./utils/useZoom";
import { session } from "@airtable/blocks";
import Character from "./components/Character";

function SpriteChatWorld({ isSpriteMovementDisabled }) {
  const {
    size: { height, width },
  } = useViewport();
  const globalConfig = useGlobalConfig();
  const {
    currentUser: { id: localUserId },
  } = session;
  const activeUsers = globalConfig.get("activeUsers");
  const localUserData = globalConfig.get(localUserId);
  useZoom(localUserData.x, localUserData.y, height, width);

  return (
    activeUsers &&
    activeUsers.length > 0 && (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        id="sprite-chat-world"
        onContextMenu={(e) => e.preventDefault()}
        style={{
          backgroundColor: "black",
        }}
      >
        <g id="sprite-chat-world-group">
          <image
            href="https://res.cloudinary.com/djojsisyp/image/upload/v1593881926/Airtable%20Sprite%20Chat/Indoors_wnhnpy.png"
            height={1440}
            width={2560}
          />
          {activeUsers.map((userId) => (
            <Character
              key={userId}
              userId={userId}
              isSpriteMovementDisabled={isSpriteMovementDisabled}
            />
          ))}
        </g>
      </svg>
    )
  );
}

export default SpriteChatWorld;
