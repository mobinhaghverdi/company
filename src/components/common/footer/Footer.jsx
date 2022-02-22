import React from 'react';
import "./Footer.css";
import NormalChild from "./NormalChild";

const Footer = () => {

    const { company, solve, contact } = require("../../../data/data.json");

    return (
        <div className='footer-wrapper'>
            <div className="footer-container">
                <div className="col-footer-1">
                    <div className="logo-footer">
                        <img src="./img/logo.png" alt="" />
                    </div>
                    <div className="under-logo-description">
                        نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند.
                    </div>
                </div>
                <div className="col-footer-2">
                    <div className="above-footer-title">
                        شرکت
                    </div>
                    <ul className='company-list'>
                        {company.map(item => (
                            <NormalChild key={item.id} title={item.title} />
                        ))}
                    </ul>
                </div>
                <div className="col-footer-3">
                    <div className="above-footer-title">
                        راه حل ها
                    </div>
                    <ul className='company-list'>
                        {solve.map(item => (
                            <NormalChild key={item.id} title={item.title} />
                        ))}
                    </ul>
                </div>
                <div className="col-footer-4">
                    <div className="above-footer-title">
                        اطلاعات تماس
                    </div>
                    <ul className='last-list'>

                        <li className='contact-s'>
                            <span>
                                <i className='fas fa-map-marker'></i>
                            </span>
                            <a href="#">{contact.location}</a>
                        </li>



                        <li className='contact-s'>
                            <span>
                                <i className='fas fa-envelope'></i>
                            </span>
                            <div>
                                {contact.emails.map(item => (
                                    <li><a href="#">{item}</a></li>
                                ))}
                            </div>
                        </li>


                        <li className='contact-s'>
                            <span>
                                <i className='fas fa-phone-flip'></i>
                            </span>
                            <div>
                                {contact.phonenumber.map(item => (
                                    <li><a href="#">{item}</a></li>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;