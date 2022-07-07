import styled from "styled-components";

export const LinkArea = styled.a`
display:flex;
justify-content:center;
aling-items:center;
width: 60px;
heigth:60px;
background-color: ${props => (props.active ? "#0b4d0b" : "transparent")};
border-radius:10px;
margin-bottom:10px;

`;


export const LinkIcon = styled.img`
width:34px;
heigth:50;

`;