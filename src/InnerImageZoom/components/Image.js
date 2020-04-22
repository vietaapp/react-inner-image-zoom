import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Image = ({
  sources,
  isZoomed,
  className,
  ...rest
}) => (
  <Fragment>
    {sources && sources.length > 0 ? (
      <picture>
        {sources.map((source, i) => {
          return(
            <Fragment key={i}>
              {source.srcSet &&
                <source
                  srcSet={source.srcSet}
                  sizes={source.sizes}
                  media={source.media}
                  type={source.type}
                />
              }
            </Fragment>
          );
        })}

        <img
          className={`iiz__img ${className} ${isZoomed ? 'iiz__img--invisible' : ''}`}
          {...rest}
        />
      </picture>
    ) : (
      <img
        className={`iiz__img ${className} ${isZoomed ? 'iiz__img--invisible' : ''}`}
      />
    )}
  </Fragment>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  sources: PropTypes.array,
  alt: PropTypes.string,
  isZoomed: PropTypes.bool
};

export default Image;
