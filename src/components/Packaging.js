import React from "react";
import classes from "./style/Packaging.module.css"
import P from "../img/Pack.jpg"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Packaging = () => {
    return(
        <div className={classes.Packaging}>
                <h1>Packaging</h1>
                <div className={classes.Organize}>
                <div className={classes.uses}>
                    <div className={classes.first}>
                    <h2>Assembly</h2>
                    <p>Easily assembly, any one +12 can assemble the piece</p>
                    <h2>Safe</h2>
                    <p>As we care about our customers the box is designed to be easily carried</p>
                    </div>
                    <div className={classes.second}>
                    <h2>Recycle</h2>
                    <p>You can re use the box to increase the sustainability </p>
                    <h2>Instruction sheet</h2>
                    <p>How to assemble the piece step by step will be included</p>
                    </div>
                </div>

                    <div className={classes.p}>
                        <img src={P}/>
                    </div>

                <div className={classes.uses}>
                    <div className={classes.third}>
                    <h2>Material used</h2>
                    <p>Palm tree leaves</p>
                    <p>Wood</p>
                    <p>Metal</p>
                    </div>
                    <div className={classes.fourth}>
                        <a href="/Shop" className={classes.btn}>
                            <p>Order now</p>
                        </a>
                    </div>
                </div>
                    
                </div>
        </div>
    );
}

export default Packaging;