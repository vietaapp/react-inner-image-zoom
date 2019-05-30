import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './components/Image';
import ZoomImage from './components/ZoomImage';
import FullscreenPortal from './components/FullscreenPortal';
import './styles.css';

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

  handleTouchStart = () => {
    const isFullscreen = this.props.fullscreenOnMobile && window.matchMedia && window.matchMedia(`(max-width: ${this.props.mobileBreakpoint}px)`).matches;

    this.setState({
      isTouch: true,
      isFullscreen: isFullscreen
    });
  }

  handleMouseEnter = (e) => {
    this.bounds = e.target.getBoundingClientRect();

    this.setState({
      isActive: true
    });
  }

  handleClick = (e) => {
    if (this.state.isZoomed) {
      if (!this.state.isTouch) {
        this.zoomOut();
      }

      return;
    }

    if (this.state.isTouch) {
      this.bounds = e.target.getBoundingClientRect();

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
    this.ratios = this.getRatios(this.bounds, e.target);

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

  handleClose = () => {
    this.zoomOut(() => {
      setTimeout(() => {
        this.setDefaults();

        this.setState({
          isActive: false,
          isTouch: false,
          isFullscreen: false
        })
      }, this.props.fadeDuration);
    });
  }

  zoomIn = (pageX, pageY) => {
    if (this.state.isTouch) {
      this.initialTouchMove(pageX, pageY);
    }

    this.setState({
      isZoomed: true
    }, () => {
      if (!this.state.isTouch) {
        this.initialMove(pageX, pageY);
      }

      if (this.props.onZoomIn) {
        this.props.onZoomIn();
      }
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
    const initialPageX = (pageX - (window.pageXOffset + this.bounds.left)) * this.ratios.x;
    const initialPageY = (pageY - (window.pageYOffset + this.bounds.top)) * this.ratios.y;

    this.zoomEl.scrollLeft = initialPageX;
    this.zoomEl.scrollTop = initialPageY;
  }

  zoomOut = (callback) => {
    this.setState({
      isZoomed: false
    }, () => {
      if (this.props.onZoomOut) {
        this.props.onZoomOut();
      }

      if (callback) {
        callback();
      }
    });
  }

  setDefaults = () => {
    this.isLoaded = false;
    this.onLoadCallback = null;
    this.bounds = {};
    this.offsets = {};
    this.ratios = {};
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

  renderZoomImage = (props, isFullscreen, isTouch) => {
    if (isFullscreen) {
      return(
        <FullscreenPortal>
          <div
            className="iiz__zoom-container iiz__zoom-container--fixed"
            ref={(el) => { this.zoomEl = el; }}
          >
            <ZoomImage {...props} />
          </div>
        </FullscreenPortal>
      );
    }

    if (isTouch) {
      return(
        <div
          className="iiz__zoom-container"
          ref={(el) => { this.zoomEl = el; }}
        >
          <ZoomImage {...props} />
        </div>
      );
    }

    return <ZoomImage {...props} />;
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
      className
    } = this.props;

    const zoomImageProps = {
      src: zoomSrc || src,
      isZoomed: this.state.isZoomed,
      left: this.state.isTouch ? null : this.state.left,
      top: this.state.isTouch ? null : this.state.top,
      onLoad: this.handleLoad,
      onClose: this.state.isTouch ? this.handleClose : null,
      fadeDuration: this.state.isFullscreen ? 0 : fadeDuration
    };

    return(
      <figure
        className={`iiz ${className ? className : ''}`}
        onTouchStart={this.handleTouchStart}
        onClick={this.handleClick}
        onMouseEnter={this.state.isTouch ? null : this.handleMouseEnter}
        onMouseMove={this.state.isTouch || !this.state.isZoomed ? null : this.handleMouseMove}
        onMouseLeave={this.state.isTouch ? null : this.handleClose}
      >
        <Image
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          sources={sources}
          alt={alt}
        />

        {this.state.isActive &&
          this.renderZoomImage(zoomImageProps, this.state.isFullscreen, this.state.isTouch)
        }

        {this.state.isTouch &&
          <button
            className={`iiz__btn iiz__close ${this.state.isZoomed ? 'iiz__close--visible' : ''}`}
            style={{
              transition: `linear ${fadeDuration}ms opacity, linear ${fadeDuration}ms visibility`
            }}
            onClick={this.handleClose}
            aria-label="Zoom Out"
          />
        }

        {!this.state.isZoomed &&
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
  onZoomIn: PropTypes.func,
  onZoomOut: PropTypes.func
};

InnerImageZoom.defaultProps = {
  fadeDuration: 150,
  mobileBreakpoint: 640
};

export default InnerImageZoom;