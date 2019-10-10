import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg'
import {ButtonContainer,NavWrapper} from './styled'

const Navbar = props => {
    return (
        <NavWrapper className="navbar navbar-expand-sm bg-dark px-sm-5">
            <Link to="/">
                <img src={logo} alt="store" className="nav-link" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-0">
                    <Link to="/" className="nav-link" >products</Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
               <span className="mr-2"><i className="fas fa-cart-plus"></i> </span> 
                Cart
                </ButtonContainer>
            </Link>
        </NavWrapper>
    )
}



export default Navbar