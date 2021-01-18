import styled from "styled-components";
import { useQuery, useQueryClient } from "react-query";
import { ReactChild } from "react";
import MovieDetails from "./MovieDetails";

const StyledMovieList = styled.div`
  > div {
    margin-bottom: 10px;
  }
`;

//text search
//https://api.themoviedb.org/3/search/keyword?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&query=asdfasdf&page=1

//movie discovery
//https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&movie?sort_by=popularity.desc
const MovieList = () => {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(
      `https://api.themoviedb.org/3/search/keyword?api_key=0cc1197e19110e3d78cce9276d0341da&query=${encodeURIComponent(
        "ironman"
      )}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  const { results } = data;
  return (
    <StyledMovieList>
      {results.map(
        ({
          title,
          overview,
          id,
        }: {
          title: string;
          overview: string;
          id: number;
        }) => {
          return <MovieDetails title={title} description={overview} key={id} />;
        }
      )}
    </StyledMovieList>
  );
};

export default MovieList;
