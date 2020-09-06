import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const NavWrapper = styled.header`
   
    top: 0 ;
    background:white;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    padding: 20px 20px 20px 20px;
    position: sticky;
    width: 100%;
    box-shadow: 0px 5px 5px #c4c4c4;
    height: 170px;
	flex-wrap:wrap;
    z-index: 11;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.5rem;
    
    
`;

const StyledLink = styled(Link)`
    text-decoration:none;
    color: dimgray;
    &:hover {
     
      border-bottom: dimgray solid 1px;
    }
`;
const Imgdiv = styled.div`
 height:100%;
 width: 100%;
 

`;

const Logo = styled.img`
    
    max-width: 75%; 
    max-height: 75%; 
    margin-top: 1%;
`;


function Nav () {

    return(
    <>
    <NavWrapper>

        <Imgdiv>
            <Logo src={require("../images/logo.png")} alt='logo for briceida flor'/>
        </Imgdiv>
        <StyledLink to="/">HOME</StyledLink>
        <StyledLink to="/Blog">BLOG</StyledLink>
        <StyledLink to="/About">ABOUT</StyledLink>
        <StyledLink to="/Experiencias">EXPERIENCIAS</StyledLink>
        <StyledLink to="/Contact">CONTACTO</StyledLink>

    </NavWrapper>       
    </>
    )
}

export default Nav