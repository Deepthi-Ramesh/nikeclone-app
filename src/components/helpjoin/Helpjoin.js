import React from "react";
import { Icon } from '@iconify/react';
import "./helpjoin.css";
function Helpjoin(){
    return(
        <div className="head-help">
            <div className="icon-jordan">
            <Icon icon="simple-icons:jordan" fontSize={"1.2rem"}/>
            </div>
            <ul className="menu-items">
                <li><a href="#">Help</a></li>
                <li>|</li>
                <li><a href="#">Join Us</a></li>
                <li>|</li>
                <li><a href="#">Sign In</a></li>
            </ul>
        </div>
    )
}
export default Helpjoin