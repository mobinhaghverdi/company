import React from 'react';
import CollapsItem from './CollapsItem';
import "./Section.css";



const SeventhSection = () => {

    let { collaps } = require("../../data/data.json");

    return (
        <div className='seventh-wrapper'>
            <div className="seventh-cont">
                <div className="left-wrapper-seventh">
                    {collaps.map(item => (
                        <CollapsItem title={item.title} description={item.description} />
                    ))}
                </div>
                <div className="rigth-inset">
                    <div className="title-sec">سوالات متداول</div>
                    <div className="hyper-text">
                        رایج ترین پاسخ و سوال
                    </div>
                    <div className="third-btn">
                        <a href="#">مشاهده همه</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeventhSection;