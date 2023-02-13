import styled, { keyframes } from 'styled-components';

const animateGlitch = keyframes`
 2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);

  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
}


:before,
:after{
  content: attr(title);
  position: absolute;
  left: 0;
}

:before{
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}
`;

const glitchTop = keyframes`
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
}

:after{
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}
`
const glitchBottom = keyframes`
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
}`;

export const WorkContainer = styled.div`
height:100%;
display:grid;
flex-direction:column;
justify-content:center;
align-items:center;
background: #000;
max-width:100%;
padding:0 50px;
position:relative;

@media screen and (max-width:1500px){
    height:800px;
}
@media screen and (max-width:1440px){
    height:900px;
}
@media screen and (max-width:1024px){
    height:900px;
}
@media screen and (max-width: 768px){
    height:900px;
}
@media screen and (max-width:480px){
    height:1300px;
}
@media screen and (max-width:425px){
    height:1300px;
}
@media screen and (max-width:375px){
    height:1300px;
}
@media screen and (max-width:320px){
    height:1300px;
}
`;



export const WorkWrapper = styled.div`
max-width:100%;
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr;
align-items:center;
grid-gap:16px;
justify-content:center;

color:transparent;
padding 0 50px;

@media screen and (max-width:1000px){
    grid-template-columns:1fr 1fr 1fr;
    padding 0 50px;
}

@media screen and (max-width:768px){
    grid-template-columns:1fr 1fr;
    padding:0 20px;
}
@media screen and (max-width:480px){
    grid-template-columns:1fr ;
    padding:0 20px;
}
@media screen and (max-width:425px){
    grid-template-columns:1fr ;
    padding:0 20px;
}

@media screen and (max-width:375px){
    grid-template-columns: 1fr;
    padding:0 20px;
}

@media screen and (max-width:320px){
    grid-template-columns: 1fr;
    padding:0 20px;
}

`;

export const WorkCard = styled.div`
background:#000;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:50%;
width:18rem;
padding:3rem;
height:100%;
max-width:100%;
transition:all 0.2s ease-in-out;
border:#131313 1px solid;
box-shadow: 0 0 5px #870000, 0 0 25px #870000, 0 0 50px #870000, 0 0 50px #870000;


@media screen and (max-width:1024px){
    width:18rem;
    max-width:100%;
}
@media screen and (max-width:768px){
    width:18rem;
    max-width:100%;
}

@media screen and (max-width:425px){
    width:16rem;
    max-width:100%;
}
@media screen and (max-width:375px){
    width:16rem;
    max-width:100%;
}
@media screen and (max-width:320px){
    width:18rem;
}
`;

export const WorkImg = styled.img`
height:12rem;
width:12rem;
margin-bottom:10px;
max-width:100%;

&:hover{
    transition:all 0.2s ease-in-out;
}
`
  ;


export const WorkH5 = styled.h5`
display:flex;
justify-content:center;
font-size:1.1rem;
color:#f4f4f4;
text-transform:uppercase;
padding:2rem;
text-align:center;
letter-spacing: 7px;
font-family: 'Roboto Condensed', sans-serif;
animation: ${animateGlitch} 3s infinite;
animation: ${glitchTop} 1.5s infinite;
animation: ${glitchBottom} 2s infinite;
`;

export const WorkP = styled.p`
font-size:1rem;
text-align:left;
color:#f4f4f4;
margin-left:2rem;
margin-right:2rem;

`
  ;

export const BtnWrap = styled.div`
display:flex;
justify-content:flex-start;
`
  ;

export const Button = styled.button`
background:transparent; 
  white-space:nowrap;
  color: #f4f4f4;
  border:none;
  padding: 14px 38px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 4px 2px;
  cursor: pointer;
  border-radius:6px;
  text-transform:lowercase;
    font-family: "Roboto Mono", monospace;


  &:hover{
    color: #870000;
    text-shadow: 0 0 10px #870000, 0 0 20px #870000, 0 0 30px #870000, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    background:transparent;
  font-family: "Roboto Mono", monospace;


}
`;

