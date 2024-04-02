import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieForm = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  return (
    <Fragment>
      <div style={{ display: "block" }}>
        <div>MovieForm {id}</div>
        <button onClick={() => navigate("/movies")}>Save</button>
      </div>
    </Fragment>
  );
};

export default MovieForm;
