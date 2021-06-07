import React from "react";
import { RadialBar, RadialBarChart, Legend, Tooltip } from "recharts";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: -15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: -8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: -2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknown",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

export const RadBarChart = () => {
  return (
    <>
      <RadialBarChart
        width={500}
        height={300}
        data={data}
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
      >
        <RadialBar minAngle={15} clockWise={true} dataKey="uv" />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="left"
        />
        <Tooltip />
      </RadialBarChart>
      <p>
        Ea short ribs short loin, commodo est pig voluptate ut filet mignon
        aliqua ball tip in ground round. Ribeye venison tri-tip enim nisi. Ball
        tip rump beef velit aliquip prosciutto turducken strip steak anim eu
        shankle shank ut nulla quis. Ut rump dolor labore proident chicken pig
        tongue. Pork chop buffalo excepteur, laboris frankfurter shoulder short
        ribs nisi tongue cupim ut esse.
      </p>
    </>
  );
};