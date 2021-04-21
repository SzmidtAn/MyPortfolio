import React from "react";

export class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: "hidden"

        };
    }

    componentDidMount() {
    document.addEventListener('scroll', this.handleState);
    }

    handleState = () => {
                 let top  = window.pageYOffset + window.innerHeight
                     let component = document.querySelector('.Contact');
        if (component){
                let isVisible = top > component.offsetTop

            if (isVisible) {
        this.setState({
            isVisible: "block-reveal"
        })
                document.removeEventListener('scroll', this.handleState);
            }
        }
    }

    render() {
        return (
            <div className="Contact">

                <div className="block-effect" >


                <h2 className={this.state.isVisible}>
                    Contact with me!
                    <br/>
                   </h2>
                   <h2 className={this.state.isVisible  + " two" } >I love new challenges</h2>
                </div>


                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel arcu fringilla, dignissim ligula nec,<br/> iaculis dui. Nulla facilisi. Donec rutrum convallis mollis. Praesent in semper ex. Sed sem nisi, laoreet in. <br/><br/> Vestibulum in, pretium non eros. Duis nec enim turpis. Suspendisse massa justo, placerat vulputate dignissim non, maximus ut metus. Aliquam sodales eros id metus. <br/> <br/>Sollicitudin fringilla. Aenean lectus magna, semper a luctus quis, dapibus vel dolor.</h3>





            </div>


        )
    }


}


