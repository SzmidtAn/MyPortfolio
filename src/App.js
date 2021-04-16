import React from "react";
import {Home} from "./Pages/Home";
import {Navbar} from "./Components/Navbar";

export class App extends React.Component {




    render() {
        return (
            <div className="App">
                <Navbar />
               <Home />
                <div className="cursor cursor--small big" />
            </div>
        );
    }


}



