import React, { Component } from 'react'
import { Tab, Container, Row, Nav, Col, Button, Image } from "react-bootstrap"
import MyFoto from "../img/A7R07865ⒸDamienDecaix.jpg"
// import Android from "../img/android-icon.svg"
import Html from "../img/html-5.svg"
import CSS from "../img/css-3.svg"
import JavaScript from "../img/javascript.svg"
import react from "../img/react.svg"
import nodeJS from "../img/nodejs.svg"
import TypeScript from "../img/typescript-icon.svg"
import Axios from "../img/axios.svg"
import Babel from "../img/babel.svg"
import Bootstrap from "../img/bootstrap.svg"
import CreatReactApp from "../img/create-react-app.svg"
import MongoDB from "../img/mongodb.svg"
import ReactNative from "../img/react-native-original.png"
import Redux from "../img/redux.svg"
import Bash from "../img/bash.svg"
import Json from "../img/json.svg"
import Netlify from "../img/netlify.svg"
import Nodemun from "../img/nodemon.svg"
import NPM from "../img/npm.svg"
import Parcel from "../img/parcel.svg"
import Postman from "../img/postman.svg"
import ReactRouter from "../img/react-router.svg"
import Sass from "../img/sass.svg"
import TeamWork from "../img/teamwork.svg"
import Terminal from "../img/terminal.svg"
import VisualStudioCode from "../img/visual-studio-code.svg"
import ViteJs from "../img/vitejs.svg"
import WebPack from "../img/webpack.svg"
import Websocket from "../img/websocket.svg"
import Yarn from "../img/yarn.svg"
import Docker from "../img/Docker.svg"

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2" >
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    About me
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    My Skills
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Education
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Button variant="warning"
                    href='https://drive.google.com/file/d/16D179v6Hvdi0UrjCJghhLy6Tkdw_OBVR/view?usp=sharing'>
                    Lebenslauf 📃</Button>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-4' >
                <Tab.Pane eventKey="first" >
                  <Container className=''>
                    <Row md={6} className='d-md-flex flex-md-row-reverse d-sm-block'>
                      <Col md={6} className=''>
                        <Image roundedCircle src={MyFoto} alt='my foto' style={{ objectFit: 'cover', width: "100%", height: "100%" }} />
                      </Col>
                      <Col md={6} className='text-center d-md-flex align-items-center  mt-md-0 m-0 pt-5'>
                        <p className='p-3 fs-5 pt-5' >
                          I am a 👶and ambitious 👨‍💻 with a deep understanding of modern technologies.
                          My intensive hands-on experience and excellent knowledge enable me to
                          approach tasks creatively and effectively. I am ready to apply my skills and
                          energy to achieve your goals. My inclination towards active learning and rapid
                          adaptation allows me to make a significant contribution to any project.
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Container className='mt-5 p-2'>
                    <Row className='mb-5 ml-0 mr-0'>
                      <Col>
                        <Image src={Html} alt='Html' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={CSS} alt='CSS' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={JavaScript} alt='JavaScript' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={react} alt='React' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={nodeJS} alt='NodeJS' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={Redux} alt='Redux' style={{ width: "50px" }} />
                        {/* <p style={{ color: "indigo" }}>Redux</p> */}
                      </Col>
                    </Row>
                    <Row className='mb-5'>
                      <Col>
                        <Image src={TypeScript} alt='TypeScript' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={ReactNative} alt='ReactNative' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={ReactRouter} alt='ReactRouter' style={{ width: "50px" }} />
                        {/* <p>React-router</p> */}
                      </Col>
                      <Col>
                        <Image src={CreatReactApp} alt='CreatReactApp' style={{ width: "50px" }} />
                        {/* <p style={{ color: "teal" }}>Creat React App</p> */}
                      </Col>
                      <Col>
                        <Image src={Sass} alt='Sass' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={Bootstrap} alt='Bootstrap' style={{ width: "50px" }} />
                        {/* <p style={{ color: "indigo" }}>Bootstrap</p> */}
                      </Col>
                    </Row>
                    <Row className='mb-5'>
                      <Col>
                        <Image src={Axios} alt='Axios' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={Babel} alt='Babel' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={Bash} alt='' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={MongoDB} alt='MongoDB' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={Netlify} alt='Netlify'  className='m-0' style={{ width: "50px" }} />
                        {/* <p style={{ color: "teal" }}>Netlify</p> */}
                      </Col>
                      <Col>
                        <Image src={Nodemun} alt='Nodemun' style={{ width: "50px" }} />
                        {/* <p style={{ color: "green" }}>Nodemun</p> */}
                      </Col>
                    </Row>
                    <Row className='mb-5'>
                      <Col>
                        <Image src={NPM} alt='NPM' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={Yarn} alt='Yarn' style={{ width: "50px" }} />
                        {/* <p style={{ color: "teal" }}>Yarn</p> */}
                      </Col>
                      <Col>
                        <Image src={Docker} alt='Docker' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={Postman} alt='Postman' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={Terminal} alt='NodeJS' style={{ width: "50px" }} />
                        {/* <p>Terminal</p> */}
                      </Col>
                      <Col>
                        <Image src={Websocket} alt='Websocket' style={{ width: "50px" }} />
                        {/* <p>Websocket</p> */}
                      </Col>
                    </Row>
                    <Row className='mb-5'>
                      <Col>
                        <Image src={ViteJs} alt='ViteJs' style={{ width: "50px" }} />
                        {/* <p style={{ color: "indigo" }}>ViteJS</p> */}
                      </Col>
                      <Col>
                        <Image src={WebPack} alt='WebPack' style={{ width: "50px" }} />
                        {/* <p style={{ color: "teal" }}>WebPack</p> */}
                      </Col>
                      <Col>
                        <Image src={Parcel} alt='Parcel' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={Json} alt='Json' style={{ width: "50px" }} />
                        {/* <p><b>JSON</b></p> */}
                      </Col>
                      <Col>
                        <Image src={VisualStudioCode} alt='VisualStudioCode' style={{ width: "50px" }} />
                      </Col>
                      <Col>
                        <Image src={TeamWork} alt='TeamWork' style={{ width: "100px" }} />
                      </Col>
                    </Row>
                  </Container>
                </Tab.Pane>
                <Tab.Pane eventKey="third">

                <h3 className='mt-2 text-center'>
                    <a href="https://goit.global/us/" style={{ color: "orange", textDecoration: "none" }}>
                      GoIT - <span style={{ color: "black" }}>start your career in</span>  IT</a> </h3>
                  <p className='text-center mb-3' >
                    Full Stack Developer | feb 2023 – dec 2023 <tr/>
                    During my studies, I participated in significant
                    projects, including the creation of websites and applications.
                    I developed interfaces using modern technologies such as React and Redux.
                    My role in the team was pivotal - I was responsible for the architecture
                    and interaction with the backend, utilizing REST API for server connectivity.
                    My accomplishments encompass creating highly efficient interfaces that significantly
                    enhanced user experience and improved application performance. I employ
                    cutting-edge testing methods, ensuring high-quality products. My applications
                    have been recognized for their stability and reliability.
                    For exciting opportunities, must-haves include the chance to
                    collaborate on innovative projects, continuous learning and growth,
                    collaboration with highly skilled and dedicated professionals who share my passion for technology.
                  </p>
                  <Image src='https://goit.global/us/assets/images/home-page/twitter.png'  
                  style={{ objectFit: 'cover', width: "100%", height: "100%" }} alt='GoIT' className='mb-5'/>
                 
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}