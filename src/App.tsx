import React, { useState } from "react";
import "./App.css";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import useDebounce from "./hooks/useDebounce";
import styled from "styled-components";

import MovieList from "./components/MovieList";
import NavHeader from "./components/NavHeader";
import SearchInput from "./components/SearchInput";

const queryClient = new QueryClient();

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <NavHeader>MovieBase</NavHeader>
        <SearchInput onUpdate={setSearch} />
        <MovieList
          queryType={debouncedSearch ? "search" : "discover"}
          search={debouncedSearch}
        ></MovieList>
      </Container>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
