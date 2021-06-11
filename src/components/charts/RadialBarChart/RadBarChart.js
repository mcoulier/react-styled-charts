import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Paragraph, ChartWrapper, Title } from "../LineChart/Styles";
import data from "../../../assets/data.json";

export const RadBarChart = () => {
  return (
    <ChartWrapper>
      <Title>Bar Chart Example</Title>
      <ResponsiveContainer width="70%" height={350}>
        <BarChart data={data} barSize={15}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#6038A8" />
          <Bar dataKey="uv" fill="#48A14C" />
        </BarChart>
      </ResponsiveContainer>
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
