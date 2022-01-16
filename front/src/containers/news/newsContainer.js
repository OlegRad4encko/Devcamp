import NewsTitle from "../../components/news/newsTitle";
import NewsText from "../../components/news/newsText";
import React from "react";
import PropTypes from "prop-types"

const NewsContainer = ({
  title = "Example title",
  text = "Empty Post",
}) => {
  //console.log(React.Children.map(children, (child) => child));
  return (
    <div>
      <NewsTitle title={title} />
      <NewsText text={text} />
    </div>
  );
}

NewsContainer.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default NewsContainer;
