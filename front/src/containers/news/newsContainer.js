import NewsTitle from "../../components/news/newsTitle";
import NewsText from "../../components/news/newsText";

import PostImage from "./postImage";

import React from "react";
import PropTypes from "prop-types"

const NewsContainer = ({title, text, src, title_img, alt}) => {
  return (
    <div>
      <NewsTitle title={title} />
        <PostImage
            src={src}
            title_img={title_img}
            alt={alt}
        />
      <NewsText text={text} />
    </div>
  );
}

NewsContainer.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    src: PropTypes.string,
    title_img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

NewsContainer.defaultProps = {
    src: ''
}

export default NewsContainer;
