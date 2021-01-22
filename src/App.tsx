import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import NavHeader from "./components/NavHeader";
import SearchInput from "./components/SearchInput";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import useDebounce from "./hooks/useDebounce";

const queryClient = new QueryClient();

function App() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 200);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <NavHeader>MovieBase</NavHeader>
        <SearchInput onUpdate={setSearch} />
        <MovieList
          queryType={debouncedSearch ? "search" : "discover"}
          search={debouncedSearch}
        ></MovieList>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
