import React from "react";
import debounce from 'lodash.debounce';


export class Header extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            opacity: 1

        };
    }


    listenScrollEvent = e => {

        if (window.scrollY === 0) {
            this.setState({
                opacity: 1
            })
        }

        else {
            this.setState({
                opacity: 1- (window.scrollY / 320 )
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }



    render() {
        return (
            <div className="Header" style={{opacity: this.state.opacity}}>

                    <p>
                     <span>Hello,</span>
                        <br/>
                        I’m Aneta Szmidt,
                        <br/>
                       a Web & Mobile App Developer
                        <br/>
                        freelance from Stockholm.
                    </p>


            </div>
        );
    }


}


