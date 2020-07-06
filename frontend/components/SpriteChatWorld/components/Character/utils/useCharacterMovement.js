import { useEffect, useState } from "react";
import * as d3 from "d3";
import { useGlobalConfig, useSession } from "@airtable/blocks/ui";
import useInterval from "../../../utils/useInterval";

const MOVEMENT_SPACE = 8;

function useCharacterMovement(userId, isSpriteMovementDisabled) {
  const globalConfig = useGlobalConfig();
  const {
    currentUser: { id: localUserId },
  } = useSession();
  const charData = globalConfig.get(userId);

  const [[x, y], setCharCoords] = useState([charData.x, charData.y]);
  const [characterState, setCharacterState] = useState(charData.characterState);

  useInterval(() => {
    switch (characterState) {
      case "WALK_UP":
        setCharCoords([x, y - MOVEMENT_SPACE]);
        break;

      case "WALK_DOWN":
        setCharCoords([x, y + MOVEMENT_SPACE]);
        break;

      case "WALK_LEFT":
        setCharCoords([x - MOVEMENT_SPACE, y]);
        break;

      case "WALK_RIGHT":
        setCharCoords([x + MOVEMENT_SPACE, y]);
        break;

      default:
        return;
    }
  }, 200);

  useEffect(() => {
    if (userId !== localUserId) {
      switch (charData.characterState) {
        case "WALK_UP":
          setCharacterState("WALK_UP");
          break;
        case "STAND_UP":
          setCharacterState("STAND_UP");
          break;

        case "WALK_DOWN":
          setCharacterState("WALK_DOWN");
          break;
        case "STAND_DOWN":
          setCharacterState("STAND_DOWN");
          break;

        case "WALK_RIGHT":
          setCharacterState("WALK_RIGHT");
          break;

        case "STAND_RIGHT":
          setCharacterState("STAND_RIGHT");
          break;

        case "WALK_LEFT":
          setCharacterState("WALK_LEFT");
          break;

        case "STAND_LEFT":
          setCharacterState("STAND_LEFT");
          break;

        default:
          break;
      }
    }
  }, [charData]);

  useEffect(() => {
    const spriteChatApp = d3.select("body");

    if (localUserId === userId && !isSpriteMovementDisabled) {
      spriteChatApp.on("keydown", () => {
        const updatedUserData = globalConfig.get(localUserId);
        const key = d3.event.key;

        switch (key) {
          case "ArrowUp":
          case "w":
            if (updatedUserData.characterState !== "WALK_UP") {
              globalConfig.setAsync(localUserId, {
                ...updatedUserData,
                characterState: "WALK_UP",
                x,
                y,
              });
              setCharacterState("WALK_UP");
            }

            return;

          case "ArrowDown":
          case "s":
            if (updatedUserData.characterState !== "WALK_DOWN") {
              globalConfig.setAsync(localUserId, {
                ...updatedUserData,
                characterState: "WALK_DOWN",
                x,
                y,
              });
              setCharacterState("WALK_DOWN");
            }
            return;

          case "ArrowRight":
          case "d":
            if (updatedUserData.characterState !== "WALK_RIGHT") {
              globalConfig.setAsync(localUserId, {
                ...updatedUserData,
                characterState: "WALK_RIGHT",
                x,
                y,
              });
              setCharacterState("WALK_RIGHT");
            }

            return;

          case "ArrowLeft":
          case "a":
            if (updatedUserData.characterState !== "WALK_LEFT") {
              globalConfig.setAsync(localUserId, {
                ...updatedUserData,
                characterState: "WALK_LEFT",
                x,
                y,
              });
              setCharacterState("WALK_LEFT");
            }

            return;

          default:
            return;
        }
      });

      spriteChatApp.on("keyup", () => {
        const updatedUserData = globalConfig.get(localUserId);
        const key = d3.event.key;

        switch (key) {
          case "ArrowUp":
          case "w":
            globalConfig.setAsync(localUserId, {
              ...updatedUserData,
              characterState: "STAND_UP",
              x,
              y,
            });
            setCharacterState("STAND_UP");

            return;

          case "ArrowDown":
          case "s":
            globalConfig.setAsync(localUserId, {
              ...updatedUserData,
              characterState: "STAND_DOWN",
              x,
              y,
            });
            setCharacterState("STAND_DOWN");

            return;

          case "ArrowRight":
          case "d":
            globalConfig.setAsync(localUserId, {
              ...updatedUserData,
              characterState: "STAND_RIGHT",
              x,
              y,
            });
            setCharacterState("STAND_RIGHT");

            return;

          case "ArrowLeft":
          case "a":
            globalConfig.setAsync(localUserId, {
              ...updatedUserData,
              characterState: "STAND_LEFT",
              x,
              y,
            });
            setCharacterState("STAND_LEFT");

            return;

          default:
            return;
        }
      });
    }
    if (isSpriteMovementDisabled) {
      spriteChatApp.on("keydown", null);
      spriteChatApp.on("keyup", null);
    }
  }, [x, y, isSpriteMovementDisabled, globalConfig, userId, localUserId]);

  return [x, y, characterState];
}

export default useCharacterMovement;
