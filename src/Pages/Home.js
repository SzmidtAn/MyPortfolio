import React from "react";
import {Header} from "../Components/Header";
import {Portfolio} from "../Components/Portfolio";
import {Contact} from "../Components/Contact";

export class Home extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            opacity: 1,
            clientX : 100,
            clientY : 100,

        };
    }


    componentDidMount() {
        document.addEventListener("mousemove", this.mouseListener)
    }

    mouseListener = (e) => {
        this.setState({
           clientX : e.clientX-25,
           clientY : e.clientY-20,
        })
    }



    render() {
        return (
            <div className="Home">

               <Header />
               <Portfolio />
               <Contact />
                <div className="cursor cursor--small" style={{left: this.state.clientX, top: this.state.clientY}}/>

            </div>
        );
    }


}

