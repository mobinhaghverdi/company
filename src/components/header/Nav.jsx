import React, { useState } from 'react';
import "./Nav.css"
import NavItem from './NavItem';

const Nav = () => {
    const [mobileView, setMobileView] = useState(false);
    let navItems = [
        {
            id: 1,
            name: "دموها",
            angle: true,
            url: "#",
        },
        {
            id: 2,
            name: "شرکت",
            angle: true,
            url: "#",
        },
        {
            id: 3,
            name: "خدمات",
            angle: true,
            url: "#",
        },
        {
            id: 4,
            name: "مطالعات موردی",
            angle: true,
            url: "#",
        },
        {
            id: 5,
            name: "وبلاگ",
            angle: true,
            url: "#",
        },
        {
            id: 6,
            name: "تماس با ما",
            angle: false,
            url: "#",
        },
    ]


    return (
        <div className='nav-container'>
            <div className={mobileView ? 'sec-1' : 'nav-min'}>
                <div className="contact">
                    <span>با ما تماس بگیرید!</span>
                    <span>09123456789</span>
                </div>
                <div className="phone">
                    <i className="fa-solid fa-phone-flip"></i>
                </div>
            </div>
            <div className={mobileView ? 'sec-2' : 'nav-min'}>
                <div className="nav">
                    <ul>
                        {navItems.reverse().map((item) => (
                            <NavItem key={item.id} id={item.id} name={item.name} angle={item.angle} url={item.url} />
                        ))}
                    </ul>
                </div>
            </div>  
            <div className="sec-3">
                <div className="logo">
                    <div className="bars" onClick={() => setMobileView(!mobileView)}><i className='fas fa-bars'></i></div>
                    <img src="/img/logo.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Nav;