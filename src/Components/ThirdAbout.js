import React from "react";
import img1 from '../Static/Aneta_Szmidt__6_-removebg-preview (3)1.png';
import img2 from '../Static/Aneta_Szmidt__6_-removebg-preview (4)1.png';
import img3 from '../Static/Aneta_Szmidt__6_-removebg-preview (3)6.png';

export class ThirdAbout extends React.Component {

    render() {
        return (
            <div className="ThirdAbout">

                <div className="intressed">
                <h1>Intressad?
                </h1>
                    <h2>
                        I'm looking forword
                        <br/>
                        to get a messge from you!
                    </h2>
                </div>

                <button className="button">
                    <p>Contact me</p>
                    <div className="button__horizontal"></div>
                    <div className="button__vertical"></div>
                </button>

                 </div>
        );
    }


}


