import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './docs.css';

const Docs = () => {
  return(
    <div className="docs">
      <h2 className="docs__heading">Docs</h2>

      <nav className="docs__nav">
        <HashLink to="#installation">Installation</HashLink>
        <HashLink to="#usage">Usage</HashLink>
        <HashLink to="#props">Props</HashLink>
      </nav>

      <section className="docs__content">
        <div>
          <h3 id="installation">Installation</h3>
          <h4>NPM</h4>
          <pre className="docs__code"><code>npm install react-inner-image-zoom</code></pre>
          <h4>Yarn</h4>
          <pre className="docs__code"><code>yarn add react-inner-image-zoom</code></pre>
        </div>

        <div>
          <h3 id="usage">Usage</h3>
          <p>Import and render the component:</p>

          <pre className="docs__code"><code>
            {`import InnerImageZoom from 'react-inner-image-zoom';\n\n...\n\n<InnerImageZoom src="/path/to/image.jpg" zoomSrc="/path/to/zoom-image.jpg" />`}
          </code></pre>
        </div>

        <div>
          <h3 id="props">Props</h3>
          <p><b>src (String)</b>Required. URL for the original image.</p>
          <p><b>srcSet (String)</b>Default srcset attribute for a responsive original image.</p>
          <p><b>sizes (String)</b>Default sizes attribute for use with srcset.</p>
          <p><b>sources (Array)</b>A list of image sources for using the picture tag to serve the appropriate original image (see below for more details).</p>
          <p><b>zoomSrc (String)</b>URL for the larger zoom image. Falls back to original image src if not defined.</p>
          <p><b>alt (String)</b>Alternative text for the original image.</p>
          <p><b>fadeDuration (Number)</b>Default 150. Fade transition time in milliseconds.</p>
          <p><b>fullscreenOnMobile (Boolean)</b>Default false. Enables fullscreen zoomed image on touch devices below a specified breakpoint.</p>
          <p><b>mobileBreakpoint (Number)</b>Default 640. The maximum breakpoint for fullscreen zoom image when fullscreenOnMobile is true.</p>
          <p><b>className (String)</b>Custom classname for styling the component.</p>
          <p><b>afterZoomIn (Function)</b>Function to be called after zoom in.</p>
          <p><b>afterZoomOut (Function)</b>Function to be called after zoom out.</p>

          <h4>Sources</h4>
          <p>This prop accepts an array of objects which it uses to create a picture tag and source elements. The component looks for the following optional properties and you can find additional details <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">here</a>: </p>
          <p><b>srcSet (String)</b>Srcset attribute for source tag.</p>
          <p><b>sizes (String)</b>Sizes attribute for source tag.</p>
          <p><b>media (String)</b>An attribute containing a media condition for use with the srcset.</p>
          <p><b>type (String)</b>An image MIME type. This is useful for using newer formats like WebP.</p>
        </div>
      </section>
    </div>
  );
};

export default Docs;