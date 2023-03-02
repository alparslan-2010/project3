import React from "react";

import Herom from "../images/Group.png";

function Hero () {

    return (

        <section className="hero">

            <img src={Herom} />

            <p>deployy</p>
            <h1 className="hero-header">Online Experience</h1>
            <p className="hero-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.
            </p>

        </section>
    );


}

export default Hero;