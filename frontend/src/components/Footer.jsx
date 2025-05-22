import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light mt-5">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Copyright&copy; {currentYear} </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

