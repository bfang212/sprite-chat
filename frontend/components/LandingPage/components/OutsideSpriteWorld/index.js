import React, { useEffect, useState } from "react";
import { useViewport } from "@airtable/blocks/ui";
import * as d3 from "d3";

import Kate from "../../../SpriteChatWorld/components/sprites/Kate";
import Nick from "../../../SpriteChatWorld/components/sprites/Nick";
import Panda from "../../../SpriteChatWorld/components/sprites/Panda";

import useInterval from "../../../SpriteChatWorld/utils/useInterval";

const INITIAL_X = 1270;
const INITIAL_Y = 600;

const OutsideSpriteWorld = ({
  handleSignIn,
  isChooseYourCharacterScreenOn,
  chosenCharacterType,
}) => {
  const {
    size: { height, width },
  } = useViewport();
  const [[x, y], setCoords] = useState([INITIAL_X, INITIAL_Y]);

  useZoom(x, y, height, width);

  useInterval(() => {
    if (!isChooseYourCharacterScreenOn) {
      setCoords([x, y - 5]);
    }
  }, 100);

  useEffect(() => {
    if (!isChooseYourCharacterScreenOn && y === 320) {
      handleSignIn();
    }
  }, [x, y, isChooseYourCharacterScreenOn]);

  let Character;

  switch (chosenCharacterType) {
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
      Character = null;
      break;
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      id="outside-sprite-world"
      onContextMenu={(e) => e.preventDefault()}
      style={{
        backgroundColor: "black",
      }}
    >
      <g id="outside-sprite-world-group">
        <image
          href="https://res.cloudinary.com/djojsisyp/image/upload/v1593881921/Airtable%20Sprite%20Chat/Start_Menu_u5mk2t.png"
          height={1440}
          width={2560}
        />
        {!isChooseYourCharacterScreenOn && (
          <g transform={`translate(${x}, ${y})`}>
            <Character characterState={"WALK_UP"} />
          </g>
        )}
      </g>
    </svg>
  );
};

function useZoom(x, y, height, width) {
  useEffect(() => {
    const svg = d3.select("#outside-sprite-world");
    const g = d3.select("#outside-sprite-world-group");

    const zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", zoomed);

    zoom.translateTo(svg, INITIAL_X, INITIAL_Y);

    svg.call(zoom);

    function zoomed() {
      const { transform } = d3.event;

      g.attr("transform", transform);
    }

    return () => {
      zoom.on("zoom", null);
    };
  }, [height, width]);
}

export default OutsideSpriteWorld;
