import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElement'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        dolla
                    </NavLogo>
                    {/* <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                    </NavMenu> */}
                </NavbarContainer>
            </Nav>
        </div >
    )
}

export default Navbar
