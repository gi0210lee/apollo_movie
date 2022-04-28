import React from "react";
import { Link } from "react-router-dom";
import * as S from "../static/Styles";

const Suggestion = ({ id, bg }) => {
  return (
    <S.SuggestionPosterContainer>
      <Link to={`/${id}`}>
        <S.SuggestionPoster bg={bg} />
      </Link>
    </S.SuggestionPosterContainer>
  );
};

export default Suggestion;
