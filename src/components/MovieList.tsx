import styled from "styled-components";
import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import MovieDetails from "./MovieDetails";

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

  // const [filter, setFilter] = useState(null);

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

  //use a debounced search for refetching queries
  useEffect(() => {
    refetch();
  }, [search, refetch]);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong...</h1>;
  }

  console.log(data);
  const { results } = data;

  return (
    <AnimateSharedLayout>
      <StyledMovieList>
        <motion.ul layout>
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
              return (
                <MovieDetails title={title} description={overview} key={id} />
              );
            }
          )}
        </motion.ul>
      </StyledMovieList>
    </AnimateSharedLayout>
  );
};

export default MovieList;
