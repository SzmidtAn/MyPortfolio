import React from "react";
import {DetailsAboutMe} from "../Components/DetailsAboutMe";
import {SecondAbout} from "../Components/SecondAbout";
import {ThirdAbout} from "../Components/ThirdAbout";

export class About extends React.Component {


    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className=" About">

                <DetailsAboutMe  />

                <SecondAbout />
                <ThirdAbout />

            </div>
        );
    }


}

