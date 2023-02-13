import styled from 'styled-components';
import { motion } from "framer-motion";
import { Link as LinkR } from 'react-router-dom';

export const AboutContainer = styled.div`
background:#131313;
display:flex;
justify-content:center;
align-items:center;
padding-bottom:5rem;
padding-top:5rem;
margin: 0 0 10px 0;
padding-top:5rem;
height:100%;
padding-left:2rem;

@media screen and (max-width:768px){
    padding:100px 0;
    padding-bottom:2rem;
    margin-left:20px;
}
@media screen and (max-width:480px){
     padding:100px 0;
     padding-bottom:5rem;
}
`
    ;

export const AboutWrapper = styled.div`
display:grid;
z-index:1;
max-width:1500px;
margin-right:auto;
margin-left:auto;
padding: 0 24px;
justify-content:center;
z-index:1;
height:100%;
overflow:hidden;
width:100%;
padding-bottom:30px;
`
    ;

export const AboutRow = styled.div`
display:grid;
grid-auto-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width:768px){
    grid-template-areas:${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
}
`
    ;

export const Column1 = styled.div`
margin-bottom:15px;
padding:0 20px;
grid-area:col1;

`
    ;
export const Column2 = styled(motion.div)`
margin-bottom:15px;
padding-top:3rem;
padding:0 20px;
grid-area:col2;
`
    ;



export const AboutH1 = styled(motion.h1)`
font-weight:500;
margin-top: 20px;
margin-left:20px;
font-size:3.5rem;
text-align: left;
line-height: 1.1;
padding-top:1.5rem;
letter-spacing: 1.3px;
font-family: 'Source Sans Pro', sans-serif;
background: #870000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #190A05, #870000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #190A05, #870000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
text-shadow: 1px 1px 6px #FF0000;
text-transform:uppercase;


@media screen and (max-width:768px){
     font-size:3rem;
}
@media screen and (max-width:480px){
    font-size:2.5rem;
}
@media screen and (max-width:375px){
    font-size:2.5rem;
}
@media screen and (max-width:320px){
     font-size:2.3rem;
}


`
    ;

export const AboutHeader = styled.h1`
font-weight:500;
margin-top: 20px;
font-size:3.5rem;
text-align: right;
line-height: 1.1;
padding-top:1.5rem;
letter-spacing: 1.3px;
background: #870000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #190A05, #870000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #190A05, #870000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
text-shadow: 1px 1px 6px #FF0000;
text-transform:uppercase;
font-family: 'Nothing You Could Do', cursive;

@media screen and (max-width:768px){
    font-size:3rem;
}
@media screen and (max-width:480px){
    font-size:2.5rem;
}
@media screen and (max-width:375px){
    font-size:2.5rem;
}
@media screen and (max-width:320px){
     font-size:2.3rem;
}
`
    ;


export const ImgWrap = styled.div`
max-width:40rem;
height:100%;
padding:2.5rem;
`
    ;

export const Img = styled(motion.img)`
display: flex;
overflow: hidden;
width:30rem;
height: 100%;
max-width: 100%;
padding-right: 0;
background:transparent;
filter:brightness(80%);

@media screen and(max-width: 768px){
    margin: auto;
    align-items: center;
    padding-left:1rem;
    width:30rem;
    height:auto;
}
@media screen and(max-width: 480px){
    margin:auto;
    align-items:right;
    width:35rem;
    height: auto;
}
@media screen and(max-width: 375px){
    margin:auto;
    align-items:right;
    width:35rem;
    height: auto;
}
@media screen and(max-width: 320px){
    margin:auto;
    align-items:right;
    width:35rem;
    height: auto;
}
`
export const Subheading = styled(motion.p)`
margin:right;
font-weight: 500;
font-size: 1rem;
text-align:right;
color:#f4f4f4;
font-family: 'Nothing You Could Do', cursive;
padding-top:0;

@media screen and(max-width: 768px){
    text-align:right;
    right:auto;
}
@media screen and(max-width: 480px){
    right:auto;
    text-align:right;

}
`
    ;
export const AboutP = styled.p`
margin:left;
font-weight: 500;
font-size: 1rem;
text-align:left;
font-family: 'Source Sans Pro', sans-serif;
color:#f4f4f4;


@media screen and(max-width: 768px){
    text-align:right;
    right:auto;
}
@media screen and(max-width: 480px){
    right:auto;
    text-align:right;

}
`
export const AboutSub = styled(motion.p)`
margin:left;
font-weight: 500;
font-size: 1rem;
text-align:left;
font-family: 'Source Sans Pro', sans-serif;
color:#f4f4f4;
padding-top:2rem;

@media screen and(max-width: 768px){
    text-align:left;
    left:auto;
}
@media screen and(max-width: 480px){
    left:auto;
    text-align:left;

}
`

export const TextWrapper = styled.div`
max-width:540px;
padding-bottom: 60px;
`
    ;

export const BtnWrapper = styled.div`
margin-top: 32px;
display:flex;
flex-direction: column;
align-items:center;
padding-bottom:1.5rem;
`;



export const Button = styled(LinkR)`
position:relative;
box-sizing:border-box;
display:inline-block;
text-align:right;
color:#f4f4f4;
white-space:nowrap;
font-family: 'Roboto Condensed', sans-serif;
background:#131313;
text-transform:lowercase;
border-radius:20px;
font-size:16px;
text-decoration:none;
padding:16px 36px;
cursor:pointer;
border:none;
box-shadow: 0 0 5px #870000, 0 0 25px #870000, 0 0 50px #870000, 0 0 50px #870000;
:hover {
transition: 0.2s ease-in-out;
color:#f4f4f4;
text-shadow:none;
transform:scale(1.1);
}
`;