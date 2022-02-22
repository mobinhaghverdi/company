import React from 'react';
import "./TopHeader.css";


const TopHeader = () => {
    return (
        <div className='top-header'>
            <div className="container">
                <div className="left-side">
                    <div className="icons">
                        <i className='fab fa-linkedin'></i>
                        <i className='fab fa-twitter'></i>
                        <i className='fab fa-facebook'></i>
                    </div>
                    <div className="title">
                        ساعات اداری: 8:00 الی 16:00
                        <span><i className='fas fa-clock'></i></span>
                    </div>
                </div>
                <div className="right-side">
                    <div className="email">
                        Info@gmail.com
                        <span><i className='fas fa-envelope-open'></i></span>
                    </div>
                    <div className="location">
                        مشهد خیابان بهارستان
                        <span> <i className='fas fa-map-marker-alt'></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;