import React from 'react';
import './product.css';

const Product = () => {
  return(
    <section className="product">
      <div className="product__img">

      </div>

      <div className="product__details">
        <h2>React Inner Image Zoom Component</h2>
        <p>Great for e-commerce product images!</p>
        <p className="product__price">$0</p>
        <a className="product__btn" href="https://github.com/laurenashpole/react-inner-image-zoom">View on Github</a>
        <ul className="product__list">
          <li>Details</li>
          <li>Zoom + pan on hover and zoom + drag on touch</li>
          <li>Can be used with other popular React components</li>
          <li>Supports responsive images</li>
          <li>Photo credit: <a href="https://unsplash.com/photos/jQ0CTkvlz2U?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Micheile Henderson</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Product;