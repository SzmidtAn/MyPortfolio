import React from "react";
import {WorkItem} from "./WorkItem";
import img1 from '../Static/Web 1920 – 1.png';
import img2 from '../Static/passME.png';
import img3 from '../Static/storySpot.png';
import img4 from '../Static/memoryGame.png';
import img5 from '../Static/auctionp.png';

export class Portfolio extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    componentDidMount = () => {
        let item1 = {name: "Make a Story",
        description: ["web app", "mobile-friendly design", "firebase"], img: img1, color: "#FDEED2", id:1 }

        let item2 = {name: "Password Manager",
            description: ["Android", "Product Design", "Google Maps"], img: img2, color:'#C7A3F4', id:2 }

        let item3 = {name: "StorySpot",
            description: ["Android", "Product Design", "Google Maps"], img: img3, color: '#7FC8C7', id:3 }

        let item4 = {name: "Memory Matching Game",
            description: ["Android", "Product Design", "Google Maps"], img: img4, color: "#FFF6E4", id:4 }

        let item5 = {name: "Auction Portal",
            description: ["Android", "Product Design", "Google Maps"], img: img5, color: "#7BA5F6", id:5 }

            let item6 = {name: "StoryfSpot",
                description: ["Android", "Product Design", "Google Maps"], img: "", id:6 }

            let items = [item1, item2, item3, item4, item5, item6]

        this.setState({
           items: items
        })
    }

    handleClick = (title, id) => {
        window.location.href = `details?${title}&id=${id}`;
    }

    itemToItem  = (item) => {
        const title = item.name
        const description = item.description
        const img = item.img
        const color = item.color
        const id= item.id

       return <WorkItem key={title} title={title} description={description} img={img} color={color} id={id} showItemsDescription={this.handleClick}/>;
    }

    render() {
        return (
            <div className="Portfolio">


                {this.state.items.map(this.itemToItem)}


            </div>
        );
    }


}


