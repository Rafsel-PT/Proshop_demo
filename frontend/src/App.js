import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/product';
import products from './Products';

const App = () => {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={3} xl={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
