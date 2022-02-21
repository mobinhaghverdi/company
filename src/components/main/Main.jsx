import React from 'react';
import "./Main.css";
import MainSec from './MainSec';


const Main = () => {
    return (
        <div className='main'>
            <div className="container">
                <div className="col-6-main">
                    <div className="main-title">
                        ما به شرکتهای فناوری اطلاعات کمک می کنیم تا ظرفیت مهندسی را مقیاس بندی کنند
                    </div>
                    <div className="main-paragraph">
                        نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت و گرافیست کاران بعد از آنکه قالب و محتوای مورد نظرشون را ایجاد کردند از یاد می‌برند که متن لورم را از قسمتهای مختلف سایت حذف کنند و یا با متن دیگری جایگزین کنند.
                    </div>
                    <MainSec title="شرکت مجاز" icon="award" paragraph="نکته بعدی در مورد متن ساختگی لورم ایپسوم این است که بعضی از طراحان وبسایت." />
                    <MainSec title="مراسم اهدای جایزه" icon="medal" paragraph="از آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد." />
                </div>
                <div className="col-6-main">
                    <div className="first-main-hero">
                        <img src="/img/work-.jpg" alt="" />
                    </div>
                    <div className="second-main-hero">
                        <img src="/img/work.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;