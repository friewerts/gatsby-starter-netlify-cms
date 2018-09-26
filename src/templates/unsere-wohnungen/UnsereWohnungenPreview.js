import React from 'react'
import PropTypes from 'prop-types'
import UnsereWohnungenTemplate from './UnsereWohnungenTemplate'

const UnsereWohnungenPreview = ({ entry, widgetFor }) => (
  <UnsereWohnungenTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

UnsereWohnungenPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default UnsereWohnungenPreview
