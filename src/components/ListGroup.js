import React, { Fragment } from "react";

const ListGroup = (props) => {
  let { data, selectedGenre, setSelectedGenre } = props;
  console.log("list group rendered");
  return (
    <Fragment>
      <ul className="list-group">
        <li
          onClick={() => setSelectedGenre(null)}
          className={
            !selectedGenre ? "list-group-item active" : "list-group-item"
          }
        >
          All Genre
        </li>
        {data.map((element) => (
          <li
            key={element._id}
            className={
              selectedGenre && selectedGenre._id === element._id
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedGenre(element)}
          >
            {element.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ListGroup;
