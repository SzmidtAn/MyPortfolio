import React from "react";
import img1 from '../Static/storymap.png';
import img2 from '../Static/131330286_4079066262122438_6398664257654698935_n.png';
import img3 from '../Static/131314759_221929029334767_3525483112211750233_n.png';
import logoStory from '../Static/logo_transparent_small.png';
import imgBack from '../Static/2.png';
import imgand from '../Static/icons/icons8-android-os-144.png';
import imggm from '../Static/icons/icons8-google-maps-144.png';
import imgfb from '../Static/icons/icons8-firebase-144.png';
import imgko from '../Static/icons/icons8-kotlin-144.png';

export class StorySpot extends React.Component {



    render() {
        return (
            <div className="StorySpot" >

                <div className="StorySpotHeader" style={{background:  `url(${imgBack})`}}>
              <div>
               <h1>StorySpot</h1>
                <h2>Share your stories
                    <br/>
                    and explore the world</h2>
              </div>
                    <img src={img1} className="App-logo"  alt="logo" />

                </div>

                <div className="StorySpotBody">
                    <img src={logoStory} className="App-logo"  alt="logo" />

                    <div>
                        <h1>
                            Lyssen what you want,
                            <br/>
                            where you want
                        </h1>
                    <img src={img2} className="red"  alt="logo" />
                    </div>

                    <div>
                    <img src={img3} className="red"  alt="logo" />
                        <h1>
                            Lyssen what you want,
                            <br/>
                            where you want
                        </h1>                    </div>

                </div>


                <div className="BlueGradient">

                    <div>

                    <img src={imgand} className="App-logo"  alt="logo" />
                    <img src={imgfb} className="App-logo"  alt="logo" />
                    <img src={imgko} className="App-logo"  alt="logo" />
                    <img src={imggm} className="App-logo"  alt="logo" />

                    </div>

                </div>


            </div>
        );
    }


}

