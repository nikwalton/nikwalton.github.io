import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'


function Hero() {
    return (
        <Jumbotron className='bg-transparent jumbotron-fluid p-5'>
            <Container fluid={true}>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <h1>Creating A Better Tomorrow</h1>
                        <h3>Exploring meaningful projects both Technically and Artistically</h3>
                        <h3>Here are some highlights</h3>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;