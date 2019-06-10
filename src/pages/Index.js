import React, { Fragment } from 'react';
import Container from '../components/Container';
import Product from '../components/Product';
import QuickStart from '../components/QuickStart';

const Index = () => {
  return(
    <Fragment>
      <Container>
        <Product />
      </Container>

      <QuickStart />
    </Fragment>
  );
};

export default Index;