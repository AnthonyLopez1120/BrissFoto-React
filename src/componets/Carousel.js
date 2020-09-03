import React from "react"

import ReactCardCarousel from "react-card-carousel"

function Carousel () {

    return (
        <>
        <ReactCardCarousel autoplay={ true } autoplay_speed={ 2500 }>
      <img src={require("../images/BrissMain.jpg")} alt='Main photo of briss'/>
      <img src={require("../images/galeriaButton.jpg")} alt='Main photo of briss'/>
      <img src={require("../images/BrissMain.jpg")} alt='Main photo of briss'/>
        
        </ReactCardCarousel>
        </>
    )
}

export default Carousel