import styled from "styled-components";
import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import MovieDetails from "./MovieDetails";
import RatingFilter from "./RatingFilter";

const StyledMovieList = styled.div`
  > div {
    margin-bottom: 10px;
  }
`;

//movie discovery
//https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&movie?sort_by=popularity.desc
//
//movie search
//api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&query=wonder&include_adult=false

interface QueryBuilderProps {
  queryType: "discover" | "search";
  search?: string;
}

const MovieList = (props: QueryBuilderProps) => {
  const { queryType, search } = props;

  const [rating, setRating] = useState<number | null>(null);

  const onRatingChange = (newRating: number) => {
    rating === newRating ? setRating(null) : setRating(newRating);
  };

  const queryBuilder = ({
    queryType,
    search = "",
  }: QueryBuilderProps): string => {
    const baseQuery = `https://api.themoviedb.org/3/${
      queryType === "discover" ? "discover/movie" : "search/movie"
    }?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`;

    const queryTypes = {
      discover: `&movie?sort_by=popularity.desc`,
      search: `&query=${encodeURIComponent(search)}`,
    };

    return `${baseQuery}${queryTypes[queryType]}`;
  };

  const { isLoading, error, data, refetch } = useQuery("movieData", () =>
    fetch(queryBuilder({ queryType, search })).then((res) => res.json())
  );

  //search is debounced on parent component
  useEffect(() => {
    refetch();
  }, [search, refetch]);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong...</h1>;
  }

  const { results } = data;

  const ratingRange = (rating: number | null) => {
    if (typeof rating === null) return [0, 10];
    switch (true) {
      case rating === 0:
        return [0, 2];
      case rating === 1:
        return [2, 4];
      case rating === 2:
        return [4, 6];
      case rating === 3:
        return [6, 8];
      case rating === 4:
        return [8, 10];
      default:
        return [0, 10];
    }
  };

  const range = ratingRange(rating);

  return (
    <AnimateSharedLayout>
      <div style={{ display: "flex", margin: "0 auto", width: "390px" }}>
        {`Filter by rating: `}
        <RatingFilter ratingIndex={rating} onChange={onRatingChange} />
      </div>
      <StyledMovieList>
        <motion.div layout>
          {results
            .filter((movie: any) => {
              return (
                movie.vote_average >= range[0] && movie.vote_average <= range[1]
              );
            })
            .map(
              ({
                title,
                overview,
                poster_path,
                id,
              }: {
                title: string;
                overview: string;
                poster_path: string;
                id: number;
              }) => {
                return (
                  <MovieDetails
                    title={title}
                    description={overview}
                    key={id}
                    poster={poster_path}
                  />
                );
              }
            )}
        </motion.div>
      </StyledMovieList>
    </AnimateSharedLayout>
  );
};

export default MovieList;
