import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const ImageGalleryItem = ({ imageData }) => {
  let imageMarkup;
  if (imageData.responsiveImage) {
    imageMarkup = (
      <Img
        fixed={imageData.responsiveImage.childImageSharp.fixed}
        className="fr-m-image-gallery__item-image"
        alt={imageData.alt}
      />
    );
  } else {
    imageMarkup = (
      <img
        src={imageData.image}
        className="fr-m-image-gallery__item-image"
        alt={imageData.alt}
      />
    );
  }

  return <div className="fr-m-image-gallery__item">{imageMarkup}</div>;
};

ImageGalleryItem.propTypes = {
  imageData: PropTypes.object
};

export default ImageGalleryItem;
