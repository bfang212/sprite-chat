import React, { useState } from "react";
import {
  Box,
  Text,
  useGlobalConfig,
  Icon,
  Tooltip,
  colors,
  Heading,
  useSession,
} from "@airtable/blocks/ui";
import getIconColor from "../../utils/getIconColor";
import useUserMenu from "../../utils/useUserMenu";

function StatusBar() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "numeric",
  });
  const date = now.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const globalConfig = useGlobalConfig();
  const {
    currentUser: { id, name },
  } = useSession();
  const activeUserNames = globalConfig.get("activeUserNames");
  const activeUsers = globalConfig.get("activeUsers");
  const [ref, isUserMenuOpen, setUserMenu] = useUserMenu(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const userCount = activeUserNames.length;
  const sortedUserNames = unshiftLocalUserName(
    activeUsers,
    activeUserNames,
    id,
    name
  );

  return (
    <Box position="absolute" top="0px" right="0px" margin="8px">
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Box position="relative">
          <Icon
            name="help"
            size={16}
            fillColor="white"
            marginRight="5px"
            onMouseEnter={() => setIsInstructionsOpen(true)}
            onMouseLeave={() => setIsInstructionsOpen(false)}
          />
          <Box
            display={isInstructionsOpen ? "initial" : "none"}
            position="absolute"
            backgroundColor="white"
            top="22px"
            right="5px"
            borderRadius="4px"
            padding="16px 32px"
            zIndex="100"
          >
            <Heading>Instructions</Heading>
            <Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                marginTop="16px"
                marginBottom="16px"
              >
                <Text style={{ whiteSpace: "nowrap" }}>Move Left</Text>
                <svg
                  width="76"
                  height="24"
                  viewBox="0 0 76 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0001 17.3333L12.9401 16.3933L9.22008 12.6666L17.3334 12.6666L17.3334 11.3333L9.22008 11.3333L12.9467 7.61325L12.0001 6.66659L6.66675 11.9999L12.0001 17.3333Z"
                    fill="#999999"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="1.5"
                    stroke="#999999"
                  />
                  <path
                    d="M35.8398 16.6367C37.8018 16.6367 39.1279 15.2148 39.1279 12.9453V12.9316C39.1279 10.6621 37.7949 9.25391 35.833 9.25391C33.8711 9.25391 32.5449 10.6689 32.5449 12.9316V12.9453C32.5449 15.208 33.8643 16.6367 35.8398 16.6367ZM35.8467 15.584C34.5889 15.584 33.7617 14.6201 33.7617 12.9453V12.9316C33.7617 11.2705 34.5957 10.3066 35.833 10.3066C37.0908 10.3066 37.9111 11.2637 37.9111 12.9316V12.9453C37.9111 14.6133 37.0977 15.584 35.8467 15.584ZM40.3311 16.5H41.5205V12.0566C41.5205 11.0518 42.1221 10.3887 43.0449 10.3887C43.332 10.3887 43.585 10.4229 43.6807 10.457V9.30176C43.585 9.28809 43.4072 9.25391 43.2021 9.25391C42.3682 9.25391 41.7119 9.75293 41.4795 10.5391H41.4521V9.39062H40.3311V16.5Z"
                    fill="#999999"
                  />
                  <g clipPath="url(#moveLeftInstructions)">
                    <path
                      d="M60.2549 17H61.5469L62.5381 14.1768H66.4619L67.4531 17H68.7451L65.1084 7.13574H63.8916L60.2549 17ZM64.4863 8.6123H64.5137L66.0996 13.1309H62.9004L64.4863 8.6123Z"
                      fill="#999999"
                    />
                  </g>
                  <rect
                    x="52.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="1.5"
                    stroke="#999999"
                  />
                  <defs>
                    <clipPath id="moveLeftInstructions">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(56 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                marginBottom="16px"
              >
                <Text style={{ whiteSpace: "nowrap" }}>Move Right</Text>
                <svg
                  width="76"
                  height="24"
                  viewBox="0 0 76 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    marginLeft: "35px",
                  }}
                >
                  <path
                    d="M11.9999 6.66675L11.0599 7.60675L14.7799 11.3334L6.66659 11.3334L6.66659 12.6667L14.7799 12.6667L11.0533 16.3867L11.9999 17.3334L17.3333 12.0001L11.9999 6.66675Z"
                    fill="#999999"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="1.5"
                    stroke="#999999"
                  />
                  <path
                    d="M35.8398 16.6367C37.8018 16.6367 39.1279 15.2148 39.1279 12.9453V12.9316C39.1279 10.6621 37.7949 9.25391 35.833 9.25391C33.8711 9.25391 32.5449 10.6689 32.5449 12.9316V12.9453C32.5449 15.208 33.8643 16.6367 35.8398 16.6367ZM35.8467 15.584C34.5889 15.584 33.7617 14.6201 33.7617 12.9453V12.9316C33.7617 11.2705 34.5957 10.3066 35.833 10.3066C37.0908 10.3066 37.9111 11.2637 37.9111 12.9316V12.9453C37.9111 14.6133 37.0977 15.584 35.8467 15.584ZM40.3311 16.5H41.5205V12.0566C41.5205 11.0518 42.1221 10.3887 43.0449 10.3887C43.332 10.3887 43.585 10.4229 43.6807 10.457V9.30176C43.585 9.28809 43.4072 9.25391 43.2021 9.25391C42.3682 9.25391 41.7119 9.75293 41.4795 10.5391H41.4521V9.39062H40.3311V16.5Z"
                    fill="#999999"
                  />
                  <g clipPath="url(#RightInstructions)">
                    <path
                      d="M60.2061 17H63.5215C66.4541 17 68.1768 15.1748 68.1768 12.0645V12.0508C68.1768 8.9541 66.4404 7.13574 63.5215 7.13574H60.2061V17ZM61.4365 15.8926V8.24316H63.4395C65.6748 8.24316 66.9189 9.60352 66.9189 12.0645V12.0781C66.9189 14.5254 65.6748 15.8926 63.4395 15.8926H61.4365Z"
                      fill="#999999"
                    />
                  </g>
                  <rect
                    x="52.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="1.5"
                    stroke="#999999"
                  />
                  <defs>
                    <clipPath id="RightInstructions">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(56 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                marginBottom="16px"
              >
                <Text style={{ whiteSpace: "nowrap" }}>Move Up</Text>
                <svg
                  width="76"
                  height="24"
                  viewBox="0 0 76 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66675 12L7.60675 12.94L11.3334 9.21996V17.3333H12.6667V9.21996L16.3867 12.9466L17.3334 12L12.0001 6.66663L6.66675 12Z"
                    fill="#999999"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="1.5"
                    stroke="#999999"
                  />
                  <path
                    d="M35.8398 16.6367C37.8018 16.6367 39.1279 15.2148 39.1279 12.9453V12.9316C39.1279 10.6621 37.7949 9.25391 35.833 9.25391C33.8711 9.25391 32.5449 10.6689 32.5449 12.9316V12.9453C32.5449 15.208 33.8643 16.6367 35.8398 16.6367ZM35.8467 15.584C34.5889 15.584 33.7617 14.6201 33.7617 12.9453V12.9316C33.7617 11.2705 34.5957 10.3066 35.833 10.3066C37.0908 10.3066 37.9111 11.2637 37.9111 12.9316V12.9453C37.9111 14.6133 37.0977 15.584 35.8467 15.584ZM40.3311 16.5H41.5205V12.0566C41.5205 11.0518 42.1221 10.3887 43.0449 10.3887C43.332 10.3887 43.585 10.4229 43.6807 10.457V9.30176C43.585 9.28809 43.4072 9.25391 43.2021 9.25391C42.3682 9.25391 41.7119 9.75293 41.4795 10.5391H41.4521V9.39062H40.3311V16.5Z"
                    fill="#999999"
                  />
                  <g clipPath="url(#upInstructions)">
                    <path
                      d="M61.0273 17H62.1895L64.4863 9.09766H64.5137L66.8105 17H67.9727L70.6592 7.13574H69.374L67.3848 15.2363H67.3574L65.1221 7.13574H63.8779L61.6426 15.2363H61.6152L59.626 7.13574H58.3408L61.0273 17Z"
                      fill="#999999"
                    />
                  </g>
                  <rect
                    x="52.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="1.5"
                    stroke="#999999"
                  />
                  <defs>
                    <clipPath id="upInstructions">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(56 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Text style={{ whiteSpace: "nowrap" }}>Move Down</Text>
                <svg
                  width="76"
                  height="24"
                  viewBox="0 0 76 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.3335 11.9999L16.3935 11.0599L12.6668 14.7799L12.6668 6.66659L11.3335 6.66659L11.3335 14.7799L7.6135 11.0533L6.66683 11.9999L12.0002 17.3333L17.3335 11.9999Z"
                    fill="#999999"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="1.5"
                    stroke="#999999"
                  />
                  <path
                    d="M35.8398 16.6367C37.8018 16.6367 39.1279 15.2148 39.1279 12.9453V12.9316C39.1279 10.6621 37.7949 9.25391 35.833 9.25391C33.8711 9.25391 32.5449 10.6689 32.5449 12.9316V12.9453C32.5449 15.208 33.8643 16.6367 35.8398 16.6367ZM35.8467 15.584C34.5889 15.584 33.7617 14.6201 33.7617 12.9453V12.9316C33.7617 11.2705 34.5957 10.3066 35.833 10.3066C37.0908 10.3066 37.9111 11.2637 37.9111 12.9316V12.9453C37.9111 14.6133 37.0977 15.584 35.8467 15.584ZM40.3311 16.5H41.5205V12.0566C41.5205 11.0518 42.1221 10.3887 43.0449 10.3887C43.332 10.3887 43.585 10.4229 43.6807 10.457V9.30176C43.585 9.28809 43.4072 9.25391 43.2021 9.25391C42.3682 9.25391 41.7119 9.75293 41.4795 10.5391H41.4521V9.39062H40.3311V16.5Z"
                    fill="#999999"
                  />
                  <g clipPath="url(#downInstructions)">
                    <path
                      d="M64.5273 17.1641C66.7832 17.1641 68.1709 16.0566 68.1709 14.3066V14.2998C68.1709 12.7959 67.3232 11.9756 65.2998 11.5312L64.2061 11.292C62.9209 11.0117 62.3262 10.5059 62.3262 9.69922V9.69238C62.3262 8.74219 63.1875 8.11328 64.5068 8.10645C65.7578 8.10645 66.5986 8.70117 66.749 9.70605L66.7627 9.80176H67.9932L67.9863 9.69922C67.877 8.08594 66.4688 6.97168 64.541 6.97168C62.5107 6.97168 61.0752 8.10645 61.0684 9.72656V9.7334C61.0684 11.1758 61.9707 12.0439 63.8984 12.4678L64.9922 12.707C66.3457 13.0078 66.9131 13.4932 66.9131 14.3613V14.3682C66.9131 15.3867 66.0176 16.0293 64.5957 16.0293C63.167 16.0293 62.21 15.4209 62.0664 14.4297L62.0527 14.334H60.8223L60.8291 14.4297C60.9521 16.1182 62.3945 17.1641 64.5273 17.1641Z"
                      fill="#999999"
                    />
                  </g>
                  <rect
                    x="52.5"
                    y="0.5"
                    width="23"
                    height="23"
                    rx="1.5"
                    stroke="#999999"
                  />
                  <defs>
                    <clipPath id="downInstructions">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(56 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
        <Text textColor="white">{`${time} ${date}`}</Text>
      </Box>
      <Box
        marginBottom="8px"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-end"
        marginTop="16px"
      >
        {sortedUserNames.slice(0, 5).map((userName) => (
          <Tooltip
            key={userName}
            content={userName}
            placementX={Tooltip.placements.CENTER}
            placementY={Tooltip.placements.BOTTOM}
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
              <Text textColor="white">{userName[0].toUpperCase()}</Text>
            </Box>
          </Tooltip>
        ))}
        {userCount > 5 && (
          <Icon
            name="overflow"
            size={16}
            fillColor="white"
            style={{ cursor: "pointer" }}
            onClick={() => setUserMenu(true)}
          />
        )}
      </Box>
      {isUserMenuOpen && userCount > 5 && (
        <Box
          ref={ref}
          width="211px"
          marginLeft="auto"
          backgroundColor="white"
          border="thick"
        >
          <Box padding="16px 24px">
            <Text
              display="inline-block"
              fontWeight="600"
              fontSize="16px"
              textAlign="center"
              textColor={colors.GRAY}
            >
              Chat Room Members
            </Text>
            {sortedUserNames.map((userName) => (
              <Box
                key={userName}
                display="flex"
                alignItems="center"
                marginTop="16px"
              >
                <Box
                  marginRight="8px"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="50%"
                  width="32px"
                  height="32px"
                  backgroundColor={getIconColor(userName)}
                >
                  <Text textColor="white">{userName[0].toUpperCase()}</Text>
                </Box>
                <p
                  style={{ margin: "0", fontSize: "14px", lineHeight: "17px" }}
                >
                  {userName}
                </p>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );

  function unshiftLocalUserName(activeUsers, activeUserNames, id, name) {
    const index = activeUsers.indexOf(id);
    const userNames = activeUserNames.slice();
    userNames.splice(index, 1);
    userNames.unshift(name);
    return userNames;
  }
}

export default StatusBar;
