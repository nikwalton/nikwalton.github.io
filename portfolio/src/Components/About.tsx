import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function About() {
    return(
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
                       of clubs on campus. Some hobbies of mine include sports such
                       as rock climbing and fencing, and creative ones like 
                       photography and 3D art. Check out the navbar to see more 
                       of what I get up to!
                   </h5>
               </Col>
               <Col sm>
                   
               </Col>
            
           </Row>
           <Row>
               <Col sm>

               </Col>
               <Col sm>
                   <h5>
                   As a professional, I am looking for a place where I can both
                   make a meaningful contribution and learn tremendosly on about
                   new technology or topics in general. At university, I accomplished
                   this goal as president of the ACM Chapter on campus, and organizing
                   4 years of hackathons on campus in various capacities, allowing 
                   students to have a safe space to create without worrying about
                   anything else for the weekend.
                   </h5>
                  
               </Col>
           </Row>
           <br/>
           <br/>
       </Container>
    );
}

export default About