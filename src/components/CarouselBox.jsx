import React, { Component } from 'react'
import Carousel from "react-bootstrap/Carousel"
import Badge from 'react-bootstrap/Badge';
import img1 from "../img/img-1.png"
import img2 from "../img/img-2.png"
import img3 from "../img/img-3.png"
import img4 from "../img/img-4.png"
import img5 from "../img/img-5.png"
import img6 from "../img/img-6.png"
export default class CarouselBox extends Component {
    render() {
        return (
            <>
                <Carousel style={{   }}>
                    <Carousel.Item>
                        <img
                            className='d-block '
                            src={img1}
                            alt='MyWork'
                            style={{ objectFit: 'cover', width: "100%", height: "800px" }}
                        />

                        <Carousel.Caption >
                            <Badge bg="warning" text="dark" style={{  width: "100%" }}>
                            <h2>TASTY TREATS </h2>
                            <p>[Parcel, SCSS, HTML, JS, Axios]</p>
                            <p>A site of culinary recipes from around the world.
                                Responsive design, transform effects, modal windows.
                                Role: Developer.
                                Responsible for: Section "Category".
                                Team work
                            </p></Badge>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={img2}
                            alt='MyWork'
                            style={{ objectFit: 'cover', width: "100%", height: "800px" }}
                        />
                        <Carousel.Caption>
                        <Badge bg="warning" text="dark" style={{  width: "100%" }}>
                            <h2>The Watch Spot</h2>
                            <p>[HTML 49.0%, CSS 37.3%, JavaScript 13.7% ]</p>
                            <p>Welcome to our collection of premium watches</p></Badge>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={img3}
                            alt='MyWork'
                            style={{ objectFit: 'cover', width: "100%", height: "800px" }}
                        />

                        <Carousel.Caption>
                            <Badge bg="warning" text="dark" style={{  width: "100%" }}>
                            <h2>WebStudio</h2>
                            <p>[SCSS, HTML, JS]</p>
                            <p>A website of WebStudio company.
                                Responsive design, transform effects, modal windows.
                                Role: Developer.
                                Individual project.
                            </p></Badge>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={img4}
                            alt='MyWork'
                            style={{ objectFit: 'cover', width: "100%", height: "800px" }}
                        />

                        <Carousel.Caption> <Badge bg="warning" text="dark" style={{  width: "100%" }}>
                            <h2>Movies </h2>
                            <p>[Create React App, JS, SCSS, JSX, Axios]</p>
                            <p>"In this project, basic routing was implemented for the application
                                to search and
                                store movies."
                                Role: Developer.
                                Individual project.
                            </p></Badge>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={img5}
                            alt='MyWork'
                            style={{ objectFit: 'cover', width: "100%", height: "800px" }}
                        />

                        <Carousel.Caption>
                        <Badge bg="warning" text="dark" style={{  width: "100%" }}>
                            <h2>Images</h2>
                            <p>[react, react-dom, react-icons, axios, notiflix, prop-types]</p>
                            <p>In this project, basic routing was implemented for the application to
                                search and
                                store images."
                                Role: Developer.
                                Individual project.
                            </p></Badge>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={img6}
                            alt='MyWork'
                            style={{ objectFit: 'cover', width: "100%", height: "800px" }}
                        />

                        <Carousel.Caption >
                        <Badge bg="warning" text="dark" style={{  width: "100%" }}>
                            <h2>Images</h2>
                            <p>[JavaScript 46.2%, CSS 29.8%, HTML 24.0% (axios, modern-normalize,
                                notiflix, simplelightbox )]</p>
                            <p>In this project, basic routing was implemented for the application
                                to search and
                                store images."
                                Role: Developer.
                                Individual project.</p></Badge>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        )
    }
}