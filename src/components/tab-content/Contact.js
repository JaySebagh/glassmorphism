import React from "react";
import '../../assets/styles/contact.css'

const TabContent4 = () => {
    return(
        <div className="contact-container">
            <div className="site-container">
                <div className="site-sub-container">
                    <h1>GITHUB</h1>
                    <a className="link"
                        href="https://github.com/jaysebagh/"
                        target="_blank"
                        rel="noreferrer"
                    >Link<i class="fa fa-external-link fal" aria-hidden="true"></i></a>
                </div>
                <div className="line"></div>
                <div className="site-sub-container">
                    <h1>LINKEDIN</h1>
                    <a className="link"
                        href="https://linkedin.com/in/jean-francois-sebagh/"
                        target="_blank"
                        rel="noreferrer"
                    >Link<i class="fa fa-external-link fal" aria-hidden="true"></i></a>
                </div>
                <div className="line"></div>
                <div className="site-sub-container">
                    <h1>RESUME</h1>
                    <a className="link"
                        href="https://drive.google.com/file/d/1zL4HrAj_xXZvbvIuaQVwTdan82AcakSe/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >Link<i class="fa fa-external-link fal" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="email">
                JAYSEBAGH@GMAIL.COM
            </div>
        </div>
    )
}

export default TabContent4;