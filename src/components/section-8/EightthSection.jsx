import react from "react";
import "./Section.css";
import Weblog from "./Weblog";

const EightthSection = () => {

    const { weblogs } = require("../../data/data.json");


    return (
        <div className="eight-wrapper">
            <div className="top-section">
                <div className="above-title">اخبار محبوب</div>
                <div className="sec-sec-title">آخرین از وبلاگ ما</div>
            </div>
            <div className="weblogs">
                {weblogs.map(item => (
                    <Weblog writer={item.writer} image={item.image} time={item.time} title={item.title} description={item.description} />
                ))}
            </div>
        </div>
    );
}

export default EightthSection;