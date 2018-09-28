import React from "react";
import PropTypes from "prop-types";

import { Image } from "../";

const ImageGalleryItem = ({ imageData }) => (
  <div className="fr-m-image-gallery__item">
    <Image imageData={imageData} className="fr-m-image-gallery__item-image" />
  </div>
);

ImageGalleryItem.propTypes = {
  imageData: PropTypes.object
};

export default ImageGalleryItem;
