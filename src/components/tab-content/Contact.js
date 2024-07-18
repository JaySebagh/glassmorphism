import React, { useState } from "react";
import '../../assets/styles/contact.css'

const TabContent4 = () => {
    const emailCopy = "jaysebagh@gmail.com"

    const delay = async (ms) => {
        return new Promise((resolve) => 
            setTimeout(resolve, ms));
    };
    
    const [copyText, setCopyText] = useState(" ");

    const [fade, setFade] = useState(0)

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
            <p className="copied"
                fade={fade}
                onAnimationEnd={() => setFade(0)}
            >{copyText}</p>
            <div
                className="email"
                onClick={ async () => {
                    navigator.clipboard.writeText(emailCopy);
                    setFade(1)
                    setCopyText("COPIED!");
                    await delay(300);
                    setCopyText(" ");
                }}
                
            >
                JAYSEBAGH@GMAIL.COM
            </div>
        </div>
    )
}

export default TabContent4;