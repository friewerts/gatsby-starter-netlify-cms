import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import "./Image.scss";

const Image = ({ imageData, className }) => {
  let imageMarkup;
  if (imageData.responsiveImage) {
    imageMarkup = (
      <Img
        fluid={{
          ...imageData.responsiveImage.childImageSharp.fluid,
          aspectRatio: imageData.aspectRatio
        }}
        className={`fr-e-image ${className}`}
        alt={imageData.alt}
      />
    );
  } else {
    imageMarkup = (
      <div className={`fr-e-image ${className}`}>
        <div
          style={{
            width: "100%",
            paddingBottom: `${100 / imageData.aspectRatio}%`
          }}
        />
        <img
          src={imageData.image}
          className={`fr-e-image__fallback`}
          alt={imageData.alt}
        />
      </div>
    );
  }

  return imageMarkup;
};

Image.propTypes = {
  imageData: PropTypes.object,
  className: PropTypes.string
};

export default Image;
