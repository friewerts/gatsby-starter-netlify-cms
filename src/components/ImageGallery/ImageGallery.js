import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

const ImageGallery = ({ images }) => (
  <div className="fr-m-image-gallery">
    {images.map(imageData => (
      <div key={v4()} className="fr-m-image-gallery__image">
        <div className="fr-m-image-gallery__image-description">
          {imageData.description}
        </div>
        <img
          src={imageData.image.image}
          alt={imageData.image.alt}
        />
      </div>
    ))}
  </div>
)

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      image: PropTypes.object,
    })
  ),
}

export default ImageGallery
