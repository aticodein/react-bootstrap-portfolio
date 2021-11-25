import React from 'react';
import { CardDeck, Card, Button, Container, Image,  } from 'react-bootstrap';
import './App.css';

export const About = () => (
        <div>
            <h2>
                About
            </h2>
            <CardDeck>
  <Card bg="light" border="primary"  style={{ margin: '45px' }} >
    <Container>  
       <Image src={require('./assets/images/ati.JPG')} fluid />
    </Container>
    <Card.Body>
      <Card.Title><p><strong>Full Stack Web Developer</strong></p></Card.Title>
      <Card.Text style={{ border: "2px solid blue", padding: "25px", margin: '45px' }}>
            <p>HTML5, CSS3, JavaScript, React, Python,
               Django, AWS, MongoDB, Flask</p>
            <p>Github, Gitpod, Heroku, Github Pages</p>
            Willing to learn new computer languages and work with other frameworks and technologies.
            <p>Currently working with: </p>
            <li>small companies as Front-end Web Developer creating responsive websites
            for them with: React, Bootstrap, JavaScript, JQuery and AWS S3.</li>
            <li>Full-stack Projects with Python, Django, Heroku</li>

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">More info: </small>
      <Button href="https://ati-ecommerce.s3-eu-west-1.amazonaws.com/CV/Web+Dev++CV+06.07.2020.pdf" target="_blank" style={{ margin: '3px', borderRadius: '10px', }}>CV</Button>
    </Card.Footer>
  </Card>
  
</CardDeck>
        </div>
    )
