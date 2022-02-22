import React, { useState } from 'react';

const CollapsItem = ({ title, description }) => {

    const [CollStatus, setCollStatus] = useState(false)

    return (
        <div className='collapse'>
            <button type="button" onClick={() => setCollStatus(!CollStatus)} className="collapsible">
                <span>{title}</span>
                <span><i className={CollStatus ? 'fas fa-angle-left caret-active' : 'fas fa-angle-left caret-active-f'}></i></span>
            </button>
            <div className={CollStatus ? 'content coll-t' : 'content coll-f'} >
                <p>{description}</p>
            </div>
        </div>
    );
}

export default CollapsItem;