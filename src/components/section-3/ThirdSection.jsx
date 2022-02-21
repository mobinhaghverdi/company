import react from "react";
import "./Section.css"

const ThirdSection = () => {

    return (
        <div className="third-section">
            <div className="left-wrapper">
                <div className="left-img">
                    <img src="/img/3.jpg" alt="" />
                </div>
            </div>
            <div className="right-wrapper">
                <div className="rigth-inset">
                    <div className="title-sec">درباره کارها</div>
                    <div className="hyper-text">
                        مورد اعتماد
                        5000+
                        <br />
                        مشتریان خوشحال
                    </div>
                    <div className="paragraph">
                        طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود.
                    </div>
                    <div className="bottom-lines">
                        <i className="fas fa-check"></i>
                        <span>100% رضایت مشتری</span>
                    </div>
                    <div className="bottom-lines">
                        <i className="fas fa-check"></i>
                        <span>کارگر کلاس جهانی</span>
                    </div>
                    <div className="third-btn">
                        <a href="#">پروژه های انجام شده</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ThirdSection;
