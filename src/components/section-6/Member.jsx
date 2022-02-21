import React from 'react';


const Member = ({ name, job, image }) => {
    return (
        <div className="team-member">
            <div className="member-image">
                <img src={`./img/${image}`} alt={name} />
                <div>
                    <span>
                        <i className='fas fa-plus'></i>
                    </span>
                </div>
            </div>
            <div className="member-data">
                <span>{name}</span>
                <span>{job}</span>
            </div>
        </div>
    );
}

export default Member;