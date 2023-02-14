import styled, { keyframes } from 'styled-components';


export const DealsContainer = styled.div`
height:100%;
display:grid;
place-content: center;
flex-direction:column;
justify-content:center;
align-items:center;
background: #000000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
max-width:100%;
padding-top:2rem;
padding-bottom:1rem;
position:relative;

@media screen and (max-width:1440px){
    height:900px;
}
@media screen and (max-width:1024px){
    height:1000px;
}
@media screen and (max-width: 768px){
    height:1400px;
}
@media screen and (max-width:480px){
    height:2600px;
}
@media screen and (max-width:425px){
    height:1900px;
}
@media screen and (max-width:375px){
    height:1900px;
}
@media screen and (max-width:320px){
    height:2200px;
}
`;


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

export const DealsH5 = styled.h5`
display:flex;
justify-content:left;
font-size:1.1rem;
color:#f4f4f4;
text-transform:uppercase;
padding:2rem;
text-align:left;
letter-spacing: 7px;
font-family: 'Roboto Condensed', sans-serif;
animation: ${animateGlitch} 3s infinite;
animation: ${glitchTop} 1.5s infinite;
animation: ${glitchBottom} 2s infinite;
`;

export const DealsWrapper = styled.div`
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr;
align-items:center;
grid-gap:1rem;
color:transparent;
padding 0 30px;
max-width:100%;


@media screen and (max-width:1000px){
    grid-template-columns:1fr 1fr 1fr;
    padding 0 30px;
}

@media screen and (max-width:768px){
    grid-template-columns:1fr 1fr;
    padding:0 20px;
}
@media screen and (max-width:480px){
    grid-template-columns:1fr 1fr;
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

export const DealsCard = styled.div`
background:#000;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:10px;
width:20rem;
padding:0 20px;
height:100%;
max-width:100%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
transition:all 0.2s ease-in-out;

@media screen and (max-width:1680px){
    width:24rem;
    max-width:100%;
}
@media screen and (max-width:1440px){
    width:24rem;
    max-width:100%;
}
@media screen and (max-width:1024px){
    width:18rem;
    max-width:100%;
}
@media screen and (max-width:768px){
    width:22rem;
    max-width:100%;
}

@media screen and (max-width:425px){
    width:20rem;
    max-width:100%;
}
@media screen and (max-width:375px){
    width:20rem;
    max-width:100%;
}
@media screen and (max-width:320px){
    width:18rem;
}

`;

export const DealsSubheading = styled.p`
color:#fff;
font-weight:bold;
font-size: smaller;
text-align:center;
padding:1rem;
font-family: "Roboto Condensed", sans-serif;

`;

export const DealsH1 = styled.h1`
color:#870000;
font-family: "Roboto Mono", monospace;
font-size:2rem;
text-align:center;
text-transform:uppercase;
padding:1rem;
text-shadow:none;
`;

export const Experience = styled.ul`
text-align:left;
justify-content:center;
color:#fff;
box-sizing: border-box;
list-style:outside;

`;

export const DealsP = styled.li`
text-align:left;
justify-content:center;
padding:1.5rem;
color:#fff;
padding:1rem;
`;


