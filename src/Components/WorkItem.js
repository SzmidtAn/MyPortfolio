import React from "react";

export const WorkItem = ({title, description, img, color,  id, showItemsDescription}) => {
    return (
            <div className="WorkItem red">

                <body className=""  style={{background: color }}>

                <img src={img} className="App-logo" alt="logo" />
                </body>

                <div className="ItemFooter">
                  <h2 className="red">{title}</h2>
                    <div className="ItemFooterDetails">

                    <h4>{description[0]}</h4>
                    <span className="dot"/>
                    <h4>{description[1]}</h4>
                    <span className="dot"/>
                    <h4>{description[2]}</h4>
                    </div>

                </div>

            </div>
        );


}
