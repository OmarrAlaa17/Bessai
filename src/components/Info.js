import React from "react";
import classes from "./style/Info.module.css"
import farafraimg from "../img/Profile.jpeg"
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"

const Info = () => {
    return ( <div id="ins" className={classes.Inspiration}>
        <div className={classes.farafra}>
            <img src={farafraimg}/>
        </div>
        <div className={classes.text}>
            <h1> I am Roba Fouad, </h1>
            <h2>A senior year student, currently pursuing Bachelors in Furniture design.</h2>
            <p>As a designer, I like minimalistic and contemporary approach towards my work and design. I belive in exploring and adapting to the various things around me always ensuring to expand my skill set, learn something new and communicate my ideas and concepts through sketching.Other than design, my interest also lies in the presentation, fashion industry and environment sustainability where I would like to explore more and receive acknowledement for the same.</p>
        </div>
    </div>);
}
export default Info