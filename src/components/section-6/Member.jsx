import React from 'react';
import {Fade} from "react-reveal";

const Member = ({ name, job, image }) => {
    return (
        <div className="team-member">
            <div className="member-image">
                <Fade right>
                    <img src={`./img/${image}`} alt={name} />
                </Fade>
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