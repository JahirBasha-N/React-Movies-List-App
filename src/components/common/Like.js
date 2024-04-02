import React, { Fragment } from "react";

const Like = (props) => {
  let { liked, onClick } = props;
  return (
    <Fragment>
      {liked ? (
        <i
          style={{ cursor: "pointer" }}
          className="fa fa-heart"
          aria-hidden="true"
          onClick={onClick}
        ></i>
      ) : (
        <i
          style={{ cursor: "pointer" }}
          className="fa fa-heart-o"
          aria-hidden="true"
          onClick={onClick}
        ></i>
      )}
    </Fragment>
  );
};

export default Like;
