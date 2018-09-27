import React from 'react'
import PropTypes from 'prop-types'

import { Content, Headline } from '../../components'

const UnsereWohnungenTemplate = ({ 
    title, 
    content,
    contentComponent
}) => {

  const PageContent = contentComponent || Content

  return (
    <section className="fr-unsere-wohnungen">
      <Headline headline={title} />
      
      <PageContent className="fr-unsere-wohnungen__content" content={content} />
    </section>
  )
}

UnsereWohnungenTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

export default UnsereWohnungenTemplate;