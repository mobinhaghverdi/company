import React from 'react';
import "./Section.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FourthSection = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1
        }
    };
    const { secondbox } = require("../../data/data.json");

    return (
        <div className='fourth-wrapper'>
            <div className='sec-section'>
                <div className="top-section">
                    <div className="above-title">کاری که ما انجام می دهیم</div>
                    <div className="sec-sec-title">خدمات</div>
                </div>
                <Carousel
                    className='container sec-section-boxes'
                    responsive={responsive}
                    showDots={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    swipeable={true}
                    infinite={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    focusOnSelect={true}
                    itemClass={`carousel-class`}
                    dotListClass={`dott`}
                >
                    {secondbox.map(item => (
                        <div key={item.id} className="sec-sec-box">
                            <div className="sec-section-icon">
                                <img src={`/img/${item.icon}`} alt="" />
                            </div>
                            <div className="section-above-t">
                                {item.name}
                            </div>
                            <div className="section-above-p">
                                {item.paragraph}
                            </div>
                            <div className="box-arrow">
                                <i className='fas fa-caret-right'></i>
                            </div>
                        </div>
                    ))}
                </Carousel>

            </div>
        </div>
    );
}

export default FourthSection;