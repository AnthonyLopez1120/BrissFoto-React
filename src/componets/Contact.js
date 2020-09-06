import React from "react"
import styled from "styled-components"

const FormCard = styled.div`
    height: 600px;
    width: 500px;

    border: 1px red solid;
    margin: 10% auto;
    display: flex;
    flex-direction: column;
`;

const InputContainter = styled.div`
    display: flex;
    

`

const Input = styled.input`
    height: 300px;
    width: 300px;


`;

const InputTop = styled.input`
    margin: 15% auto;

`;


function Contact () {

    return(
        <>
        <h1>Contact</h1>
        <FormCard>

        <form>
        <InputContainter>
            <label for='text'>Name</label>
            <InputTop>
            </InputTop>
        <br/>
            <label for='email'>email</label>
            <InputTop>
            </InputTop>
        </InputContainter>
            <br />

            <label for='text'>Message</label>
            <Input>
            </Input>
            
        </form>

        </FormCard>
        </>
    )
}

export default Contact