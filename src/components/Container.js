import React from 'react';
import PropTypes from 'prop-types';
import './container.css';

const Container = (props) => {
  return(
    <div className="container">
      {props.children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.element
};

export default Container;