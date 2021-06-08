import React from "react";
import { TwoLineChart } from "../../charts/LineChart/TwoLineChart";
import { RadBarChart } from "../../charts/RadialBarChart/RadBarChart";
import { ContentWrapper } from "./Styles";

export const Content = () => {
  return (
    <ContentWrapper>
      <TwoLineChart />
      <RadBarChart />
    </ContentWrapper>
  );
};
