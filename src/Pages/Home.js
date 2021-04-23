import React from "react";
import {Header} from "../Components/Header";
import {Portfolio} from "../Components/Portfolio";
import {Contact} from "../Components/Contact";

export class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            opacity: 1,
            cursorColor: "#e5e5e5",
            clientX : 100,
            clientY : 100,

        };
    }


    componentDidMount() {
        window.scrollTo(0, 0)
        document.addEventListener("mousemove", this.mouseListener)
        document.addEventListener("mouseover", this.mouseListener2)
    }

    mouseListener = (e) => {



        this.setState({
           clientX : e.clientX-25,
           clientY : e.clientY-20,
        })
    }

    mouseListener2 = (e) => {

        if (e.target.className === "red"){

            this.setState({
                cursorColor: "red",
                transform: "scale(1.5)"
            })
        }else {
            this.setState({
                transform: "none",
                cursorColor: "#e5e5e5"
            })
        }

    }



    render() {
        return (
            <div className="Home">

               <Header />
               <Portfolio />
               <Contact />

                <div id="cou" className="cursor cursor--small red" style={{background: this.state.cursorColor, transform: this.state.transform, left: this.state.clientX, top: this.state.clientY}}/>
            </div>
        );
    }


}

