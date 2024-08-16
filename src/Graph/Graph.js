import React, { useRef, useState, useEffect } from "react";
import {
  line,
  select,
  axisBottom,
  axisRight,
  scaleLinear,
  curveCardinal,
} from "d3";
import axios from "axios";
import Pie from "./Pie";

const Graph = () => {
  const svgRef = useRef();
  const [data, setData] = useState([0, 12, 60, 25, 50, 48, 75]);
  const [data1, setData1] = useState([]);
  const age = [];

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        "http://dummy.restapiexample.com/api/v1/employees"
      );
      // console.log(res);

      if (res) {
        setData1(res.data.data);
        console.log(data1);

        for (const i of data1) {
          age.push(parseInt(i.employee_age));
        }
      }
      console.log(age);
    };

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);
    const yScale = scaleLinear().domain([0, 75]).range([150, 0]);

    const xAxis = axisBottom(xScale)
      .ticks(data.length)
      .tickFormat((index) => index + 1);
    const yAxis = axisRight(yScale);

    const svg = select(svgRef.current);

    // svg.select(xAxis).call(".x-axis");

    svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);
    svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

    const newLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal);

    svg
      .selectAll(".line")
      .data([getData])
      .join("path")
      .attr("class", "line")
      .attr("d", (value) => newLine(value))
      .attr("stroke", "red")
      .attr("fill", "none");
  }, []);
  return (
    <div>
      <center>The Drawing on the Browser</center>
      <center>
        <svg
          ref={svgRef}
          style={{
            backgroundColor: "lightgray",
            overflow: "visible",
          }}
        >
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </center>
      <br />
      <br />
      <br />

      <center>Awesome</center>
      <br />
      <center>
        <Pie />
      </center>
    </div>
  );
};

export default Graph;
