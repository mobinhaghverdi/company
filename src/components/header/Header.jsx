import React from 'react';
import "./Header.css";


const Header = () => {
    return (
        <div className='header'>
            <div className="container header-wrap">
                <div className="header-col-6">
                    <div className="hero-img">
                        <img src="/img/hero.png" alt="" />
                        <img src="/img/back-hero.png" alt="" />
                    </div>
                </div>
                <div className="header-col-6">
                    <div className="header-t-title">سیستم های آی تی را بهینه کنید</div>
                    <div className="header-m-title">ایجاد یک بهتر <br /> <span>راه حل های آی تی</span></div>
                    <div className="header-p-title">نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند.</div>
                    <div className="header-btn">  <a href="#"> همین الان شروع کن  <i className='fas fa-arrow-alt-circle-left'></i></a> </div>
                </div>
            </div>
        </div>
    );
}

export default Header;