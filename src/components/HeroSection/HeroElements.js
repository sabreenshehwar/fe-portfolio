import { Link as LinkR } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from "framer-motion";
import img from '../../media/waves.jpg';


const animateOpacity = keyframes`
0%, 100%{
  opacity:1;  
}
50%{
    opacity:0;
}`;


export const HeroContainer = styled(motion.div)`
display:flex;
justify-content:center;
align-items:center;
margin: 0 0 10px 0;
height:100%;
padding:1rem;
background-image: url(${img});
max-width:100%;
background-size:contain;
background-repeat:no-repeat;
background-attachment:fixed;
background-position: center center;


@media screen and (max-width:768px){
     padding:100px 0;
     height:1100px;

}
@media screen and (max-width:480px){
     padding:100px 0;
     height:1300px;

}
@media screen and (max-width:375px){
     padding:100px 0;
     height:1300px;
}
@media screen and (max-width:320px){
     padding: 180px 0;
     height:1300px;

}
`
    ;

export const HeroContent = styled.div`
background-repeat: no-repeat;
height:100%;
max-width:100%;
z-index:0;
`;

export const HeroWrapper = styled.div`
display:grid;
z-index:1;
width:100%;
height:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding: 0 24px;
justify-content:center;
`
    ;

export const HeroRow = styled.div`
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
padding-right:1.5rem;
padding:0 20px;
grid-area:col1;
z-index:999;


`
    ;
export const Column2 = styled(motion.div)`
margin-bottom:15px;
grid-area:col2;
padding:0 20px;
z-index:999;
`
    ;
export const ImgWrap = styled.div`
max-width:100%;
height:100%;
padding:1rem;
`
    ;

export const Img = styled(motion.img)`
display: flex;
overflow: hidden;
width:30rem;
height: 100%;
max-width: 100%;
background:transparent;
filter: brightness(70%);


@media screen and (max-width:768px){
    height:100%;
    width:20rem;
}
@media screen and (max-width:480px){
    font-size:3.5rem;

}
@media screen and (max-width:375px){
    font-size:3rem;
}
@media screen and (max-width:320px){
     font-size:2.5rem;
}
`
export const HeroPLink = styled(LinkR)`
display:flex;
flex-direction:row-reverse;
margin:auto;
color:#870000;
font-family: 'Nothing You Could Do', cursive;
align-items:right;
text-align:right;
height:100%;
cursor:pointer;
text-transform:uppercase;
font-size:1.5rem;
text-decoration:none;
animation: ${animateOpacity} 2s infinite;


:hover {
transition: 0.2s ease-in-out;
color:#870000;
}
@media screen and (max-width:768px){
    

}
@media screen and (max-width:480px){
    font-size:1rem;

}
@media screen and (max-width:375px){
    font-size:1rem;

}
@media screen and (max-width:320px){
    font-size:1rem;
}
`;


export const HeaderWrapper = styled.div`
max-width:540px;
padding-bottom: 60px;
padding:2rem;
background:#000;
border-radius:10px;
}
`
    ;

export const HeaderH1 = styled.h1`
display:block;
margin-top: 20px;
font-size:2rem;
font-family: 'Nothing You Could Do', cursive;
text-align: right;
line-height: 1.1;
font-weight: 500;
letter-spacing: 1.3px;
background: #fff;  /* fallback for old browsers */
-webkit-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
-webkit-box-decoration-break: clone;
box-decoration-break: clone;
text-shadow: 2px 2px 8px #131313;
padding-left: 1rem;
text-transform:uppercase;

@media screen and (max-width:768px){
    font-size:2.8rem;
}
@media screen and (max-width:480px){
    font-size:2.5rem;
}
@media screen and (max-width:425px){
    font-size:2rem;
}
@media screen and (max-width:375px){
    font-size:1.5rem;
}
@media screen and (max-width:320px){
     font-size:1.2rem;

}
`
    ;



export const Subheading = styled.p`
display:block;
margin-top: 20px;
font-size: 1rem;
line-height: 1.1;
color:#999999;
font-weight:300;
line-spacing:2px;
font-family: 'Source Sans Pro', sans-serif;

@media screen and (max-width:768px){
     

}
@media screen and (max-width:480px){
    font-size:1.2rem;
}
@media screen and (max-width:320px){
    font-size:1.1rem;
}
`
    ;


