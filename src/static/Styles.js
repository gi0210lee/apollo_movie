import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Error = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

export const Header = styled.div`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
  text-decoration: none;
`;

export const SubTitle = styled.div`
  font-size: 35px;
`;

export const Loading = styled.div`
  font-size: 60px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

export const MoviePoster = styled.div`
  background-image: url(${(props) => props.bg});
  height: 90%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

export const MovieContainer = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 7px;
`;

export const HomeMovies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

export const Movie = styled.div``;

export const DetailContainer = styled.div`
  height: 70vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

export const DetailColumn = styled.div`
  margin-left: 10px;
  width: 50%;
`;

export const DetailTitle = styled.div`
  font-size: 65px;
  margin-bottom: 15px;
`;

export const DetailSubTitle = styled.div`
  font-size: 35px;
  margin-bottom: 10px;
`;

export const DetailDescription = styled.p`
  font-size: 28px;
`;

export const DetailPoster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

export const SuggestionContainer = styled.div`
  height: 25vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

export const SuggestionPosterContainer = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 50px;
`;

export const SuggestionPoster = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  justify-content: space-around;
  align-content: space-around;
  margin-left: 10px;
  margin-right: 10px;
`;
