import React from 'react';
import PropTypes from 'prop-types';
import './main.css';

const Main = (props) => {
  return(
    <main className="main">
      {props.children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.element
};

export default Main;