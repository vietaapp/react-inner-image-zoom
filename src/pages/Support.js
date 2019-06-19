import React from 'react';
import './support.css';

const Support = () => {
  return(
    <div className="support">
      <h2 className="support__heading">Support</h2>

      <div className="support__content">
        <p>If you run into any bugs I missed during my testing or if I left out any feature that would come in handy, please let me know!</p>

        <p>Most of the implementation choices for this component are based on use cases I&apos;ve encountered in the past. For example, I chose a click to zoom trigger because it&apos;s been the most requested on product detail pages I've worked on. If there&apos;s a demand for zoom on hover or other additional functionality, I&apos;d be open to taking. a look.</p>

        <div>
          <a href="https://github.com/laurenashpole/react-inner-image-zoom/issues" className="support__btn">
            Submit an issue <span>on Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;