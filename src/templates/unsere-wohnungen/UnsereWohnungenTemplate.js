import React from 'react'
import PropTypes from 'prop-types'
import Content from '../../components/Content'

const UnsereWohnungenTemplate = ({ 
    title, 
    content
}) => {

  return (
    <section className="fr-unsere-wohnungen">
      <h2 className="fr-unsere-wohnungen__headline">
        {title}
      </h2>
      <Content className="fr-unsere-wohnungen__content" content={content} />
    </section>
  )
}

UnsereWohnungenTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

export default UnsereWohnungenTemplate;