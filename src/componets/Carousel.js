import React from "react"
import { Fade } from 'react-slideshow-image'
import styled from "styled-components"
import 'react-slideshow-image/dist/styles.css'

const CarouselImg = styled.img`
    height: 90%;
    width:90%;
`;

const properties = {
    duration: 2000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: true,
  
}

function Carousel () {

    return (
        <div className="slide-container">

        <Fade 
            {...properties}
           
        >

          <div className="each-slide">
            <CarouselImg src={require("../images/1.jpg")}/>
              
          </div>

          <div className="each-slide">
          <CarouselImg src={require("../images/2.jpg")}/>
              
          </div>

          <div className="each-slide">
          <CarouselImg src={require("../images/3.jpg")}/>
            
          </div>
          
          <div className="each-slide">
          <CarouselImg src={require("../images/4.jpg")}/>
             
          </div>
          
          <div className="each-slide">
          <CarouselImg src={require("../images/5.jpg")}/>
                 
          </div>
          
          <div className="each-slide">
          <CarouselImg src={require("../images/6.jpg")}/>
                
          </div>
          
          <div className="each-slide">
          <CarouselImg src={require("../images/7.jpg")}/>
                
          </div>
          
          <div className="each-slide">
          <CarouselImg src={require("../images/8.jpg")}/>
               
          </div> 

        </Fade>
      </div>
    )
}

export default Carousel