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
        <h3 id="installation">Installation</h3>
        <p>TKTK</p>

        <h3 id="usage">Usage</h3>
        <p>TKTK</p>

        <h3 id="props">Props</h3>
        <p>TKTK</p>
      </section>
    </div>
  );
};

export default Docs;