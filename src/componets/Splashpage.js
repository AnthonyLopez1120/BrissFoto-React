import React from "react"
import Carousel from "./Carousel"
import styled from "styled-components"

const WrapperDiv = styled.div`
    
    margin:15%;
`;

const Button = styled.button`
    height: 75px;
    background-color:white;
    margin-top:15%;
`;


function Splashpage () { 


    return(
       <>
            <Carousel/>
       <WrapperDiv>

       
        
            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet risus sit amet ex lacinia laoreet id quis felis. Suspendisse eu felis turpis. Proin nec porttitor lacus, sed bibendum elit. Donec magna quam, ultricies rhoncus gravida ac, aliquam eu est. Vestibulum vitae dapibus libero, quis gravida mauris. Nam magna mi, tristique eget nisi id, feugiat convallis quam. Proin commodo, mauris et suscipit sodales, nisl lorem suscipit lorem, nec volutpat nisl metus eget ligula. Duis eget leo at sapien commodo molestie non sit amet nunc. Suspendisse dapibus et tellus et pellentesque. In tempus augue id vehicula interdum. Aenean convallis auctor arcu in laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi eu metus accumsan, ultrices massa eget, tempus mauris. Cras blandit, nulla vitae egestas maximus, lorem massa varius mauris, at congue justo magna facilisis nisl.

Proin eu rhoncus justo. Integer et sagittis elit. Ut at ipsum sed risus tincidunt luctus sit amet quis ante. Etiam eget tempor arcu. Phasellus lacinia hendrerit commodo. Donec convallis mi diam. Donec efficitur, sapien non faucibus aliquam, quam lacus imperdiet velit, et condimentum est leo at mauris. Donec elementum lorem enim, a porttitor turpis faucibus at. Sed sit amet varius ex. Proin id venenatis ligula, nec facilisis ex. Aliquam pharetra hendrerit nisi, sed vestibulum ante vulputate a. Nunc lobortis, lectus vitae semper viverra, justo eros tincidunt justo, eget aliquet lacus lorem ut purus. Donec vitae molestie erat.
</p> 

        <Button>Call to Action</Button>
                
         
      
        </WrapperDiv>
        </>
    )
}

export default Splashpage