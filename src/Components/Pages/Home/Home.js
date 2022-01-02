import React from 'react';
import { Button, Card, CardGroup, Carousel, } from 'react-bootstrap';
import Product from '../Product/Product';
import Featured from './Featured';
const Home = () => {

    return (
        <div>

            <Carousel >
                <Carousel.Item className="text-primary w-100 image-fluid ">

                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0328/0961/5495/files/big-slider_1950x.jpg?v=1589377269"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark text-xl-start align-middle">
                        <h3 className='fs-2 fw-bold'>Summer 2022</h3>
                        <h1 className='fs-1 fw-bold'>Meet Galaxy S20,S20+</h1>
                        <p className='fw-bold'>This is the phone that will change photography</p>
                        <Button variant="dark">Explore Now</Button>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* Banner */}

            <div className="m-5 p-5">

                <div>


                    <CardGroup className="container mb-5">
                        <Card className="p-5 me-5">
                            <Card.Img variant="top" className='h-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcu0VTytmRHCS1-AOruuKikEJ8K-3_YbJQ4A&usqp=CAU" />
                            <Card.Body>
                                <Card.Title>FREE SHIPPING</Card.Title>
                                <Card.Text>
                                    Free shipping on all US order
                                    or order above $100
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="p-5 me-5">
                            <Card.Img variant="top" src="https://uxwing.com/wp-content/themes/uxwing/download/42-business-professional-services/female-services-support.svg" />
                            <Card.Body>
                                <Card.Title>SUPPORT 24/7</Card.Title>
                                <Card.Text>
                                    Contact us 24 hours a day
                                    7 days a week
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card className="p-5 w-100 fluid" >
                            <Card.Img variant="top" src="https://previews.123rf.com/images/arcady31/arcady311510/arcady31151000087/47589111-30-days-money-back-guarantee-icon.jpg" />
                            <Card.Body >
                                <Card.Title>30 DAYS RETURN</Card.Title>
                                <Card.Text>
                                    30 DAYS RETURN
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>
                </div>
                {/* Banner */}


                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-lg-4 col-lg-2">
                            <Card className='h-80 w-75'>
                                <Card.Img variant="" className="fluid" src="https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Samsung/Smartphone/S20%20FE/2-800x800.jpg" />
                                <Card.Body>
                                    <Card.Title>Galaxy S20</Card.Title>
                                    <Card.Text>
                                        Save up to 25%
                                    </Card.Text>
                                    <Button variant="dark">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div class="col-lg-4 col-lg-2">
                            <Card className='h-80 w-75'>
                                <Card.Img variant="" className=' fluid' src="https://www.mytrendyphone.eu/images/Haylou-LS02-Waterproof-Smartwatch-with-Heart-Rate-Black-6971664930443-11092020-01-p.jpg" />
                                <Card.Body className=''>
                                    <Card.Title>New SmartWatch</Card.Title>
                                    <Card.Text>
                                        Save up to 35%
                                    </Card.Text>
                                    <Button variant="dark">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div class="col-lg-4 col-lg-2">
                            <Card className='h-100 w-75'>
                                <Card.Img variant="" className=' p-2 fluid' src="https://shop.rangs.com.bd/images/products/thum/20201219094928.jpg" />
                                <Card.Body className='p-5'>
                                    <Card.Title>Save Up to</Card.Title>
                                    <Card.Text>
                                        Plus earn 2% back in UniqueShop rewards.
                                    </Card.Text>
                                    <Button variant="dark">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>



                {/* Best Selling */}
                <Product></Product>
                {/* Featured */}

                <Featured></Featured>
                {/* BLogs */}
                <h1 className='m-5'>Blog Posts</h1>
                <div className="card-group container">
                    <div className="card me-5">
                        <img className="card-img-top " src="https://cdn.shopify.com/s/files/1/0328/0961/5495/articles/blog-1_540x.jpg?v=1590392243" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Style for couple in Weeding season</h5>
                            <p className="card-text">Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists,...</p>

                        </div>
                    </div>
                    <div className="card me-5">
                        <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0328/0961/5495/articles/blog-2_540x.jpg?v=1590392259" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">The Easiest Way to Break Out on Top</h5>
                            <p className="card-text">The Easiest Way to Break Out on Top</p>

                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0328/0961/5495/articles/blog-3_540x.jpg?v=1590392274" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">SPRING – SUMMER TRENDING 2020</h5>
                            <p className="card-text">Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists,...</p>

                        </div>
                    </div>
                </div>




            </div>

        </div>


    );
};


export default Home;