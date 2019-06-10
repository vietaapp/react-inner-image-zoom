import React from 'react';
import Container from '../components/Container';
import './docs.css';

const Docs = () => {
  return(
    <Container className="docs">
      <h2 className="docs__heading">Docs</h2>

      <nav className="docs__nav">
        <a href="#installation">Installation</a>
        <a href="#usage">Usage</a>
        <a href="#props">Props</a>
      </nav>

      <section className="docs__content">
        <h3 id="installation">Installation</h3>
        <p>TKTK</p>

        <h3 id="usage">Usage</h3>
        <p>TKTK</p>

        <h3 id="props">Props</h3>
        <p>TKTK</p>
      </section>
    </Container>
  );
};

export default Docs;