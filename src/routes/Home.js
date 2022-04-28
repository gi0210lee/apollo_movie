import React from "react";
import { useQuery, gql } from "@apollo/client";
import Moive from "../components/Movie";
import * as S from "../static/Styles";
import Loading from "../components/Loading";
import Error from "../components/Error";

const GET_MOVIES = gql`
  query {
    movies(limit: 10) {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

const Movies = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (error) return <Error />;

  return (
    <>
      {loading && <Loading />}
      {data?.movies?.map((m) => (
        <Moive
          key={m.id}
          id={m.id}
          isLiked={m.isLiked}
          bg={m.medium_cover_image}
        />
      ))}
    </>
  );
};

const Home = () => {
  return (
    <>
      <S.HomeMovies>{Movies()}</S.HomeMovies>
    </>
  );
};

export default Home;
