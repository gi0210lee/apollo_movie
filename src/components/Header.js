import React from "react";
import * as S from "../static/Styles";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();

  const onClick = () => {
    history.push("/");
  };

  return (
    <>
      <S.Header>
        <S.Title onClick={onClick}>Apollo 2020</S.Title>
        <S.SubTitle>I Love GraphQL</S.SubTitle>
      </S.Header>
    </>
  );
};
export default Header;
