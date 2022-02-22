import React from 'react';
import { Flip, Fade } from "react-reveal";


const Box = ({ iconName, title, description }) => {
    return (
        <div className="box">
            <Fade left>
                <div className='box-icon'><i className={`fas ${iconName}`}></i></div>
                <div>{title}</div>
                <div>{description}</div>
            </Fade>
        </div>
    );
}

export default Box;
