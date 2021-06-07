import React from "react";
import { Header, Title } from "./Styles";
import { Button } from "../../../styles/Button";
import chartIcon from "../../../assets/chartIcon.png";

export const HeaderNav = () => {
  return (
    <Header>
      <img src={chartIcon} alt="chart icon" height="50px" />
      <Title>Charts</Title>
      <Button primary>I'm a button!</Button>
    </Header>
  );
};
