import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CirclePicker } from "react-color";
import { Button } from "../../../styles/Button";
import {
  ChartWrapper,
  Title,
  Paragraph,
  ToolsWrapper,
  ColorWrapper,
} from "./Styles";
import data from "../../../assets/data.json";
import diceIcon from "../../../assets/dice.png";

export const TwoLineChart = () => {
  const [xColor, setXColor] = useState("#ff9800");
  const [yColor, setYColor] = useState("#2DDBFB");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currColor, setCurrColor] = useState("");
  const [randomData, setRandomData] = useState(data);

  const randomizer = () => {
    const data = [];
    for (let i = 0; i < 7; i++) {
      data.push({
        name: `Year ${i}`,
        uv: Math.ceil(Math.random() * 5000),
        pv: Math.ceil(Math.random() * 10000),
      });
    }
    setRandomData(data);
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
    <ChartWrapper>
      <Title>Line Chart Example</Title>
      <ResponsiveContainer width="70%" height={350}>
        <LineChart data={randomData}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={30} />
          <Line type="monotone" dataKey="pv" stroke={xColor} />
          <Line type="monotone" dataKey="uv" stroke={yColor} />
        </LineChart>
      </ResponsiveContainer>
      <ToolsWrapper>
        <Button
          style={{ background: `${xColor}` }}
          onClick={() => handleShowPicker("x")}
        >
          Line 1 Color
        </Button>
        <Button
          style={{ background: `${yColor}` }}
          onClick={() => handleShowPicker("y")}
        >
          Line 2 Color
        </Button>
        {showColorPicker && (
          <ColorWrapper>
            <CirclePicker
              color={currColor === "x" ? xColor : yColor}
              onChangeComplete={handleColor}
            />
          </ColorWrapper>
        )}
        <Button onClick={randomizer}>
          <img height="30px" src={diceIcon} alt="dice icon" />
        </Button>
      </ToolsWrapper>
      <Paragraph>
        Podcasting operational change management inside of workflows to
        establish a framework. Taking seamless key performance indicators
        offline to maximise the long tail. Keeping your eye on the ball while
        performing a deep dive on the start-up mentality to derive convergence
        on cross-platform integration.
      </Paragraph>
    </ChartWrapper>
  );
};
