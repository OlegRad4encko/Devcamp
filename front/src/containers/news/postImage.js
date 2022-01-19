import React from "react";
import PropTypes from "prop-types"

const PostImage = ({
  src = "https://bit.ly/3rpUTxv",
  title = "Title example",
  alt = "unique solution to your problem",
}) => {
  return (
    <div>
      <img src={src} title={title} alt={alt} />
    </div>
  );
}

PostImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default PostImage;
