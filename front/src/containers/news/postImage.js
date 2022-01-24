import React from "react";
import PropTypes from "prop-types"

const PostImage = ({src , title, alt}) => {
  if(src == null) {
    return " ";

  } else {
    return (
        <div>
          <img src={src} title={title} alt={alt} />
        </div>
    );
  }


}

PostImage.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string
}

PostImage.defaultProps = {
  src: '',
  title: '',
  alt: ''
}
export default PostImage;
