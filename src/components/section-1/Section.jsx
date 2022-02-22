import React from 'react';
import "./Section.css";
import { Flip, Fade, Zoom } from "react-reveal";
import Box from "./Box";


const Section = () => {

    const { howbox } = require("../../data/data.json");

    return (
        <div className='section'>
            <img className='innerflow' src="./img/3-1.png" alt="" />
            <div className="container section-cont">
                <div className="col-section-8">
                    {howbox.map(item => (
                        <Box iconName={item.iconname} title={item.name} description={item.paragraph}  />
                    ))}
                </div>
                <div className="col-section-4">
                    <div className="title-sec">
                        چرا ما را انتخاب کنید
                    </div>
                    <Zoom left>
                        <div className="hyper-text">
                            راه حل های IT اختصاصی برای مشاغل شما
                        </div>
                    </Zoom>
                    <Flip>
                        <div className="paragraph">
                            نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند از یاد می‌برند که متن لورم را از قسمتهای مختلف سایت حذف کنند و یا با متن دیگری جایگزین کنند. به همین دلیل اغلب اوقات ما با وبسایتهایی مواجه می‌شویم که در گوشه و کنار صفحات آنها متن لورم ایپسوم هنوز وجود دارد.
                        </div>
                    </Flip>
                    <Fade>
                        <div className="end-section">
                            <span>ویترین ویدئو</span>
                            <a href="#"><i className='fas fa-circle-play'></i></a>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Section;