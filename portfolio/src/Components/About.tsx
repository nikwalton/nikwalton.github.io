import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function About() {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md={8}>
                    <h3 className='text-center'>About Me</h3>
                </Col>
            </Row>

            <Row>
                <Col sm >
                    <h5>Hi! My name is Nikolaus Walton - Nik for short - and I am
                        student at Washington State University studying for a
                        Bachelors of Science in Computer Science. I am expected
                        to graduate in the spring of 2022. During my free time I
                        like to make fun side projects, mentor students, and be part
                        of clubs on campus.
                    </h5>
                    <h5>
                        As a professional, I am looking for a place where I can both
                        make a meaningful contribution and learn tremendosly on about
                        new technology or topics in general.
                    </h5>
                </Col>
                {
                //<Col sm>
                
                //</Col>
                }
                    
            </Row>
        
            <br />
            <br />
        </Container>
    );
}

export default About