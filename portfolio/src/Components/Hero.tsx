import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'


const JumboInline = {
    padding: '3em',
    margin: '1em'
}
function Hero() {
    return (
        <>
        <Jumbotron style={JumboInline} className='p-auto'> 
            <Container>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <h1 className='text-white'>Creating A Better Tomorrow</h1>
                        <h3 className='text-white'>Exploring meaningful projects both technically and artistically</h3>
                        <Button variant='outline-light' 
                        href='https://drive.google.com/file/d/1EUd37KjHyjV7mFNIdzB3W6O4gugEiQtm/view?usp=sharing'>
                            Resume</Button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        </>
    );
}

export default Hero;