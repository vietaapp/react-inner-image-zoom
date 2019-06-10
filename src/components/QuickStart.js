import React from 'react';
import './quick-start.css';

const QuickStart = () => {
  return(
    <section className="quick-start">
      <div className="quick-start__block">
        <h3 className="quick-start__heading">
          <span>Quick<br />Start</span>
        </h3>

        <div className="quick-start__content">
          <p>
            <span>Install:</span>
            <code>npm install react-inner-image-zoom</code>
          </p>
          <p>
            <span>Import:</span>
            <code>import InnerImageZoom from 'react-inner-image-zoom'</code>
          </p>
          <p>
            <span>Render:</span>
            <code>{`<InnerImageZoom src="/path/to/image.jpg" />`}</code>
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;