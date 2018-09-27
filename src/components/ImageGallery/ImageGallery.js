import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const ImageGallery = ({ images }) => (
  <div className="fr-m-image-gallery">
    {images.map(image => (
      <div key={v4()} className="fr-m-image-gallery__image">
        <div className="fr-m-image-gallery__image-description">
          {image.description}
        </div>
      </div>
    ))}
  </div>
)

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      test: PropTypes.string,
    })
  ),
}

export default ImageGallery
