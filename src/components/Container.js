import React from 'react';
import PropTypes from 'prop-types';
import './container.css';

const Container = (props) => {
  return(
    <div className={`container ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Container;