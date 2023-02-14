import styled from 'styled-components'
import { motion } from "framer-motion";
import img from '../../media/heart.jpg';

export const PackagesContainer = styled.div`
background:#000;
display:block;
justify-content:center;
align-items:center;
padding-bottom:5rem;
padding-top:5rem;
margin: 0 0 10px 0;
position:relative;
height:700px;
padding-left:2rem;
background-image: url(${img});
max-width:100%;
background-size:contain;
background-repeat:no-repeat;
background-position: right right;


@media screen and (max-width:768px){
    padding:100px 0;
    padding-bottom:2rem;
    height:500px;
}
@media screen and (max-width:480px){
     padding:100px 0;
     padding-bottom:5rem;
     height:1000px;
}
@media screen and (max-width:375px){
     padding:100px 0;
     padding-bottom:5rem;
     height:975px;
}
@media screen and (max-width:320px){
     padding:100px 0;
     padding-bottom:5rem;
     height:900px;
}
`
    ;

export const PackagesWrapper = styled.div`
display:grid;
z-index:1;
max-width:1500px;
margin-right:auto;
margin-left:auto;
padding: 0 24px;
justify-content:center;
z-index:1;
height:100%;
width:100%;
padding-bottom:30px;
`
    ;

export const PackagesRow = styled.div`
display:grid;
grid-auto-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas: ${({ headerStart }) => (headerStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width:768px){
    grid-template-areas:${({ headerStart }) => (headerStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
}
`
    ;

export const Column1 = styled.div`
margin-bottom:15px;
padding:0 20px;
grid-area:col1;

`
    ;
export const Column2 = styled.div`
margin-bottom:15px;
padding-top:3rem;
padding:0 20px;
grid-area:col2;
    background: rgba(0, 0, 0, 0.71);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.7px);
-webkit-backdrop-filter: blur(8.7px);
border: 1px solid rgba(0, 0, 0, 0.3);

`
    ;

export const PHeader = styled(motion.h1)`
font-weight:700;
margin-top: 20px;
font-size:3.5rem;
text-align: left;
line-height: 1.1;
padding-top:1.5rem;
letter-spacing: 1.2px;
color:#870000;
box-decoration-break: clone;
text-shadow: 2px 2px 6px #000;
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
     font-size:2.5rem;
}
`
    ;

export const PSubheader = styled(motion.p)`
font-family: 'Roboto Condensed', sans-serif;
text-align:left;
font-size:1rem;
color:#fff;
box-sizing:border-box;

`
    ;


