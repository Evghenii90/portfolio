import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle.tsx";
import { Button } from "../../../components/Button.tsx";
import { Container } from "../../../components/Container.tsx";
import { SectionText } from "../../../components/SectionText.tsx";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {theme} from "../../../components/styles/Theme.tsx";

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const sendEmail = (e:any) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm("service_yb83ca7", "template_8eq8bdq", formRef.current, "024m4sxfffq_gdzis")
            .then(() => {
                console.log("Email sent successfully!");
            })
            .catch((error) => {
                console.error("Email failed to send:", error.text);
            });
        e.target.reset();
    };

    return (
        <StyledContact id="contact">
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <SectionText>For any questions, please email me:</SectionText>
                <StyledForm ref={formRef} onSubmit={sendEmail}>
                    <Label htmlFor="user_name">Name:</Label>
                    <Input type="text" name="user_name" id="user_name" required />

                    <Label htmlFor="user_email">Email:</Label>
                    <Input type="email" name="user_email" id="user_email" required />

                    <Label htmlFor="message">Message:</Label>
                    <TextArea name="message" id="message" rows={4} required />

                    <Button type="submit">Send message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 45vh;
    overflow: clip;
    position: relative;

    ${SectionText} {
        font-weight: 700;
        font-size: 3rem;
        line-height: 1.2;
        text-align: center;
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding-bottom: 24px;
    }
`;

const StyledForm = styled.form`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0 auto;
    button {
        margin: 0 auto;
    }
`;

const Label = styled.label`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.colors.color1};
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 2px solid #9f9b9b;
    border-radius: 5px;

    &:hover, &:focus {
        box-shadow: 1px 1px 100px #13b0f5;
    }
`;

const TextArea = styled.textarea`
    resize: none;
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
    border: 2px solid #9f9b9b;
    border-radius: 5px;
    &:hover, &:focus{
        box-shadow: 1px 1px 100px #13b0f5;
    }
`;