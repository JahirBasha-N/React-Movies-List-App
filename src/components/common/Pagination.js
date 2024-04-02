import React, { Fragment } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  Pagination.propTypes = {
    listCount: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
  };

  let { listCount, perPage, currentPage, onPageChange } = props;

  let totalNoOfPages = Math.ceil(listCount / perPage);
  let pageArr = _.range(1, totalNoOfPages + 1);

  console.log("Pagination rendered");

  return (
    <Fragment>
      <nav aria-label="Page navigation example">
        <ul className="pagination text-left">
          {pageArr.map((element) => (
            <li
              key={element}
              className={
                currentPage === element ? "page-item active" : "page-item"
              }
            >
              <a className="page-link" onClick={() => onPageChange(element)}>
                {element}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Pagination;
