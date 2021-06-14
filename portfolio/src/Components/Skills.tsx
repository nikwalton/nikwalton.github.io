import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import IconC from './Icons/IconC'
import IconCPP from './Icons/IconCPP'
import IconSwift from './Icons/IconSwift'
import IconPython from './Icons/IconPython'
import IconHTML from './Icons/IconHTML'
import IconCSS from './Icons/IconCSS'
import IconDjango from './Icons/IconDjango'
import IconGit from './Icons/IconGit'
import IconGithub from './Icons/iconGithub'
import IconWindows from './Icons/IconWindows'
import IconMac from './Icons/IconMac'
import IconUbuntu from './Icons/IconUbuntu'

function Skills() {
    return (
        <Container fluid>
            <Row className='justify-content-center'>
                <Col>
                    <h3 className='text-center'>Skills</h3>
                    <Container fluid>
                        <Row className='justify-content-center'>
                            <IconC />
                            <IconCPP />
                            <IconSwift />
                            <IconPython />
                            <IconHTML />
                            <IconCSS />
                        </Row>
                        <Row className='Justify-content-center'>
                            <IconDjango />
                            <IconGit />
                            <IconGithub />
                            <IconWindows />
                            <IconMac />
                            <IconUbuntu />
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Skills