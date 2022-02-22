import React from 'react';
import "./Main.css";

const MainSec = ({title, icon, paragraph}) => {
    return (
        <div className='main-sec' style={{marginTop: "80px"}}>
            <div className="main-sec-box">
                <div className="main-sec-title">{title}</div>
                <div className="main-sec-paragraph">{paragraph}</div>
            </div>
            <div className="main-sec-icon">
                <i className={`fa-solid fa-${icon}`}></i>
            </div>
        </div>
    );
}

export default MainSec;