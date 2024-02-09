import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useState } from 'react';





const Timetable = () => {
    
  return (
    <>
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Time-Table-Maker</Navbar.Brand>
                </Container>
            </Navbar>
        </>
       
        <>
            <Navbar className="bg-body-tertiary justify-content-around" style={{margin:"30px"}}> 
                <Form inline>
                    <InputGroup>
                        <NavDropdown title="Year" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">I</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">II</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">III</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">IV</NavDropdown.Item>
                        </NavDropdown>
                    </InputGroup>
                </Form>
                <Form inline>
                    <InputGroup>
                        <NavDropdown title="Department" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">CSE</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">IT</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">CSBS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">MECH</NavDropdown.Item>
                           
                        </NavDropdown>
                    </InputGroup>
                </Form>
                <Form inline>
                    <InputGroup>
                        <NavDropdown title="Section" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">A</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">B</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">C</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">D</NavDropdown.Item>
                        </NavDropdown>
                    </InputGroup>
                </Form>

            </Navbar>
        </>

        <>
        <Form>
        <Form.Group as={Col} controlId="formBasicEmail" style={{margin:"30px"}}>
          <Row className="d-flex align-items-center">
            <Col md={6} xs={12} >
                <Form.Label>Enter the day</Form.Label>
            </Col>
            <Col md={6}  >
              <Form.Control type="email" placeholder="Enter email"  />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group as={Col} controlId="formBasicEmail" style={{margin:"30px"}}>
          <Row className="d-flex align-items-center">
            <Col md={6} xs={12} >
                <Form.Label>Period I</Form.Label>
            </Col>
            <Col md={6}  >
              <Form.Control type="email" placeholder="Enter email"  />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group as={Col} controlId="formBasicEmail" style={{margin:"30px"}}>
          <Row className="d-flex align-items-center">
            <Col md={6} xs={12} >
                <Form.Label>Period II</Form.Label>
            </Col>
            <Col md={6}  >
              <Form.Control type="email" placeholder="Enter email"  />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group as={Col} controlId="formBasicEmail"style={{margin:"30px"}}>
          <Row className="d-flex align-items-center">
            <Col md={6} xs={12} >
                <Form.Label>Period III</Form.Label>
            </Col>
            <Col md={6}  >
              <Form.Control type="email" placeholder="Enter email"  />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group as={Col} controlId="formBasicEmail" style={{margin:"30px"}}>
          <Row className="d-flex align-items-center">
            <Col md={6} xs={12} >
                <Form.Label>Period IV</Form.Label>
            </Col>
            <Col md={6}  >
              <Form.Control type="email" placeholder="Enter email"  />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group as={Col} controlId="formBasicEmail" style={{margin:"30px"}}>
          <Row className="d-flex align-items-center">
            <Col md={6} xs={12} >
                <Form.Label>Period V</Form.Label>
            </Col>
            <Col md={6}  >
              <Form.Control type="email" placeholder="Enter email"  />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group as={Col} controlId="formBasicEmail" style={{margin:"30px"}}>
          <Row className="d-flex align-items-center">
            <Col md={6} xs={12} >
                <Form.Label>Period VI</Form.Label>
            </Col>
            <Col md={6}  >
              <Form.Control type="email" placeholder="Enter email"  />
            </Col>
          </Row>
        </Form.Group>

    </Form>
        </>


    </>
  )
}

export default Timetable