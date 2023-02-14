import styled from 'styled-components';
import img from '../../media/waves.jpg';


export const PrepareContainer = styled.div`
background:#131313;
height:100%;
display:block;
justify-content:center;
padding:0 50px;
padding-top:2rem;
padding-bottom:2rem;
background-image: url(${img});
max-width:100%;
background-size:cover;
background-repeat:no-repeat;
background-attachment:scroll;
background-position: center center;
 @media screen and (max-width:1440px){
    height:900px;
}
@media screen and (max-width:1024px){
    height:1000px;
}
@media screen and (max-width: 768px){
    height:1000px;
}
@media screen and (max-width:480px){
    height:2600px;
}
@media screen and (max-width:425px){
    height:1350px;
}
@media screen and (max-width:375px){
    height:1900px;
}
@media screen and (max-width:320px){
    height:1600px;
}
`;

export const PrepareH3 = styled.h3`
font-family: 'Roboto Condensed', sans-serif;
color:#f4f4f4;
font-size:2rem;
padding:2rem;
text-transform:capitalize;
justify-content:center;
`;

export const PrepareP = styled.p`
font-family: 'Source Sans Pro', sans-serif;
color:#999999;
font-size:1rem;
padding:1rem;
text-align:center;
`;

export const PrepareWrapper = styled.div`
margin:0 auto;
display:flex;
flex-direction:column;
background: transparent;
justify-content:center;
align-items:center;
`;

export const PrepareCard = styled.div`
background: rgba(0, 0, 0, 0.71);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.7px);
-webkit-backdrop-filter: blur(8.7px);
border: 1px solid rgba(0, 0, 0, 0.3);
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
width:30rem;
height:100%;
max-width:100%;
box-shadow: 0 0 5px #870000, 0 0 25px #870000, 0 0 50px #870000, 0 0 50px #870000;

@media screen and (max-width:1024px){
    width:24rem;
    max-width:100%;
}
@media screen and (max-width:768px){
    width:24rem;
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

export const PrepareMenu = styled.ul`
padding:1rem;
list-style:none;
text-align:center;
`;

export const PrepareSteps = styled.li`
padding:1rem;
`;

export const PrepareSub = styled.h6`
font-family: 'Roboto Condensed', sans-serif;
color:#870000;
text-transform:uppercase;
`;

export const PrepareHeader = styled.h3`
font-family: 'Roboto Condensed', sans-serif;
color:#f4f4f4;
text-align:center;
text-transform:capitalize;
`;
