import React from "react";
import { Link } from "react-router-dom";
import * as S from "../static/Styles";
import Like from "../components/Like";

const Movie = ({ id, isLiked, bg }) => {
  return (
    <>
      <S.MovieContainer>
        <Link to={`/${id}`}>
          <S.MoviePoster bg={bg} />
        </Link>
        <Like id={id} isLiked={isLiked} />
      </S.MovieContainer>
    </>
  );
};

export default Movie;
