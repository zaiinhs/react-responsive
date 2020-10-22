import React from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = ({ toggle }) => {


    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        ZAINAL
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="blog"

                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Blog</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="project"

                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Project</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"

                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                            >Signup</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin"

                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                        >Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </div >
    )
}

export default Navbar
