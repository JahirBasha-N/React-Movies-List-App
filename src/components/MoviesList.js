import React, { Fragment, useContext, useEffect, useState } from "react";
import { MoviesListContext } from "./common/Layout";
import List from "./common/List";
import Pagination from "./common/Pagination";
import ListGroup from "./ListGroup";
import { getGenres } from "../services/fakeGenreService";
import { useNavigate } from "react-router-dom";
import Input from "./common/Input";

const MoviesList = (props) => {
  let [page, setPage] = useState(1);
  let { movies: allMovies } = useContext(MoviesListContext);
  let [search, setSearch] = useState("");
  let navigate = useNavigate();

  const { onDelete: handleDelete, onLike: handleLike } = props;
  const [genre, setGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const perPage = 4;

  const searchHandler = (e) => {
    let {
      target: { value },
    } = e;
    setSearch(value);
  };

  let filteredMovies = selectedGenre
    ? allMovies.filter((element) => element.genre._id === selectedGenre._id)
    : allMovies;

  filteredMovies = search
    ? filteredMovies.filter((element) =>
        element.title.toLowerCase().includes(search.toLowerCase())
      )
    : filteredMovies;
  let movies = filteredMovies.slice((page - 1) * perPage, perPage * page);

  useEffect(() => {
    setGenre(getGenres());
  }, []);
  console.log("Movies List rendered");

  return (
    <Fragment>
      <div className="row">
        <div className="col-2">
          <ListGroup
            data={genre}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
        </div>
        <div className="col">
          <button
            className="btn btn-primary mb-2"
            onClick={() => navigate("/addMovie")}
          >
            Add Movie
          </button>
          <Input
            name="search"
            type="search"
            placeholder="Search Movies"
            changeHandler={searchHandler}
            value={search}
          />
          <List
            data={movies}
            handleDelete={handleDelete}
            handleLike={handleLike}
            canShowLike={true}
          />
          <Pagination
            listCount={filteredMovies.length}
            perPage={perPage}
            currentPage={page}
            onPageChange={setPage}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default MoviesList;
