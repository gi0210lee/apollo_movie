import React from "react";
import Loading from "../components/Loading";
import { gql, useMutation } from "@apollo/client";

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;

const Like = ({ id, isLiked }) => {
  const [likeMovie, { loading }] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id) },
  });
  if (loading) return <Loading />;
  return (
    <>
      <button onClick={likeMovie}>{isLiked ? "unlike" : "like"}</button>
    </>
  );
};

export default Like;
