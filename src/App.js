import React from "react";
import {Home} from "./Pages/Home";
import {Navbar} from "./Components/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {About} from "./Pages/About";
import {Footer} from "./Components/Footer";

export class App extends React.Component {




    render() {
        return (
            <div className="App">

                <Router>
                    <div>
                <Navbar />


                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>

                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                <Footer />
                </Router>
            </div>
        );
    }


}



