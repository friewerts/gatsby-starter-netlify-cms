import React from "react";
import PropTypes from "prop-types";
import UnsereWohnungenTemplate from "./UnsereWohnungenTemplate";

const UnsereWohnungenPreview = ({ entry, widgetFor }) => {
  const entryImages = entry.getIn(["data", "images"]);
  const images = entryImages ? entryImages.toJS() : [];

  return (
    <UnsereWohnungenTemplate
      title={entry.getIn(["data", "title"])}
      content={widgetFor("body")}
      images={images}
    />
  );
};

UnsereWohnungenPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default UnsereWohnungenPreview;
