import React from "react";
import {NavLink} from "react-router-dom";

export class Navbar extends React.Component{



    render() {
        return (
            <div className="Navbar" >

                        <NavLink to='/'   activeStyle={{color: "var(--grey)"}}  exact='true'  style={{ textDecoration: 'none', color: 'var(--blue)' }}>

                                    <h4 className="red">Aneta Szmidt</h4>
                        </NavLink>

                        <NavLink to='/about'  activeStyle={{color: "var(--grey)"}}  style={{ textDecoration: 'none', color: 'var(--blue)'}}>
                                    <h4 className="red">About</h4>
                        </NavLink>




            </div>
        );
    }
}