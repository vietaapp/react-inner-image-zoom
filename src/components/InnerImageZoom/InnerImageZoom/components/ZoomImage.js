import React from 'react';
import PropTypes from 'prop-types';

const ZoomImage = (props) => {
  const {
    src,
    fadeDuration,
    top,
    left,
    isZoomed,
    onLoad
  } = props;

  return(
    <img
      className={`iiz__zoom-img ${isZoomed ? 'iiz__zoom-img--visible' : ''}`}
      style={{
        top: top,
        left: left,
        transition: `linear ${fadeDuration}ms opacity, linear ${fadeDuration}ms visibility`
      }}
      src={src}
      onLoad={onLoad}
      alt=""
    />
  );
};

ZoomImage.propTypes = {
  src: PropTypes.string,
  fadeDuration: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
  isZoomed: PropTypes.bool,
  onLoad: PropTypes.func
};

export default ZoomImage;