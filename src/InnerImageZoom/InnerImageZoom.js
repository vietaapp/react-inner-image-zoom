import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Image from './components/Image';
import ZoomImage from './components/ZoomImage';
import FullscreenPortal from './components/FullscreenPortal';

class InnerImageZoom extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isActive: false,
      isTouch: false,
      isZoomed: false,
      isFullscreen: false,
      left: 0,
      top: 0
    };

    this.setDefaults();
  }

  handleInitialTouchStart = () => {
    const isFullscreen = this.props.fullscreenOnMobile && window.matchMedia && window.matchMedia(`(max-width: ${this.props.mobileBreakpoint}px)`).matches;

    this.setState({
      isTouch: true,
      isFullscreen: isFullscreen
    });
  }

  handleTouchStart = (e) => {
    this.offsets = this.getOffsets(e.changedTouches[0].pageX, e.changedTouches[0].pageY, this.zoomImg.offsetLeft, this.zoomImg.offsetTop);
  }

  handleMouseEnter = () => {
    this.setState({
      isActive: true
    });
  }

  handleClick = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.state.isZoomed) {
      if (!this.state.isTouch) {
        this.zoomOut();
      }

      return;
    }

    if (this.state.isTouch) {
      this.setState({
        isActive: true
      });
    }

    if (this.isLoaded) {
      this.zoomIn(e.pageX, e.pageY);
    } else {
      this.onLoadCallback = this.zoomIn.bind(this, e.pageX, e.pageY);
    }
  }

  handleLoad = (e) => {
    this.isLoaded = true;
    this.zoomImg = e.target;
    this.bounds = this.getBounds(this.img, false);
    this.ratios = this.getRatios(this.bounds, this.zoomImg);

    if (this.onLoadCallback) {
      this.onLoadCallback();
      this.onLoadCallback = null;
    }
  }

  handleMouseMove = (e) => {
    let left = e.pageX - this.offsets.x;
    let top = e.pageY - this.offsets.y;

    left = Math.max(Math.min(left, this.bounds.width), 0);
    top = Math.max(Math.min(top, this.bounds.height), 0);

    this.setState({
      left: left * -this.ratios.x,
      top: top * -this.ratios.y
    });
  }

  handleTouchMove = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let left = e.changedTouches[0].pageX - this.offsets.x;
    let top = e.changedTouches[0].pageY - this.offsets.y;

    left = Math.max(Math.min(left, 0), (this.zoomImg.offsetWidth - this.bounds.width) * -1);
    top = Math.max(Math.min(top, 0), (this.zoomImg.offsetHeight - this.bounds.height) * -1);

    this.setState({
      left: left,
      top: top
    });
  }

  handleCloseClick = () => {
    this.zoomOut(() => {
      setTimeout(() => {
        if (this.state.isTouch) {
          this.zoomImg.removeEventListener('touchmove', this.handleTouchMove, { passive: false });
        }

        this.setDefaults();

        this.setState({
          isActive: false,
          isTouch: false,
          isFullscreen: false
        })
      }, this.props.fadeDuration);
    });
  }

  initialMove = (pageX, pageY) => {
    this.offsets = this.getOffsets(window.pageXOffset, window.pageYOffset, -this.bounds.left, -this.bounds.top);

    this.handleMouseMove({
      pageX: pageX,
      pageY: pageY
    });
  }

  initialTouchMove = (pageX, pageY) => {
    const initialPageX = (pageX - (window.pageXOffset + this.bounds.left)) * -this.ratios.x;
    const initialPageY = (pageY - (window.pageYOffset + this.bounds.top)) * -this.ratios.y;

    this.bounds = this.getBounds(this.img, this.state.isFullscreen);
    this.offsets = this.getOffsets(0, 0, 0, 0);

    this.handleTouchMove({
      changedTouches: [{
        pageX: initialPageX,
        pageY: initialPageY
      }],
      preventDefault: () => {},
      stopPropagation: () => {}
    });
  }

  zoomIn = (pageX, pageY) => {
    this.setState({
      isZoomed: true
    }, () => {
      const initialMove = this.state.isTouch ? this.initialTouchMove : this.initialMove;

      initialMove(pageX, pageY);

      if (this.state.isTouch) {
        this.zoomImg.addEventListener('touchmove', this.handleTouchMove, { passive: false });
      }

      if (this.props.afterZoomIn) {
        this.props.afterZoomIn();
      }
    });
  }

  zoomOut = (callback) => {
    this.setState({
      isZoomed: false
    }, () => {
      if (this.props.afterZoomOut) {
        this.props.afterZoomOut();
      }

      if (callback) {
        callback();
      }
    });
  }

  setDefaults = () => {
    this.isLoaded = false;
    this.onLoadCallback = null;
    this.zoomImg = null;
    this.bounds = {};
    this.offsets = {};
    this.ratios = {};
  }

  getBounds = (img, isFullscreen) => {
    if (isFullscreen) {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
        left: 0,
        top: 0
      };
    }

    return img.getBoundingClientRect();
  }

  getOffsets = (pageX, pageY, left, top) => {
    return {
      x: pageX - left,
      y: pageY - top
    };
  }

  getRatios = (bounds, zoomImg) => {
    return {
      x: (zoomImg.offsetWidth - bounds.width) / bounds.width,
      y: (zoomImg.offsetHeight - bounds.height) / bounds.height
    };
  }

  render () {
    const {
      src,
      srcSet,
      sizes,
      sources,
      zoomSrc,
      alt,
      fadeDuration,
      className,
      onLoad,
      style
    } = this.props;

    const zoomImageProps = {
      src: zoomSrc || src,
      fadeDuration: this.state.isFullscreen ? 0 : fadeDuration,
      top: this.state.top,
      left: this.state.left,
      isZoomed: this.state.isZoomed,
      onLoad: this.handleLoad,
      onTouchStart: this.handleTouchStart,
      onClose: this.state.isTouch ? this.handleCloseClick : null
    };

    return(
      <figure
        className={`iiz ${className ? className : ''}`}
        ref={(el) => { this.img = el; }}
        onTouchStart={this.handleInitialTouchStart}
        onClick={this.handleClick}
        onMouseEnter={this.state.isTouch ? null : this.handleMouseEnter}
        onMouseMove={this.state.isTouch || !this.state.isZoomed ? null : this.handleMouseMove}
        onMouseLeave={this.state.isTouch ? null : this.handleCloseClick}
        style={style}
      >
        <Image
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          sources={sources}
          alt={alt}
          isZoomed={this.state.isZoomed}
          onLoad={onLoad}
        />

        {this.state.isActive &&
          <Fragment>
            {this.state.isFullscreen ? (
              <FullscreenPortal className="iiz__zoom-portal">
                <ZoomImage {...zoomImageProps} />
              </FullscreenPortal>
            ) : (
              <ZoomImage {...zoomImageProps} />
            )}
          </Fragment>
        }

        {this.props.showZoomButton && !this.state.isZoomed &&
          <span className="iiz__btn iiz__hint"></span>
        }
      </figure>
    );
  }
}

InnerImageZoom.propTypes = {
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  sources: PropTypes.array,
  zoomSrc: PropTypes.string,
  alt: PropTypes.string,
  fadeDuration: PropTypes.number,
  fullscreenOnMobile: PropTypes.bool,
  mobileBreakpoint: PropTypes.number,
  className: PropTypes.string,
  afterZoomIn: PropTypes.func,
  afterZoomOut: PropTypes.func,
  onLoad: PropTypes.func,
  style: PropTypes.object,
  showZoomButton: PropTypes.bool,
};

InnerImageZoom.defaultProps = {
  fadeDuration: 150,
  mobileBreakpoint: 640,
  showZoomButton: true,
};

export default InnerImageZoom;
