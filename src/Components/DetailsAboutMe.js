import React from "react";
import img from '../Static/IMG_20180829_162211 (2).png';

export class DetailsAboutMe extends React.Component {

    constructor(){
        super();
        this.state = {
            loaded: false
        };
    }

    render() {
        return (

            <div className="DetailsAbout ">
                <h1 className="">Nice to meet you!</h1>
                <div className="imgAbout ">

                <img src={img} className="img-about" alt="img"   onLoad={() => this.setState({loaded: true})}
                />
                <div  id="triangle-left"/>
                <div id="triangle-left"/>
                <p className="red" style={{color: 'black'}}>Student in programming area with specialization in Application Development.
                    Almost a year ago I started coding and since then programming has become my biggest interest. Right now I am looking for an internship, and would also like to participate in an exciting project, where I can develop my current knowledge in Android and iOS.
                  <br/>
                  <br/>
                    I'm studing at the IT-Högskolan in Stockholm which feels really fun! In addition, I spend much of my free time creating my first own project - a website similar to the popular platform in several countries www.vinted.com or Marketplace, where the user has the opportunity to sell or buy clothes from others, and a mobile application Just Perfect with the same role.

                 <br/>
                 <br/>
                    Feel free to look at my GitHub, where I save my projects.
                    Moreover, I'm educated in media, communication and journalism, which I read at the University in Warsaw. Thanks to that, I have gained a broad knowledge of the new technologies - which I'm really passionate about!</p>
                </div>

            </div>
        );
    }


}


