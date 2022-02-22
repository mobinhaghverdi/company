import React from 'react';
import "./Section.css";
import SectionBox from './SectionBox';
import Fade from "react-reveal";


const SecSection = () => {


    let { boxes } = require("../../data/data.json");

    return (
        <div className='sec-section'>
            <div className="top-section">
                <div className="above-title">روند</div>
                <div className="sec-sec-title">نحوه کار ما</div>
            </div>
            <div className="container section-boxes">
                {boxes.map(item => (
                    <Fade>
                        <SectionBox key={item.id} title={item.name} paragraph={item.paragraph} icon={item.icon} />
                    </Fade>
                ))}
            </div>
        </div>
    );
}

export default SecSection;