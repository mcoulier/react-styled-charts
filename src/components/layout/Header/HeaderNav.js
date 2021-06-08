import React from "react";
import { Header, Title, TopIcon } from "./Styles";
import { Button } from "../../../styles/Button";
import chartIcon from "../../../assets/chartIcon.png";

export const HeaderNav = () => {
  return (
    <Header>
      <TopIcon>
        <img src={chartIcon} alt="chart icon" height="50px" />
      </TopIcon>
      <Title>React Charts</Title>
    </Header>
  );
};
