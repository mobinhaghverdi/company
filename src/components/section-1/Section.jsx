import React from 'react';
import "./Section.css";



const Section = () => {
    return (
        <div className='section'>
            <img className='innerflow' src="./img/3-1.png" alt="" />
            <div className="container section-cont">
                <div className="col-section-8">
                    <div className="box">
                        <div className='box-icon'><i className='fas fa-earth-americas'></i></div>
                        <div>پردازش ابری</div>
                        <div>تعجب مجموعه بیان تحسین راه تحسین</div>
                    </div>
                    <div className="box">
                        <div className='box-icon'><i className="fa-solid fa-screwdriver-wrench"></i></div>
                        <div>مشاور فناوری اطلاعات</div>
                        <div>تعجب مجموعه بیان تحسین راه تحسین</div>
                    </div>
                    <div className="box">
                        <div className='box-icon'><i className='fas fa-file-import'></i></div>
                        <div> پشتیبان گیری و بازیابی</div>
                        <div>تعجب مجموعه بیان تحسین راه تحسین</div>
                    </div>
                    <div className="box">
                        <div className='box-icon'><i className="fa-solid fa-server"></i></div>
                        <div>امنیت سایبری</div>
                        <div>تعجب مجموعه بیان تحسین راه تحسین</div>
                    </div>
                </div>
                <div className="col-section-4">
                    <div className="title-sec">
                        چرا ما را انتخاب کنید
                    </div>
                    <div className="hyper-text">
                        راه حل های IT اختصاصی برای مشاغل شما
                    </div>
                    <div className="paragraph">
                        نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند از یاد می‌برند که متن لورم را از قسمتهای مختلف سایت حذف کنند و یا با متن دیگری جایگزین کنند. به همین دلیل اغلب اوقات ما با وبسایتهایی مواجه می‌شویم که در گوشه و کنار صفحات آنها متن لورم ایپسوم هنوز وجود دارد.
                    </div>
                    <div className="end-section">
                        <span>ویترین ویدئو</span>
                        <a href="#"><i className='fas fa-circle-play'></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;