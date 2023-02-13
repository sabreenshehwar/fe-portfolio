import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Bar = styled.nav`
background:${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
height:80px;
display:flex;
margin-top:-80px;
justify-content:center;
align-items:center;
font-size:1rem;
top:0;
z-index:10;
position:sticky;


@media screen and (max-width:960px){
    transition:0.8s all ease;
}
`;


export const PromoContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding: 0 24px;
max-width:1500px;
`;

export const PLogo = styled(LinkR)`
color:#870000;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin:left:24px;
font-weight:bold;
text-decoration:none;
font-family: 'UnifrakturMaguntia', cursive;
:hover {
transition: 0.2s ease-in-out;
color:#f4f4f4;
}
`;


export const PromoMenu = styled(motion.ul)`
display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-20px;
margin-top:2.5rem;
`;

export const PItem = styled.li`
height:80px;
`
    ;

export const PromoP = styled.p`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height:100%;
font-size:smaller;
font-family: 'Roboto Condensed', sans-serif;
`;


export const IconWrapper = styled.div`
margin:0 auto;
display:flex;
flex-direction:row;
background: transparent;
justify-content:center;
align-items:center;
padding: 0 1rem;
`
    ;
