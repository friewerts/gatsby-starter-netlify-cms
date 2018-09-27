import React from 'react'
import PropTypes from 'prop-types'

import './Headline.scss'

const Headline = ({
  headline
}) => (
    <h1 className="fr-e-headline">{headline}</h1>
)

Headline.propTypes = {
  headline: PropTypes.string,
}

export default Headline;