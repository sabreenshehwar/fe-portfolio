import React from 'react'
import { Icon } from '../Icons';
import { Bar, NavContainer, NavItem, NavLogo, NavMenu, NavP, IconWrapper } from '../Nav/NavElements'

const Nav = () => {

    return (
        <>
            <Bar>
                <NavContainer>
                    <NavLogo to='/' onClick="home">
                        S.
                    </NavLogo>
                    <NavMenu initial={{ y: -250 }}
                        animate={{ y: -10 }}
                        transition={{ ease: "easeOut", duration: 2, delay: 1 }}>
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
                            <NavP>
                                Currently working as a Independent Front-end Developer
                            </NavP>
                        </NavItem>
                        <NavItem>
                            <NavP>
                                Based in Ottawa, Canada
                            </NavP>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Bar>
        </>
    )
}

export default Nav