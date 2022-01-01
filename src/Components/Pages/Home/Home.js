import React from 'react';
import { Button, Card, CardGroup, Carousel, } from 'react-bootstrap';
const Home = () => {

    return (
        <div>
<div class="container">
    <div class="row">
        <div class="col-6 col-md-4">  
            <div className='align-middle justify-content-center align-items-center text-center'>
                <h3>Meet Galaxy S20,S20+</h3>
                <p>This is the phone that will change photography</p>
            </div>
                <Button variant="dark">Explore Now</Button>{' '}
        </div>
        <div class="col-md-8"> 
            <img className="d-block w-100" src="https://cdn.shopify.com/s/files/1/0328/0961/5495/files/big-slider_1950x.jpg?v=1589377269" alt="First slide"/>
        </div>
    </div>
</div>

            {/* Banner */}
         


            <div>
                {/* <Carousel >
                    <Carousel.Item className="text-primary w-100 image-fluid">
                       
                        <img
                            className="d-block w-100"
                            src="https://cdn.shopify.com/s/files/1/0328/0961/5495/files/big-slider_1950x.jpg?v=1589377269"
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-dark align-items-center text-center justify-content-center">
                            <h3>Meet Galaxy S20,S20+</h3>
                            <p>This is the phone that will change photography</p>
                            <Button variant="dark">Explore Now</Button>{' '}
                            
                        </Carousel.Caption>
                    </Carousel.Item> */}
                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=""
                            alt="Second slide"
                        />

                        <Carousel.Caption className="text-danger">
                            <h3>Phillips</h3>
                            <p>Best Service</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src=""
                            alt="Third slide"
                        />

                        <Carousel.Caption className="text-danger">
                            <h3>Phillips</h3>
                            <p>Low cost better service</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                {/* </Carousel> */}

            </div>
            
            <div>

                

            </div>
            <div className="m-5 p-5">
                <h1>Best 3 products in this month</h1>
                <div>


                    <CardGroup className="p-5">
                        <Card className="p-5">
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>FREE SHIPPING</Card.Title>
                                <Card.Text>
                                Free shipping on all US order
or order above $100
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="p-5">
                            <Card.Img variant="top" src="" />
                            <Card.Body>
                                <Card.Title>SUPPORT 24/7</Card.Title>
                                <Card.Text>
                                Contact us 24 hours a day
7 days a week
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="p-5 w-100 fluid" >
                            <Card.Img variant="top" src="" />
                            <Card.Body >
                                <Card.Title>30 DAYS RETURN</Card.Title>
                                <Card.Text>
                                30 DAYS RETURN
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>
                </div>
            </div>

        </div>
    );
};


export default Home;