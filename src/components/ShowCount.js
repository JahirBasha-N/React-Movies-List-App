import React, { Fragment } from "react";

const ShowCount = (props) => {
  let { movies } = props;
  return (
    <Fragment>
      <div className="text-lg-center">{`Showing ${movies.length} movies in database`}</div>
    </Fragment>
  );
};

export default ShowCount;
