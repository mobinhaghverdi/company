import React from 'react';


const Icon = ({title, count, image}) => {
    return ( 
        <div className='fifth-item'>
            <div className="fifth-detail">
                <span>{title}</span>
                <span>{count}</span>
            </div>
            <div className="fifth-icon">
                <img src={`/img/${image}`} alt={title} />
            </div>
        </div>
     );
}
 
export default Icon;    