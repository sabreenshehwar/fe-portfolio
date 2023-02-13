import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom';
import { GiDeathSkull } from 'react-icons/gi';


export const SidebarContainer = styled.aside`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#141414;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity:${({ isOpen }) => (isOpen ? '100%' : '0')};
top:${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(GiDeathSkull)`
color:#870000;
`;

export const Icon = styled.div`
position:absolute;
background:transparent;
top:1.2rem;
right:1.5rem;
font-size:2rem;
cursor:pointer;
outline:none;
color:#870000;

`;

export const SidebarWrapper = styled.div`
color:#141414;
`;

export const SidebarMenu = styled.ul`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat (5, 80px);
text-align:center;
padding:1rem;

@media screen and (max-width:480px;){
    grid-template-rows: repeat(5, 60px);
}
`;
export const SidebarLink = styled(LinkS)`
display:flex;
align-items:center;
justify-content: center;
font-size:1.5rem;
font-family: 'UnifrakturMaguntia', cursive;
text-transform:uppercase;
text-decoration:none;
list-style:none;
padding:20px;
transition: 0.2s ease-in-out;
color:#870000;
cursor:pointer;

:hover {
transition: 0.2s ease-in-out;
  color:#f4f4f4;
  text-decoration:none;
}
`
    ;

export const SidebarRLink = styled(LinkR)`
display:flex;
align-items:center;
justify-content: center;
font-size:1.5rem;
font-family: 'UnifrakturMaguntia', cursive;
text-transform:uppercase;
text-decoration:none;
list-style:none;
padding:20px;
transition: 0.2s ease-in-out;
color:#870000;
cursor:pointer;

:hover {
transition: 0.2s ease-in-out;
 text-decoration:line-through;
  text-decoration-color:#000;
  text-decoration-thickness:5px;
  color:#fff;
}
`
    ;
