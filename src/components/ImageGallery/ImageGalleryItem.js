import React from 'react'
import PropTypes from 'prop-types'
import Img from "gatsby-image"

const ImageGalleryItem = ({ imageData }) => (
  <div className="fr-m-image-gallery__item">
    <Img fixed={imageData.image.childImageSharp.fixed}
         className="fr-m-image-gallery__item-image" 
         alt={imageData.alt} />
  </div>
)

ImageGalleryItem.propTypes = {
  imageData: PropTypes.object,
}

export default ImageGalleryItem
