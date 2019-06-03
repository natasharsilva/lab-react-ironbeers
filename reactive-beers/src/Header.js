import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

export default function Header(){
  return(
    <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Home</NavbarBrand>
          </Navbar>
        </div>
  )
}