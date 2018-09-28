import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

import ImageGalleryItem from './ImageGalleryItem'
import './ImageGallery.scss'

const ImageGallery = ({ images }) => (
  <div className="fr-m-image-gallery">
    {images.map(imageData => (
      <ImageGalleryItem key={v4()} imageData={imageData} />
    ))}
  </div>
)

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      responsiveImage: PropTypes.object,
      alt: PropTypes.string,
    })
  ),
}

export default ImageGallery
