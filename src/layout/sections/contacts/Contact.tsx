import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";


export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>

                    <form action="/submit" method="post">
                        <label htmlFor="name">Name:</label>
                        <Field type="text" id="name" name="name" required/>

                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email" required/>

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows={4} cols={50} required></textarea>

                        <Button type={"submit"}>Send message</Button>
                    </form>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 35vh;
    padding-top: 0;
`
const StyledForm = styled.form`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0 auto;
    
    textarea{
        resize: none;
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 2px solid #000;
        border-radius: 5px;
        box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.4);
        background: #fff;
        //border: none;
    }
`
const Field = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    
    border-radius: 5px; 
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.4);
    background: #fff;
    
    //border: none;
    
`