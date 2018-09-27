import React from 'react'
import PropTypes from 'prop-types'

import ImageGalleryItem from './ImageGalleryItem'
import './ImageGallery.scss'

const ImageGallery = ({ images }) => (
  <div className="fr-m-image-gallery">
    {images.map(imageData => (
      <ImageGalleryItem imageData={imageData} />
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
