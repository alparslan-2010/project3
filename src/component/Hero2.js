import React,{Component} from "react"
import Herom from "../images/Group.png";


class Hero2 extends Component {
    render() {

        const {name} = this.props;
        return (

            <section className="hero">

            <img src={Herom} />
            <h1 className="hero-header">Online Experience</h1>
            <p className="hero-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.
            </p>

        </section>

        )

    }

}

export default Hero2;
