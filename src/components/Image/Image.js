import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const Image = ({ imageData, className }) => {
  let imageMarkup;
  if (imageData.responsiveImage) {
    imageMarkup = (
      <Img
        fluid={imageData.responsiveImage.childImageSharp.fluid}
        className={`fr-e-image ${className}`}
        alt={imageData.alt}
      />
    );
  } else {
    imageMarkup = (
      <img
        src={imageData.image}
        className={`fr-e-image ${className}`}
        alt={imageData.alt}
      />
    );
  }

  return imageMarkup;
};

Image.propTypes = {
  imageData: PropTypes.object
};

export default Image;
