import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavRLinks, IconWrapper } from './NavbarElements';
import { Icon } from '../Icons';
import { animateScroll as scroll } from 'react-scroll';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 700) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };


    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        S.
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <IconWrapper>
                            <Icon name="email" />
                        </IconWrapper>
                        <IconWrapper>
                            <Icon name="linkedin" />
                        </IconWrapper>
                        <IconWrapper>
                            <Icon name="instagram" />
                        </IconWrapper>
                        <NavItem>
                            <NavRLinks to="aboutme">
                                About
                            </NavRLinks>
                        </NavItem>
                        <NavItem>
                            <NavRLinks to="hireme">
                                lets work together
                            </NavRLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                                smooth="true"
                                duration={500}
                                spy="true"
                                exact='true'
                                offset={-80}>
                                Contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;