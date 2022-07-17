import React from 'react'
import classes from './style/layout.module.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Layout = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.background}></div>
       <div className={classes.textBox}>
          <h1> Bessai </h1>
                <a className={classes.btn} href="#ins">
                    <ArrowUpwardIcon sx= {{ fontSize:'40px'}} className={classes.arr}/>
                </a> 
       </div>
        
    </div>
  )
}

export default Layout