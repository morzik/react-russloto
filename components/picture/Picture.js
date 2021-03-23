import React from "react";
import * as PropTypes from "prop-types";
import LazyLoad from 'react-lazyload';


const Picture = ({attr = {}, sourceData, imgAttr} = {}) => {
  return (
    <LazyLoad>
      <picture {...attr}>
        {getSources(sourceData)}
        {getImage(imgAttr)}
      </picture>
    </LazyLoad>
  );
};

function getSources(sourceData) {
  return sourceData ? (
    <>
      {sourceData.sources.map(
        ({type, media, srcSetSuffix, srcSet}, index) => (
          <source
            key={index}
            type={type}
            media={media}
            srcSet={`${
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
