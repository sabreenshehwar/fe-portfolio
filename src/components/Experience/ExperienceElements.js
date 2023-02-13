import styled, { keyframes } from 'styled-components';

export const ExperienceContainer = styled.div`
height:100%;
background:#000;
justify-content:center;
max-width:100%;
width:100vw;
overflow:scroll;
padding-bottom:1rem;
`

export const ExperienceWrapper = styled.div`
  display: grid;
grid-template-columns:1fr 1fr ;
  grid-gap: 1rem;
`

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
export const ExperienceH5 = styled.h5`
display:flex;
justify-content:right;
font-size:1.1rem;
color:#f4f4f4;
text-transform:uppercase;
padding:2rem;
text-align:right;
letter-spacing: 7px;
font-family: 'Roboto Condensed', sans-serif;
animation: ${animateGlitch} 3s infinite;
animation: ${glitchTop} 1.5s infinite;
animation: ${glitchBottom} 2s infinite;
`;

export const Title = styled.p`
padding-top:1rem;
padding-left:1rem;
color:#f4f4f4;
text-transform:uppercase;
font-family: "Roboto Mono", monospace;
&:hover{
    color: #870000;
    text-shadow: 0 0 10px #870000, 0 0 20px #870000, 0 0 30px #870000, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    background:transparent;
}
`

export const CodeButton = styled.button`
color:#f4f4f4;
padding-top:1rem;
background:transparent;
text-transform:uppercase;
font-family: "Roboto Mono", monospace;
margin-left:3rem;
border:none;
:hover {
transition: 0.2s ease-in-out;
padding-bottom: 10px;
            border-bottom-style: solid;
            border-bottom-width: 3px;
            width: fit-content;
}

`
export const LiveButton = styled.button`
color:#f4f4f4;
border:none;
padding-top:1rem;
background:transparent;
text-transform:uppercase;
font-family: "Roboto Mono", monospace;
margin-left:3rem;

&:hover{
    color: #870000;
    text-shadow: 0 0 10px #870000, 0 0 20px #870000, 0 0 30px #870000, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    background:transparent;
}`
