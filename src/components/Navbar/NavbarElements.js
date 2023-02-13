import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
background:${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
height:80px;
display:flex;
margin-top:-80px;
justify-content:center;
align-items:center;
font-size:1rem;
top:0;
z-index:10;
position:sticky;


@media screen and (max-width:960px){
    transition:0.8s all ease;
}
`;


export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height:80px;
z-index:1;
width:100%;
padding: 0 24px;
max-width:1500px;
`;

export const NavLogo = styled(LinkR)`
color:#870000;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin:left:24px;
font-weight:bold;
text-decoration:none;
font-family: 'UnifrakturMaguntia', cursive;
:hover {
transition: 0.2s ease-in-out;
color:#f4f4f4;
}
`;

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:480px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,-60%);
    font-size:1.8rem;
    cursor:pointer;
    padding-top:5.2rem;
    color:#f4f4f4;
}
`
    ;
export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-20px;

@media screen and (max-width:480px){
    display:none;
}
`;

export const NavItem = styled.li`
height:80px;
`
    ;

export const NavLinks = styled(LinkS)`
color:#f4f4f4;
display:flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height:100%;
cursor:pointer;
text-transform:lowercase;
font-family: 'UnifrakturMaguntia', cursive;

:hover {
transition: 0.2s ease-in-out;
text-decoration:line-through 3px #870000; 
color:#f4f4f4;
}

`;

export const NavRLinks = styled(LinkR)`
color:#f4f4f4;
display:flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height:100%;
cursor:pointer;
text-transform:lowercase;
font-family: 'UnifrakturMaguntia', cursive;

:hover {
transition: 0.2s ease-in-out;
text-decoration:line-through 3px #870000; 
color:#f4f4f4;
}
`;

export const IconWrapper = styled.div`
margin:0 auto;
display:flex;
flex-direction:row;
background: transparent;
justify-content:center;
align-items:center;
padding: 0 1rem;
`
    ;


