import React from "react"
import {Link} from "react-router-dom"



function Splashpage () { 


    return(
        <div id="wrapper">
            <section id="main">
                <header>
                 <span className="avatar"><img src={require("../images/BrissMain.jpg")} alt="Briss working"/></span>
                 <h1>Briceida Flor</h1>
                 <div className="paddingdiv">
                     <p>Fotografia</p>
                 </div> 
                </header>
                <footer>
                    <ul className="icons">
                        <Link 
                            className="avatar1" 
                            style={ {textDecoration: "none", color: "black"} } 
                            to="/Galeria">
                            <img src={require("../images/galeriaButton.jpg")} alt='Foto of a baby'/>
                        <div>Galeria</div>
                        </Link>

                    </ul>

                </footer>

            </section>
           

        </div>
    )
}

export default Splashpage