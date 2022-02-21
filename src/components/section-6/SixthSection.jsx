import React from 'react';
import Member from './Member';
import "./Section.css";

const SixSection = () => {


    const { team } = require("../../data/data.json");

    return (
        <div className='sixth-wrapper'>
            <div className="top-section">
                <div className="above-title">تیم تخصصی</div>
                <div className="sec-sec-title">با تیم ما آشنا شوید</div>
            </div>
            <div className="team">
                {team.map(item => (
                    <Member key={item.id} name={item.name} job={item.job} image={item.image} />
                ))}
            </div>
        </div>
    );
}

export default SixSection;