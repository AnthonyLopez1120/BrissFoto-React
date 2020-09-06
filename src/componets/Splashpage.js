import React from "react"
import Carousel from "./Carousel"
import styled from "styled-components"

const WrapperDiv = styled.div`
    
    margin:15%;
`;

const Button = styled.button`
    height: 75px;
    background-color:white;
    /* margin-top:5%; */
`;


function Splashpage () { 


    return(
       <>
            <Carousel/>
       <WrapperDiv> 
           <h1>Hola</h1>           
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet risus sit amet ex lacinia laoreet id quis felis. Suspendisse eu felis turpis. Proin nec porttitor lacus, sed bibendum elit. Donec magna quam, ultricies rhoncus gravida ac, aliquam eu est. Vestibulum vitae dapibus libero, quis gravida mauris. Nam magna mi, tristique eget nisi id, feugiat convallis quam. Proin commodo, mauris et suscipit sodales, nisl lorem suscipit lorem, nec volutpat nisl metus eget ligula. Duis eget leo at sapien commodo molestie non sit amet nunc. Suspendisse dapibus et tellus et pellentesque. In tempus augue id vehicula interdum. Aenean convallis auctor arcu in laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi eu metus accumsan, ultrices massa eget, tempus mauris. Cras blandit, nulla vitae egestas maximus, lorem massa varius mauris, at congue justo magna facilisis nisl.

</p> 

        <Button>Call to Action</Button>
        
        <h2>mas palabras</h2>  
        <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet risus sit amet ex lacinia laoreet id quis felis. Suspendisse eu felis turpis. Proin nec porttitor lacus, sed bibendum elit. Donec magna quam, ultricies rhoncus gravida ac, aliquam eu est. Vestibulum vitae dapibus libero, quis gravida mauris. Nam magna mi, tristique eget nisi id, feugiat convallis quam. Proin commodo, mauris et suscipit sodales, nisl lorem suscipit lorem, nec volutpat nisl metus eget ligula. Duis eget leo at sapien commodo molestie non sit amet nunc. Suspendisse dapibus et tellus et pellentesque. In tempus augue id vehicula interdum. Aenean convallis auctor arcu in laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi eu metus accumsan, ultrices massa eget, tempus mauris. Cras blandit, nulla vitae egestas maximus, lorem massa varius mauris, at congue justo magna facilisis nisl.


</p> 

        </WrapperDiv>
        </>
    )
}

export default Splashpage