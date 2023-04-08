import styled from 'styled-components';

export const Container = styled.div`
    background-color: #0D1A2D;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        color: #00F6F4;
        letter-spacing: 0.1em;
    }
`;

export const DivForm = styled.div`
    background-color: #14273E;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 1px 1px 10px rgba(0,0,0, 0.1);

    p {
        color: #6D84A5;
        font-size: 1.3em;
        line-height: 150%;
        font-style: italic;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 486px;
    padding: 38px;

    label {
        text-align: left;
        width: 100%;
        margin-bottom: 3px;
        color: #FBFFFF;
        font-size: 1em;
    }

    input {
        width: 100%;
        border-radius: 8px;
        height: 40px;
        margin-bottom: 10px;
        background-color: #0D1A2D;
        border: 0;
        outline: none;
        color: #FBFFFF;
        padding-left: 7px;
    }

    button {
        background-color: #6D84A5;
        width: 300px;
        height: 45px;
        border:0;
        outline: none;
        color: #FBFFFF;
        border-radius: 8px;
        font-size: 1.2em;
        margin: 7px auto;
        cursor: pointer;
    }
`;