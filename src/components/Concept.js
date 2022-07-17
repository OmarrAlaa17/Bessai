import React from "react";
import classes from "./style/Concept.module.css"
import Slider from "../components/Slider"

const Concept = () => {
    return(
        <div className={classes.Concept}>
            <div className={classes.Slider}>
                <Slider />
            </div>
            <div className={classes.text}>
                <h1>Concept</h1>
                <h2>Creating  alternative eco-friendly  furniture, with just one piece of furniture that you can Change according to your need, additional too bringing your creativity to the floor and creating a new creative piece that is made specially for you.</h2>
                <div className={classes.uses}>
                    <div>
                    <p>Lighting unit</p>
                    </div>
                    <div>
                    <p>Side table</p>
                    </div>
                    <div>
                    <p>Plant pot</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Concept;