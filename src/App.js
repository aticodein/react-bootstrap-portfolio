import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Contact } from './Contact';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, Form, FormControl, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    
    render()  { 
        return (
            <React.Fragment>
                    
                    <Layout>
                        
                        <Router>
                            <Navbar bg="dark" expand="lg">
                                <Navbar.Brand href="/" style={{ color: 'white' }}>Attila  Szaloki</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'white' }}/>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto" style={{ color: 'white' }}>
                                    <Nav.Link href="/" style={{ color: 'white' }}>Home</Nav.Link>
                                    <Nav.Link href="/about" style={{ color: 'white' }}>About</Nav.Link>
                                    <Nav.Link href="/contact" style={{ color: 'white' }}>Contact</Nav.Link>
                                    
                                    </Nav>
                                    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Navbar>
                            <Switch>

                                <Route exact path="/" component={Home}/>
                                <Route path="/about" component={About}/>
                                <Route path="/contact" component={Contact}/>
                                <Route component={NoMatch}/>

                            </Switch>
                         <Card.Footer style={{ margin: '5px' }}>Social Media</Card.Footer>
                        </Router>
                    </Layout>
            </React.Fragment>
        );
    }
}

export default App;
