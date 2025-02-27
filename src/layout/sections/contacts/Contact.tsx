import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <Field placeholder={"Name"}/>
                <Field placeholder={"Email"}/>
                <Field placeholder={"Message"} as={"textarea"} name={"text"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 35vh;
    background-color: #000000;
    padding-top: 100px;
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0 auto;
    padding-top: 50px;
`
const Field = styled.input`
    height: 40px;
    border-radius: 10px;
    box-shadow: 5px 5px gray;
    border: none;
    
`