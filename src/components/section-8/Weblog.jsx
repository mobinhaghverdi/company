import react from "react";
import { Zoom, Fade } from "react-reveal";

const Weblog = ({ writer, image, time, title, description }) => {


    return (
        <div className="weblog">
            <div className="weblog-image">
                <Zoom>
                    <img src={`./img/${image}`} alt="" />
                </Zoom>
            </div>
            <div className="weblog-detail">
                <div className="weblog-data">
                    <span><i className="far fa-calendar"></i><div>{time}</div></span>
                    <span><i className="far fa-user"></i><div>{writer}</div></span>
                </div>
                <Fade left>
                    <div className="weblog-title">
                        {title}
                    </div>
                </Fade>
                <Fade right>
                    <div className="weblog-description">
                        {description}
                    </div>
                    <div className="weblog-more">
                        <span>اطلاعات بیشتر</span>
                        <span><i className="fas fa-angle-left"></i></span>
                    </div>
                </Fade>
            </div>
        </div >
    );
}
export default Weblog;