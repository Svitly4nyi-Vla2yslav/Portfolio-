import React, { Component } from 'react'
import { Container, Form, Button } from "react-bootstrap"

export default class Contact extends Component {
  render() {
    return (
      <Container className='mr-0 ml-0' style={{ maxWidth: "800px", display: "flex", flexDirection:"column"}}>
        <h1 className='text-center '>CONTACT ME </h1>
        <p className='text-center'>SAY HELLO TO ME </p>
        <Form style={{maxWidth: "800px", display: "flex", flexDirection:"column"}}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label> Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type='name' placeholder='Your Name' />
          </Form.Group>
          <Form.Group>
            <Form.Label >Nachricht</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Hello, my name is . . ."/>
          </Form.Group>
          <Button className='mt-5 ' variant='primary'  type='submit'  size="lg">Send message </Button>
        </Form>
      </Container>
    )
  }
}