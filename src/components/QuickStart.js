import React from 'react';
import './quick-start.css';

const QuickStart = () => {
  return(
    <section className="quick-start">
      <h3 className="quick-start__heading">
        <span>Quick<br />Start</span>
      </h3>

      <div className="quick-start__content">
        <div className="quick-start__step">
          <span>Install:</span>
          <code>npm install react-inner-image-zoom</code>
        </div>
        <div className="quick-start__step">
          <span>Import:</span>
          <code>import InnerImageZoom from 'react-inner-image-zoom'</code>
        </div>
        <div className="quick-start__step">
          <span>Render:</span>
          <code>{`<InnerImageZoom src="/path/to/image.jpg" />`}</code>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;