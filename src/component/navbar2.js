import React from "react"


import logo from "../images/airbnb.png"




class Navbar2 extends React.Component {
    render() {
        return (

            <nav className="nav">
                <img src={logo} className="nav-logo" alt="airbnb-logo" />
            </nav>

        )

    }

}

export default Navbar2;
