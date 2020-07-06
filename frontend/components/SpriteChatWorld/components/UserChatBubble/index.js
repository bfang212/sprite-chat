import React, { useState, useEffect } from "react";
import { loadCSSFromString } from "@airtable/blocks/ui";

const CHAT_BUBBLE_HEIGHT = 375;

loadCSSFromString(`
.speech-bubble {
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 6px;
  position: absolute;
  margin-bottom: 10px;
  min-width: 50px;
}
.speech-bubble .arrow {
  border-style: solid;
  position: absolute;
}

.bottom {
  border-color: black transparent transparent transparent;
  border-width: 8px 8px 0px 8px;
  bottom: -8px;
  left: 18px;
}

.bottom:after {
  border-color: white transparent transparent transparent;
  border-style: solid;
  border-width: 7px 7px 0px 7px;
  bottom: 1px;
  content: "";
  position: absolute;
  left: -7px;
}
`);

const UserChatBubble = ({ message }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000);
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 4000);

    if (message.message) {
      if (currentTime - message.timestamp <= 5) {
        setIsActive(true);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  }, [message]);

  return isActive ? (
    <g
      id="user-chat-bubble"
      transform={`translate(0, -${35 + CHAT_BUBBLE_HEIGHT})`}
      max="50px"
    >
      <foreignObject x="0" y="0" width="150" height="400">
        <div
          id="user-chat-bubble-text"
          style={{
            backgroundColor: "transparent",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "10px",
          }}
        >
          <div className="speech-bubble">
            <p
              style={{ margin: 0, wordBreak: "break-word" }}
              xmlns="http://www.w3.org/1999/xhtml"
            >
              {message.message}
            </p>
            <div className="arrow bottom right"></div>
          </div>
        </div>
      </foreignObject>
    </g>
  ) : null;
};

export default UserChatBubble;
