import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import { Paragraph, ChartWrapper } from "../LineChart/Styles";

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

export const RadBarChart = () => {
  return (
    <ChartWrapper>
      <BarChart width={500} height={300} data={data} barSize={10}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="left"
        />
        <Tooltip />
        <Bar dataKey="pv" fill="#673ab7" />
        <Bar dataKey="uv" fill="#8bc34a" />
      </BarChart>
      <Paragraph>
        Ea short ribs short loin, commodo est pig voluptate ut filet mignon
        aliqua ball tip in ground round. Ribeye venison tri-tip enim nisi. Ball
        tip rump beef velit aliquip prosciutto turducken strip steak anim eu
        shankle shank ut nulla quis. Ut rump dolor labore proident chicken pig
        tongue. Pork chop buffalo excepteur, laboris frankfurter shoulder short
        ribs nisi tongue cupim ut esse.
      </Paragraph>
    </ChartWrapper>
  );
};
