import React from "react"
import styled from "styled-components"

const FormCard = styled.div`
    height: 600px;
    width: 500px;

    border: 1px red solid;
    margin: 10% auto;
    display: flex;
    flex-direction: column;
    box-shadow: 8px 10px 5px #c4c4c4;
`;

const InputContainter = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const InputContainter1 = styled.div`
    display: flex;
    flex-direction:column;
`;

const MessageInput = styled.input`
    margin: 0% auto;
    height: 300px;
    width: 400px;
    box-shadow: 3px 3px 5px inset #c4c4c4;


`;

const InputTop = styled.input`
    margin: 15% auto;
    box-shadow: 3px 3px 2px inset #c4c4c4;
    border-radius:5px

`;

const FooterSection = styled.div`
    margin-top: 5%;
`


function Contact () {

    return(
        <>
        <h1>Contact</h1>
        <FormCard>

        <form>
            {/* ------------------------------------------------ */}
        <InputContainter>
            <InputContainter1>
                <label htmlFor='text'>Name</label>
                <InputTop />
            </InputContainter1>
        <br/>
            <InputContainter1>
            <label htmlFor='email'>email</label>
            <InputTop />
            </InputContainter1>
        </InputContainter>
            <br />
            {/* ------------------------------------------------ */}
            
            <InputContainter1>
            <label htmlFor='text'>Message</label>
            <MessageInput />
           
            </InputContainter1>
            
        </form>

        <p>Whatsapp</p>
        <a href="https://api.whatsapp.com/send?phone=5213312167600&text=&source=&data="><p>33-1216-7600</p></a>

        <FooterSection>
        <p>FOLLOW ME ON ...</p>
        </FooterSection>
        
        </FormCard>
        </>
    )
}

export default Contact