import React from "react";
import {Home} from "./Pages/Home";
import {Navbar} from "./Components/Navbar";
import  {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect

} from "react-router-dom";
import {About} from "./Pages/About";
import {Footer} from "./Components/Footer";
import {DetailsPage} from "./Pages/DetailsPage";

export class App extends React.Component {


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
            <div className="App">
                <div id="cou" className="cursor cursor--small red" style={{background: this.state.cursorColor, transform: this.state.transform, left: this.state.clientX, top: this.state.clientY}}/>

                <Router  basename={`${process.env.PUBLIC_URL}/`}>
                    <div>
                <Navbar />


                        <Switch>

                            <Route exact path="/details/" component={DetailsPage} />


                            <Route exact path="/about/" component={About} />

                            <Route path="/" component={Home}>
                            </Route>

                        </Switch>
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }


}



