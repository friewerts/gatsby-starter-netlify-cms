import React from 'react'
import PropTypes from 'prop-types'

import { Content, Headline, ImageGallery } from '../../components'

const UnsereWohnungenTemplate = ({ 
    title, 
    content,
    contentComponent,
    images
}) => {

  const PageContent = contentComponent || Content

  return (
    <section className="fr-unsere-wohnungen">
      <Headline headline={title} />
      <PageContent className="fr-unsere-wohnungen__content" content={content} />
      <ImageGallery images={images} />
    </section>
  )
}

UnsereWohnungenTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  images: PropTypes.array,
}

export default UnsereWohnungenTemplate;