import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://young-shore-30046.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
            })
    }, [reviews]);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='my-5'>
            <Container>
                <h4 className='services-title text-center text'>Tesitimonial</h4>
                <h4 className='services-title text-center title mb-5 '>What People Say About Us</h4>
                <Slider {...settings}>
                    {
                        reviews.map(review => <Testimonial
                            key={review._id}
                            review={review}
                        ></Testimonial>)
                    }
                </Slider>
            </Container>
        </div>
    );
};

export default Testimonials;