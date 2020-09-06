import React from "react"
import { Fade } from 'react-slideshow-image'
import styled from "styled-components"
import 'react-slideshow-image/dist/styles.css'

const CarouselImg = styled.img`
    height: 90%;
    width:90%;
`;

const properties = {
    duration: 1000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: true,
  
}

function Carousel () {

    return (
        <div className="slide-container">

        <Fade {...properties}>

          <div className="each-slide">
            <CarouselImg src={require("../images/1.webp")}/>              
          </div>

          <div className="each-slide">
          <CarouselImg src={require("../images/2.webp")}/>              
          </div>

          <div className="each-slide">
          <CarouselImg src={require("../images/3.webp")}/>            
          </div>
          
          <div className="each-slide">
          <CarouselImg src={require("../images/4.webp")}/>             
          </div>
          
          <div className="each-slide">
          <CarouselImg src={require("../images/5.webp")}/>                 
          </div>
          
          <div className="each-slide">
          <CarouselImg src={require("../images/6.webp")}/>   
          </div>
          
          <div className="each-slide">
          <CarouselImg src={require("../images/7.webp")}/>  
          </div>

          <div className="each-slide">
          <CarouselImg src={require("../images/8.webp")}/>   
          </div> 

        </Fade>
      </div>
    )
}

export default Carousel