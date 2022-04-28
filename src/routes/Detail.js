import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import * as S from "../static/Styles";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Suggestion from "../components/Suggestion";

const GET_MOVIE = gql`
  query GetMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      language
      rating
      isLiked @client
      description_full
    }
    suggestions(id: $id) {
      id
      title
      medium_cover_image
    }
  }
`;

const Detail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: {
      id: parseInt(id),
    },
  });

  // if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <S.DetailContainer>
        <S.DetailColumn>
          {loading && <Loading />}
          <S.DetailTitle>
            {data?.movie?.title}
            {` `}
            {data?.movie?.isLiked ? "🙂" : "😠"}
          </S.DetailTitle>
          <S.DetailSubTitle>
            {data?.movie?.language} {` `} {data?.movie?.rating} {` `}
          </S.DetailSubTitle>
          <S.DetailDescription>
            {data?.movie?.description_full}
          </S.DetailDescription>
        </S.DetailColumn>
        <S.DetailPoster bg={data?.movie?.medium_cover_image} />
      </S.DetailContainer>
      <S.SuggestionContainer>
        {data?.suggestions?.map((m) => (
          <Suggestion id={m.id} bg={m.medium_cover_image} />
        ))}
      </S.SuggestionContainer>
    </>
  );
};

export default Detail;
