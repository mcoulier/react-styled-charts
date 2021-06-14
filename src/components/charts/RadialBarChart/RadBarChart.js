import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Paragraph, ChartWrapper, Title } from "../LineChart/Styles";

export const RadBarChart = () => {
  const [data, setData] = useState([]);

  const formatData = (data) => {
    return Object.entries(data).map((entries) => {
      const [date, price] = entries;
      return {
        date,
        high: price["2b. high (USD)"],
        low: price["3b. low (USD)"],
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=CNY&apikey=${process.env.REACT_APP_API_KEY}`
      );
      response = await response.json();
      setData(formatData(response["Time Series (Digital Currency Monthly)"]));
    };
    fetchData();
  }, []);

  return (
    <ChartWrapper>
      <Title>Bar Chart Example</Title>
      <ResponsiveContainer width="70%" height={350}>
        <AreaChart data={data.slice(0, 6)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area dataKey="high" fill="#6038A8" />
          <Area dataKey="low" fill="#48A14C" />
        </AreaChart>
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
