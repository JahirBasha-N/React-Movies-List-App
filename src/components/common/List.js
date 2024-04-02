import React, { Fragment } from "react";
import Like from "./Like";
import ShowCount from "../ShowCount";
import { Link } from "react-router-dom";

const List = (props) => {
  let { data, handleDelete, handleLike, canShowLike } = props;
  console.log("Table component rendered");
  return (
    <Fragment>
      {data.length ? (
        <Fragment>
          <nav className="navbar navbar-expand-sm bg-light text-lg-center">
            <ShowCount movies={data} />
          </nav>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th
                  scope="col"
                  style={{ display: canShowLike ? "block" : "none" }}
                >
                  Like
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((movie, index) => (
                <tr key={movie._id}>
                  <td>
                    <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                  </td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td style={{ display: canShowLike ? "block" : "none" }}>
                    <Like
                      liked={movie.liked}
                      onClick={() => handleLike(index)}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      ) : (
        <Fragment>No Movies List Found</Fragment>
      )}
    </Fragment>
  );
};

export default List;
