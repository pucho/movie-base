import React from "react";
import "./App.css";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import NavHeader from "./components/NavHeader";
import SearchInput from "./components/SearchInput";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <NavHeader>MovieBase</NavHeader>
        <SearchInput />
        <MovieList></MovieList>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
