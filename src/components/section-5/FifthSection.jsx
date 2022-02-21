import React from 'react';
import "./Section.css";
import Image from "./Image";
import Icon from './Icon';

const FifthSection = () => {

    const { images } = require("../../data/data.json");
    const { statistics } = require("../../data/data.json");

    return (
        <div className='fifth-wrapper'>
            <div className="top-section-fifth">
                <div className="above-title">مطالعات موردی</div>
                <div className="sec-sec-title">ویترین کار ما</div>
            </div>
            <div className="same-bg">
                <div className="images">
                    {images.map(item => (
                        <Image key={item.id} image={item.image} title={item.title} paragraph={item.paragraph} />
                    ))}
                </div>
                <div className="fifth-wrapper-items">
                    <div className="fifth-footer">
                        {statistics.map(item => (
                            <Icon key={item.id} title={item.title} count={item.count} image={item.image} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FifthSection;