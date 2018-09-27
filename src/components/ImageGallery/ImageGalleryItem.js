import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const ImageGalleryItem = ({ imageData }) => (
  <div key={v4()} className="fr-m-image-gallery__item">
    <div className="fr-m-image-gallery__item-description">
      {imageData.description}
    </div>
    <img
      className="fr-m-image-gallery__item-image"
      src={imageData.image.image}
      alt={imageData.image.alt}
    />
  </div>
)

ImageGalleryItem.propTypes = {
  imageData: PropTypes.objectOf(
    PropTypes.shape({
      description: PropTypes.string,
      image: PropTypes.object,
    })
  ),
}

export default ImageGalleryItem
