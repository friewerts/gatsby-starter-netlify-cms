import React from 'react'
import PropTypes from 'prop-types'
import UnsereWohnungenTemplate from './UnsereWohnungenTemplate'

const UnsereWohnungenPreview = ({ entry, widgetFor }) => {

  console.log("xfred - entry", entry)
  const entryImages = entry.getIn(['data', 'images'])
  console.log("xfred - entryImg", entryImages)
  const images = entryImages ? entryImages.toJS() : []
  console.log("xfred - images", images)
  return (
    <UnsereWohnungenTemplate
      title={entry.getIn(['data', 'title'])}
      content={widgetFor('body')}
      images={images}
    />
  )
}

UnsereWohnungenPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default UnsereWohnungenPreview
