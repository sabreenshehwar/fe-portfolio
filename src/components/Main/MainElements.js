import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { motion } from 'framer-motion';


export const MainContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding: 0 30px;
height:700px;
position:relative;
width:100%;
z-index:1;
padding-bottom:5rem;

@media screen and (max-width:1440px){
    padding: 0 30px;
    height:1100px;
}
@media screen and (max-width:1024px){
    padding: 0 30px;
    height:1000px;
}
@media screen and (max-width:768px){
height:700px;
padding: 0 30px;
}

@media screen and (max-width: 480px) {
height:750px;
padding: 0 20px;
}
@media screen and (max-width:320px){
height:600px;
padding: 0 20px;
}
`
    ;
export const MainBg = styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`
export const VideoBg = styled.video`
width:100%
height:100%
-o- object-fit: cover;
object-fit: cover;
filter:brightness(65%);
`;

export const MainContent = styled(motion.div)`
z-index:3;
max-width:100%;
position:absolute;
display:flex;
flex-direction:column;
align-items:center;
`;

export const MainH1 = styled.h1`
margin-top: 20px;
font-size:3.5rem;
text-align: center;
line-height: 1.1;
font-weight: 500;
letter-spacing: 1.3px;
background: #870000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #190A05, #870000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #190A05, #870000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
text-shadow: 2px 2px 8px #FF0000;
text-transform:uppercase;
font-family: 'UnifrakturMaguntia', cursive;
padding:1.5rem;

@media screen and (max-width:1440px){
    font-size:4rem;
    text-align: center;
    padding-top: 2rem;
}
@media screen and (max-width:1024px){
    font-size:3.5rem;
    text-align: center;
    padding-top: 2rem;
}
@media screen and (max-width:768px){
    font-size:3.5rem;
    text-align: center;
    padding-top: 2rem;
}
@media screen and(max-width: 480px){
    padding-top: 2rem;
    text-align: center;
    font-size:1.8rem;
}
@media screen and (max-width:375px){
     padding-top:2rem;
     text-align: center;
     font-size:2.5rem;
}

@media screen and (max-width:320px){
     padding-top:2rem;
     text-align: center;
     font-size:2rem;
}
`
    ;

export const HeaderP = styled.p`
color:#fff;
font-size:smaller;
text-align:center;
max-width:600px;
font-family: 'Roboto Condensed', sans-serif;
text-transform:uppercase;
padding:1.5rem;


@media screen and (max-width:768px){
    font-size:1.1rem;
    text-align: center;
    padding:1rem;
}

@media screen and (max-width:480px){
    font-size:1rem;
    text-align: center;
    padding:1rem;
}
@media screen and (max-width:425px){
    font-size:1rem;
    text-align: center;
    padding:1rem;
}
@media screen and (max-width:375px){
    font-size:1rem;
    text-align: center;
    padding:1rem;
}
@media screen and (max-width:320px){
     font-size:1rem;
    text-align: center;
    padding:1rem;
}
`;

export const MainP = styled.p`
color:#fff;
font-size:1.5rem;
text-align:center;
max-width:600px;
font-family: 'Nothing You Could Do', cursive;
text-transform:uppercase;
padding:1.5rem;


@media screen and (max-width:768px){
    font-size:1.3rem;
    text-align: center;
    padding:1rem;
}

@media screen and (max-width:480px){
    font-size:1rem;
    text-align: center;
    padding:1rem;
}
@media screen and (max-width:425px){
    font-size:1rem;
    text-align: center;
    padding:1rem;
}
@media screen and (max-width:375px){
    font-size:1rem;
    text-align: center;
    padding:1rem;
}
@media screen and (max-width:320px){
     font-size:1rem;
    text-align: center;
    padding:1rem;
}
`;

export const MainBtnWrapper = styled.div`
margin-top: 32px;
display:flex;
flex-direction: column;
align-items:center;
`;



export const Button = styled(LinkR)`
position:relative;
box-sizing:border-box;
display:inline-block;
text-align:center;
border: #fff solid 2px;
color:#fff;
white-space:nowrap;
font-family: 'Roboto Condensed', sans-serif;
background:transparent;
text-transform:lowercase;
border-radius:15px;
font-size:16px;
transition:all 0.2s ease-in-out;
text-decoration:none;
padding:16px 36px;

:hover {
background:transparent;
color:#fff;
cursor:pointer;
transition: all 0.2s ease-in-out;
border:none;
box-shadow: 0 0 5px #870000, 0 0 25px #870000, 0 0 50px #870000, 0 0 50px #870000;
}
`;



