import styled from 'styled-components'
import { motion } from 'framer-motion';

export const DataContainer = styled.div`
margin:0 auto;
padding-top:3rem;
padding-bottom:3rem;
color:#f9f9f9;
grid-template-columns:1fr 1fr;
background:${({ lightBg }) => (lightBg ? '#BBB8B4' : '#0e1111')};
`
    ;
export const DataWrapper = styled.div`
display:grid;
z-index:1;
height:100%;
box-sizing: border-box;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0 30px;
padding-bottom:30px;
justify-content:center;
  place-content: center;

`
    ;
export const DataRow = styled.div`
display:grid;
grid-auto-columns:minmax(auto, 1fr);
align-items:center;
grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
@media screen and (max-width:600px){
    grid-template-areas:${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
}
`
    ;

export const Column1 = styled.div`
margin-bottom:15px;
padding-right:1.5rem;
padding:0 20px;
grid-area:col1;
`
    ;
export const Column2 = styled.div`
margin-bottom:15px;
padding:0 20px;
grid-area:col2;
`
    ;

export const TextWrapper = styled.div`
max-width:540px;
`
    ;

export const TopLine = styled.p`
font-size:1rem;
line-height:16px;
font-weight:bold 700;
padding-top:1rem;
letter-spacing:1.4px;
text-transform:capitalize;
font-style:italic;
margin-bottom:16px;
font-family: "Roboto Mono", monospace;
color:${({ topText }) => (topText ? '#870000' : '#f4f4f4')};
`
    ;

export const Heading = styled.h1`
margin-top:20px;
font-size:2rem;
line-height:1.1;
font-weight:500;
letter-spacing:3px;
text-transform:uppercase;
text-shadow: 3px 3px 8px #ff0000;
font-family: 'Roboto Condensed', sans-serif;
color:${({ lightText }) => (lightText ? '#fff' : '#010606')};
@media screen and (max-width:480px){
    font-size:32px;
}
@media screen and (max-width:768px){
margin:auto;
text-align:left;
}
`
    ;

export const Subtitle = styled(motion.p)`
max-width:440px;
margin-bottom:35px;
font-size:18px;
line-height:1.75rem;
line-spacing:1rem;
font-weight:300;
font-family: 'Source Sans Pro', sans-serif;
color: ${({ darkText }) => (darkText ? '#010606' : "#f4f4f4")};
@media screen and (max-width:768px){
margin:auto;
padding-top:1rem;
align-items:center;
padding-left:1rem;
}
`
    ;


export const ImgWrap = styled.div`
max-width:555px;
height:100%;
`
    ;

export const Img = styled(motion.img)`
display:flex;
width:20rem;
max-width:100%;
`