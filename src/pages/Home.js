import React from 'react'
import Concept from '../components/Concept'
import Footer from '../components/Footer'
import Info from '../components/Info'
import Inspiration from '../components/Inspiration'
import Layout from '../components/Layout'
import Packaging from '../components/Packaging'
import classes from './style/Home.module.css'
const Home = () => {
  return (
    <div className={classes.container}>
      <Layout />
      <Inspiration/>
      <Concept /> 
      <Packaging /> 
      <Info />
      <Footer />
    </div>
  )
}

export default Home