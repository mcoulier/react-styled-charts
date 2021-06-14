import React from "react";
import { Header, Title, TopIcon } from "./Styles";
import chartIcon from "../../../assets/chartIcon.png";

export const HeaderNav = () => {
  return (
    <Header>
      <TopIcon src={chartIcon} alt="chart icon" height="50px" />
      <Title>React Charts</Title>
    </Header>
  );
};
