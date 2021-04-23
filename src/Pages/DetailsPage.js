import React from "react";
import {StorySpot} from "../Products/StorySpot";
import {PassManager} from "../Products/PassManager";
import {MakeAStory} from "../Products/MakeAStory";

export class DetailsPage extends React.Component {

    constructor() {
        super();

        this.state = {
        }
    }




componentDidMount() {
    window.scrollTo(0, 0)
    const search = this.props.location.search; // returns the URL query String
        const params = new URLSearchParams(search);
        const IdFromURL = this.props.location.aboutProps.id
        this.setState({
            id: IdFromURL
        })
    }

    getProduct = (id) => {

        const getId = id

        switch (getId){
            case 1:
                return <MakeAStory/> ;
            case 2:
                return <PassManager/> ;
            case 3:
                return <StorySpot />;
            default:
                return "error"
                ;


        }

    }

    render() {
        return (
            <div className="DetailsPage">

                { this.getProduct(this.state.id)}

            </div>
        );
    }


}

