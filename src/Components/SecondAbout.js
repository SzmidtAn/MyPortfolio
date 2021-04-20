import React from "react";
import img1 from '../Static/Aneta_Szmidt__6_-removebg-preview (3)1.png';
import img2 from '../Static/Aneta_Szmidt__6_-removebg-preview (4)1.png';
import img3 from '../Static/Aneta_Szmidt__6_-removebg-preview (3)6.png';

export class SecondAbout extends React.Component {

    render() {
        return (
            <div className="SecondAbout">
                <img src={img1} className="img-about" alt="img" />
                <img src={img2} className="img-about" alt="img" />
                <img src={img3} className="img-about" alt="img" />

                 </div>
        );
    }


}


