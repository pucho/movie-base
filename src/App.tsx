import React, { useState } from "react";
import "./App.css";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import NavHeader from "./components/NavHeader";
import SearchInput from "./components/SearchInput";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [search, setSearch] = useState("");
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <NavHeader>MovieBase</NavHeader>
        <SearchInput onUpdate={setSearch} />
        <MovieList
          queryType={search ? "keyword" : "discover"}
          search={search}
        ></MovieList>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
