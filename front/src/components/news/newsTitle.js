import React from "react";
import PropTypes from "prop-types"

const NewsTitle = ({ title }) => {
  return <h3> {title} </h3>;
}

NewsTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default NewsTitle;
