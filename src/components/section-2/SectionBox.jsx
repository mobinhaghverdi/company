import react from "react";


const SectionBox = ({title, paragraph, icon}) => {
    return (
        <div className="sec-box">
            <div className="section-icon">
                <img src={`/img/${icon}`} alt="" />
            </div>
            <div className="section-above-t">
                {title}
            </div>
            <div className="section-above-p">
                {paragraph}
            </div>
            <div className="spans">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default SectionBox;