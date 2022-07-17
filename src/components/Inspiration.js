import React from "react";
import classes from "./style/Inspiration.module.css"
import farafraimg from "../img/Farafra.jpg"
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"

const Inspiration = () => {
    return ( <div id="ins" className={classes.Inspiration}>
        <div className={classes.text}>
            <h1> Inspired from the Frafra Oasis</h1>
            <p>The project name "Bessai" is names after one if the oldest wells located in Farafra Castle. And to support “حياه كريمه” The project provided job opportunities to the citizens in Farfra, by taking their hand craft and creating new designs</p>
            <h2> With the supervision and the assisiation of: </h2>
            <ul>
                <li>
                    <img src={img1} />
                </li>
                <li>
                    <img src={img2} />
                </li>
                <li>
                    <img src={img3} />
                </li>
            </ul>
        <div className={classes.dum}/>   
        </div>
        <div className={classes.farafra}>
            <img src={farafraimg}/>
        </div>
    </div>);
}
export default Inspiration