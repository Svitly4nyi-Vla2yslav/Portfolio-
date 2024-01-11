import React, { Component } from 'react'
import {Container, CardGroup, Card} from "react-bootstrap"
export default class Projects extends Component {
  render() {
    return (
      <Container className='text-center m-4'>
        <h1>MY PROJECTS</h1>
        <p>MADE WITH LOVE</p>
        <CardGroup>
          <Card>
            <Card.Img variant="top"  />
          </Card>
        </CardGroup>
        </Container>
    )
  }
}