import React from 'react';
import { Button, Card, CardGroup, Carousel, Col, Row } from 'react-bootstrap';
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

            <div>



                {/* Banner */}

                <div>
                </div>
                <div className="m-5 p-5">

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

                    <div className='container'>

                        <Row xs={1} md={2} className="g-4">

                            <Col >
                                <Card className='w-50 h-100 fluid'>
                                    <Card.Img variant="" className="" src="https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Samsung/Smartphone/S20%20FE/2-800x800.jpg" />
                                    <Card.Body>
                                        <Card.Title>Galaxy S20</Card.Title>
                                        <Card.Text>
                                            Save up to 25%
                                        </Card.Text>
                                        <Button variant="dark">Buy Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='w-50 fluid'>
                                    <Card.Img variant="top" src="https://www.mytrendyphone.eu/images/Haylou-LS02-Waterproof-Smartwatch-with-Heart-Rate-Black-6971664930443-11092020-01-p.jpg" />
                                    <Card.Body>
                                        <Card.Title>New SmartWatch</Card.Title>
                                        <Card.Text>
                                            Save up to 35%
                                        </Card.Text>
                                        <Button variant="dark">Buy Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='w-50 fluid'>
                                    <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/gWEalFzvResT2eDpxsmjQjtjON8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20030547/mchin_180905_4061_0009.jpg" />
                                    <Card.Body>
                                        <Card.Title>Dell XPS 2020</Card.Title>
                                        <Card.Text>
                                            Engineered to run on ultra-fast networks
                                        </Card.Text>
                                        <Button variant="dark">Buy Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card className='w-50 h-100 fluid'>
                                    <Card.Img variant="top" src="https://shop.rangs.com.bd/images/products/thum/20201219094928.jpg" />
                                    <Card.Body>
                                        <Card.Title>Save Up to</Card.Title>
                                        <Card.Text>
                                            Plus earn 2% back in UniqueShop rewards.
                                        </Card.Text>
                                        <Button variant="dark">Buy Now</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            {/* ))} */}
                        </Row>
                    </div>
                    {/* Best Selling */}
                    <Product></Product>
                    {/* Featured */}

                    <Featured></Featured>
                    {/* BLogs */}
                    <h1>Blogs</h1>
                    <div className="card-group">
                        <div className="card me-5">
                            <img className="card-img-top" src="" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Style for couple in Weeding season</h5>
                                <p className="card-text">Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists,...</p>

                            </div>
                        </div>
                        <div className="card me-5">
                            <img className="card-img-top" src="..." alt="" />
                            <div className="card-body">
                                <h5 className="card-title">The Easiest Way to Break Out on Top</h5>
                                <p className="card-text">The Easiest Way to Break Out on Top</p>

                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src="..." alt="" />
                            <div className="card-body">
                                <h5 className="card-title">SPRING – SUMMER TRENDING 2020</h5>
                                <p className="card-text">Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists,...</p>

                            </div>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    );
};


export default Home;