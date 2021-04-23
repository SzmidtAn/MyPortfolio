import React from "react";
import img1 from "../Static/passmepage.png";
import img2 from "../Static/checked (1).png";
import img3 from "../Static/loading.png";
import img4 from "../Static/locker.png";
import img5 from "../Static/different-squares.png";
import img6 from "../Static/face-detection.png";
import img7 from "../Static/—Pngtree—scan code with mobile phone_5765181.png";
import img8 from "../Static/organize.png";
import img9 from "../Static/lock-7-xxl.png";
import img10 from "../Static/storymap.png";
import imgswif from "../Static/icons/icons8-swift-144.png";
import imggit from "../Static/icons/icons8-git-144.png";
import imgapp from "../Static/icons/apple.png";
import imggcordata from "../Static/icons/imgbin_core-data-software-framework-database-png.png";

export class PassManager extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="PasswordManager">

                <div className="PassMeHeader">
                    <div>
                    <img src={img9} className="red"  alt="logo" />
                    <h1>Password Manager</h1>
                    </div>
                <img src={img1} className="red"  alt="logo" />
                </div>


                <div className="PassMeTiles">
                    <div>
                        <img src={img2} className="red"  alt="logo" />
                        <h1>SAVE</h1>
                    </div>

                    <div>
                        <img src={img3} className="red"  alt="logo" />
                        <h1>EASY</h1>
                    </div>

                    <div>
                        <img src={img8} className="red"  alt="logo" />
                        <h1>ORGANIZED</h1>
                    </div>
                </div>


                <div className="PassMeBody">

                    <div>
                        <img src={img4} className="App-logo"  alt="logo" />
                        <h1>Your data is saved only
                            <br/>
                            in your local storage
                            </h1>
                    </div>

                    <div>
                        <h1>Group yor passwords into categories
                            <br/>
                            and have oftast used Always nearast </h1>
                        <img src={img5} className="App-logo"  alt="logo" />
                    </div>

                    <div>
                        <img src={img6} className="App-logo"  alt="logo" />
                        <h1>Use Face ID or pin code
                            <br/>
                            to fast logga in </h1>
                    </div>

                </div>

                <div className="PassMeScanner">

                    <h1>NEW FUNCTION WALLET!</h1>
                    <h2>Save yours credit to wallet</h2>
                  <div>
                    <p>Easy scan your card
                        <br/>
                        to add a new one!</p>
                    <img src={img7} className="App-logo"  alt="logo" />
                  </div>

                </div>

                <div className="PassMeIcons">
                    <div>
                        <img src={imgswif} className="App-logo"  alt="logo" />
                        <img src={imggit} className="App-logo"  alt="logo" />
                        <img src={imgapp} className="App-logo"  alt="logo" />
                        <img src={imggcordata} className="App-logo"  alt="logo" />

                    </div>
                </div>


            </div>
        );
    }


}

