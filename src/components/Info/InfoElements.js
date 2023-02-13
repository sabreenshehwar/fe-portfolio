import styled from 'styled-components';

export const InfoContainer = styled.div`
background:#000;
height:100%;
display:flex;
justify-content:center;
@media screen and (max-width:405px){
display:block;
}
`;

export const InfoHeader = styled.h3`
font-family: 'Roboto Condensed', sans-serif;
color:#f4f4f4;
font-size:2rem;
padding:2rem;
text-transform:capitalize;
`;

export const InfoP = styled.p`
font-family: 'Source Sans Pro', sans-serif;
color:#f4f4f4;
font-size:1rem;
padding:2rem;
`