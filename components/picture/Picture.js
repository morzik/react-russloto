import React from "react";

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
