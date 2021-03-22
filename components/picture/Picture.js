import React from "react";
import * as PropTypes from "prop-types";
import "lazysizes";

const Picture = ({ attr = {}, sourceData, imgAttr } = {}) => {
  return (
    <picture {...attr}>
      {getSources(sourceData)}
      {getImage(imgAttr)}
    </picture>
  );
};

function getSources(sourceData) {
  return sourceData ? (
    <>
      {sourceData.sources.map(
        ({ type, media, srcSetSuffix, srcSet }, index) => (
          <source
            key={index}
            type={type}
            media={media}
            data-srcset={`${
              srcSet ? srcSet : sourceData.srcSetPrefix + srcSetSuffix
            }`}
          />
        )
      )}
    </>
  ) : null;
}

function getImage(imgAttr) {
  return imgAttr ? <img alt={"text"} {...imgAttr} /> : null;
}

export default Picture;

Picture.propTypes = {
  /**
   * заголовок
   */
  imgAttr: PropTypes.object,
  /**
   * подзаголовок
   */
  sourceData: PropTypes.object,
  /**
   * приз
   */
  attr: PropTypes.object
};
