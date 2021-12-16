import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

function ProjectsPage() {
    return (
        <>
            <Container fluid={true}>
                <Row className='justify-content-center p-5'>
                    <h3>Personal Projects</h3>
                </Row>
                <Row>
                    <CardDeck>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Coug'sPlan
                                </Card.Title>
                                <Card.Subtitle>CPTS 479 Final Project, Spring 2021</Card.Subtitle>
                                <Card.Text>
                                    Coug'sPlan is a utility iOS application that allows the user
                                    to manage all of their classes and to-do tasks in one
                                    space which would allow the user to see what is upcoming in their
                                    school schedule at a glance.
                                </Card.Text>
                                <Button href='https://github.com/nikwalton/CougsPlan'>Github Repo</Button>

                            </Card.Body>
                            <Card.Footer>
                                <small>Swift, iOS, Mobile Development, Firebase</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Portfolio Website
                                </Card.Title>
                                <Card.Subtitle>Hey! Thats This Thing!</Card.Subtitle>
                                <Card.Text>
                                    Personal Portfolio Website to show off all of my cool
                                    projects and skills
                                </Card.Text>
                                <Button href='https://github.com/nikwalton/nikwalton.github.io'>Github Repo</Button>

                            </Card.Body>
                            <Card.Footer>
                                <small>React, Typescript, Bootstrap</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    StegaText
                                </Card.Title>
                                <Card.Subtitle>Project for CPTS 427: Computer Security, Fall 2021</Card.Subtitle>
                                <Card.Text>
                                    A text editor that allows the user
                                    to save text in images or audio files using steganographic methods with an
                                    optional symmetric key encryption component.
                                </Card.Text>
                                <Button href='https://github.com/nikwalton/StegaText'>Github Repo</Button>

                            </Card.Body>
                            <Card.Footer>
                                <small>Python, PyQT5</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </Row>

            </Container>
            <br />
            <Container fluid={true}>
                <Row className="justify-content-center p5">
                    <CardDeck>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Senior Design, Team THC-VR
                                </Card.Title>
                                <Card.Subtitle>CPTS 421 \& 423 </Card.Subtitle>
                                <Card.Text>
                                    Team lead the THC-VR team, in which we are tasked on
                                    building a VR experience for The Health Cognition Lab at
                                    Washington State University. This project is on going,
                                    and code will likely not be available.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small>Unity, Blender, C#, Virtual Reality</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </Row>
            </Container>

        </>
    );
}

export default ProjectsPage