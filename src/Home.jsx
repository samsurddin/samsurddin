import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/image/download.png";
// import { Switch } from 'react-router-dom';
import Common from "./Common";


const Home = () => {
  return (
    <>
      <Common name="Grow your business with"
       imgsrc={web} 
       visit="/Service" 
       btname="Get Start" 
       />
    </>
  );
};



export default Home;
