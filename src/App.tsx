import React from "react";
import "./App.css";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
import NavHeader from "./components/NavHeader";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <div>
      <NavHeader>MovieBase</NavHeader>
      <SearchInput />
      <MovieList>
        <MovieDetails />
        <MovieDetails />
        <MovieDetails />
        <MovieDetails />
      </MovieList>
    </div>
  );
}

export default App;
