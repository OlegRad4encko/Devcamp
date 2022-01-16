import React from "react";
import PropTypes from "prop-types"

const NewsText = ({ text }) => {
  return <p>{text}</p>;
}

NewsText.propTypes = {
  text: PropTypes.string.isRequired
}

export default NewsText;