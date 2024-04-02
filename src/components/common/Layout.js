import React, { Fragment, createContext, useState } from "react";
import MoviesList from "../MoviesList";
import { getMovies } from "../../services/fakeMovieService";

export const MoviesListContext = createContext();

const Layout = () => {
  const [movies, setMovies] = useState(getMovies());

  const handleDelete = (index) => {
    setMovies(movies.filter((movie, idx) => idx !== index));
  };

  const handleLike = (index) => {
    setMovies(
      movies.filter((mv, idx) => {
        if (idx === index) mv.liked = mv.liked ? false : true;
        return true;
      })
    );
  };

  console.log("Layout Rendered");

  return (
    <Fragment>
      {movies.length ? (
        <MoviesListContext.Provider value={{ movies }}>
          <main className="container mt-5">
            <MoviesList onDelete={handleDelete} onLike={handleLike} />
          </main>
        </MoviesListContext.Provider>
      ) : (
        <Fragment>No Movies List Found</Fragment>
      )}
    </Fragment>
  );
};

export default Layout;
