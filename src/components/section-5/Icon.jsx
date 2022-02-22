import React from 'react';
import { Zoom } from "react-reveal";

const Icon = ({ title, count, image }) => {
    return (
        <div className='fifth-item'>
            <Zoom>
                <div className="fifth-detail">
                    <span>{title}</span>
                    <span>{count}</span>
                </div>
                <div className="fifth-icon">
                    <img src={`/img/${image}`} alt={title} />
                </div>
            </Zoom>
        </div>
    );
}

export default Icon;    