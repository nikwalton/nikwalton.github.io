import React from 'react'
import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function ContactPage() {
    return (
        <Container>
            <Row className='justify-content-center pt-5'>
                <h3>Want to Chat?</h3>
            </Row>
            <Row className='justify-content-center'>
                <h4>Here's How</h4>
            </Row>
            <Row>
                <Col>
                 <h5>Email:</h5>
                 <a href='mailto:nikawalton2@gmail.com'>nikawalton2@gmail.com</a>
                 <h5 className='pt-3'>Github:</h5>
                 <a href='https://github.com/nikwalton'>Github Profile</a>
                 <br />
                 <h5 className='pt-3'>LinkedIn:</h5>
                 <a href='https://www.linkedin.com/in/nikolaus-walton/'>LinkedIn Profile</a>
                </Col>
            </Row>

        </Container>
        
    );
}
export default ContactPage