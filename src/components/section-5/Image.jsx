import React from 'react';

const Image = ({ image, title, paragraph }) => {
    return (
        <div className="image">
            <img src={`./img/${image}`} alt="" />
            <div className="image-details">
                <span>
                    <span>{title}</span>
                    <p>{paragraph}</p>
                </span>
                <span><i className='fas fa-plus'></i></span>
            </div>
        </div>
    );
}

export default Image;