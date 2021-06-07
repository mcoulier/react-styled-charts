import React from "react";
import { TwoLineChart } from "../../charts/LineChart/TwoLineChart";
import { RadBarChart } from "../../charts/RadialBarChart/RadBarChart";
import { ContentWrapper, MainWrapper } from "./Styles";

export const Content = () => {
  return (
    <MainWrapper>
      <ContentWrapper>
        <TwoLineChart />
        <RadBarChart />
      </ContentWrapper>
    </MainWrapper>
  );
};
