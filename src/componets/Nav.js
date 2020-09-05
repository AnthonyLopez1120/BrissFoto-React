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
    height: 270px;
	flex-wrap:wrap;
	z-index: 11;
`;

const StyledLink = styled(Link)`
    text-decoration:none;
    color: black
`;
const Imgdiv = styled.div`
 height:200px;
 width: 100%;

`;

const Logo = styled.img`
    
    max-width: 100%; 
    max-height: 100%; 
    font-family: 'Quicksand', sans-serif;
   
`;


function Nav () {

    return(
    <>
    <NavWrapper>
        <Imgdiv>
            <Logo src={require("../images/logo.png")} alt='logo for briceida flor'/>
        </Imgdiv>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/Blog">Blog</StyledLink>
        <StyledLink to="/About">About</StyledLink>
        <StyledLink to="/Experiencias">Experiencias</StyledLink>
        <StyledLink to="/Contact">Contact</StyledLink>
    </NavWrapper>       
    </>
    )
}

export default Nav