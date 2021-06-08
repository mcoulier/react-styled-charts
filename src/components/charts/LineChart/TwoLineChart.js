import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { CirclePicker } from "react-color";
import { Button } from "../../../styles/Button";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const TwoLineChart = () => {
  const [xDataKey, setXDataKey] = useState("name");
  const [xColor, setXColor] = useState("#ff9800");
  const [yColor, setYColor] = useState("#2DDBFB");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currColor, setCurrColor] = useState("");

  const handleXAxis = (event) => {
    setXDataKey(event.target.value);
  };

  const handleShowPicker = (value) => {
    setCurrColor(value);
    setShowColorPicker(true);
  };

  const handleColor = (color) => {
    if (currColor === "x") {
      setXColor(color.hex);
      setShowColorPicker(false);
    } else {
      setYColor(color.hex);
      setShowColorPicker(false);
    }
  };

  return (
    <>
      <LineChart width={550} height={350} data={data}>
        <CartesianGrid strokeDasharray="4 4" />
        <Line />
        <XAxis dataKey={xDataKey} />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={30} />
        <Line type="monotone" dataKey="pv" stroke={xColor} />
        <Line type="monotone" dataKey="uv" stroke={yColor} />
      </LineChart>
      <Button onClick={() => handleShowPicker("x")}>X Axis Color</Button>
      <Button onClick={() => handleShowPicker("y")}>Y Axis Color</Button>
      {showColorPicker && (
        <CirclePicker
          color={currColor === "x" ? xColor : yColor}
          onChangeComplete={handleColor}
        />
      )}
      <select onChange={handleXAxis}>
        <option value="name">Name</option>
        <option value="amt">Amt</option>
      </select>
      <p>
        Podcasting operational change management inside of workflows to
        establish a framework. Taking seamless key performance indicators
        offline to maximise the long tail. Keeping your eye on the ball while
        performing a deep dive on the start-up mentality to derive convergence
        on cross-platform integration.
      </p>
    </>
  );
};
