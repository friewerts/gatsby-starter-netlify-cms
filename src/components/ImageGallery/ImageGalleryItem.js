import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const ImageGalleryItem = ({ imageData }) => (
  <div key={v4()} className="fr-m-image-gallery__item">
    <img
      className="fr-m-image-gallery__item-image"
      src={imageData.image}
      alt={imageData.alt}
    />
  </div>
)

ImageGalleryItem.propTypes = {
  imageData: PropTypes.objectOf(
    PropTypes.shape({
      image: PropTypes.object,
    })
  ),
}

export default ImageGalleryItem
