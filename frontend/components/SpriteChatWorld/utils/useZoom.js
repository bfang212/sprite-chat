import React, { useEffect } from "react";
import * as d3 from "d3";

function useZoom(x, y, height, width) {
  useEffect(() => {
    const zoom = d3.zoom().scaleExtent([1, 8]).on("zoom", zoomed);

    const svg = d3.select("#sprite-chat-world");
    const g = d3.select("#sprite-chat-world-group");

    zoom.translateTo(svg, x, y + 200);

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

export default useZoom;
