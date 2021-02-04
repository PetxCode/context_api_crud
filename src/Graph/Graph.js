import { Button } from "antd";
import React, { useRef, useState, useEffect } from "react";
import { select, line, curveCardinal } from "d3";
const Graph = () => {
  const svgRef = useRef();
  const [data, setData] = useState([0, 67, 55, 90]);

  useEffect(() => {
    const svg = select(svgRef.current);

    // svg
    //   .selectAll("circle")
    //   .data(data)
    //   .join(
    //     (enter) => enter.append("circle"),
    //     (update) => update.attr("class", "updated"),
    //     (exit) => exit.remove()
    //   )
    //   .attr("r", (value) => value)
    //   .attr("cx", (value) => value)
    //   .attr("cy", (value) => value)
    //   .attr("fill", "none")
    //   .attr("stroke", "red");

    // const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => index * 50)
      .y((value) => 200 - value)
      .curve(curveCardinal);
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", (value) => myLine(value))
      .attr("stroke", "blue")
      .attr("fill", "none");
  }, [data]);
  return (
    <div>
      <center>This is it..!</center>
      <center>
        <svg
          ref={svgRef}
          style={{
            backgroundColor: "lightgray",
            width: "720px",
            height: "200px",
          }}
        ></svg>

        <br />
        <Button>Reset</Button>
        <Button>Filter</Button>
      </center>
    </div>
  );
};

export default Graph;
