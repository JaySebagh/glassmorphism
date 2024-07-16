import React from "react";
import pfp from '../assets/images/pfp.png'
import '../assets/styles/landing.css'

const Landing = () => {
    return(
        <div className="landing-container">
            <img src={pfp} className="pfp"/>
            <div className="card-container">
                <h1 className="name">JEAN-FRANCOIS SEBAGH</h1>
                <div className="code-container">
                    <p className="code">&lt;<span className="div-color">div </span><span className="class-color">className</span>="software-engineer"&gt;</p>
                    <p className="code2">&lt;<span className="div-color">p</span>&gt;Full-Stack Web & CS Software Engineer&lt;<span className="div-color">&frasl;p</span>&gt;</p>
                    <p className="code">&lt;<span className="div-color">&frasl;div</span>&gt;</p>
                </div>
            </div>
        </div>
    )
};

export default Landing;