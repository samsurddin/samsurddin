import React from 'react';
import Common from "./Common";
import { NavLink } from 'react-router-dom';
import web from "../src/image/about.jpg";
// import { Switch } from 'react-router-dom';


const About = () => {
  return (
    <>
      <Common name="Welcome to About page"
       imgsrc={web} 
       visit="/Contact" 
       btname="Contact Now" 
       />
    </>
  );
};



export default About;
