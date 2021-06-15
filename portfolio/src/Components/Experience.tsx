import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'


function Experience() {
    return(
        <>
        <Container>
            <Row className='justify-content-center p-5'>
                <h3>Experience</h3>
            </Row>
            <Row className='justify-content-center'> 
                <CardDeck className='m-auto'>
                    <Card>
                        <Card.Body>
                            <Card.Title>CrimsonCode Hackathon</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">August 2017 - March 2021</Card.Subtitle>
                       
                        <Card.Text>
                            The CrimsonCode hackathon is Washington State University's premiere
                            hackathon. As Director, my team of organizers and I planned, fundraised, and 
                            hosted 300 students over the course of a 24 weekend. In addition to directing the 
                            hackathon, I have helped organized an additional 3 years of hackathons in a lesser
                            role, such as helping with logistics or mentoring new leaders of the hackahton.
                        </Card.Text>
                        <Button href='https://dailyevergreen.com/74588/news/hacking-away-at-the-competition/'>News Article</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>ACM WSU Chapter Club President</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>August 2019 - May 2020</Card.Subtitle>
                            <Card.Text>
                                As club president for the ACM, it was my goal to establish a safe environment
                                for all members of all skill levels to interact with eachother, talk about tech,
                                and learn career building skills that many classes do not teach. I did this by organizing 
                                tech talks &mdash; from industry, faculty, or other students &mdash; holding career building 
                                sessions to review resumes and go over interviewing, and mentoring new students with
                                questions they may have about the tech industry.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </CardDeck>
            </Row>
          
        </Container>    
        <br/>
        </>   
    );
}

export default Experience