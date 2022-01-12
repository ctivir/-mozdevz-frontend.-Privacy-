import {HeaderContainer, NavIcon, NavLink, NavList} from './styles'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  }

  

  return (
    <HeaderContainer >
      <Link to='/' >
        <img
          src={logo}
          alt='Mozdevz'
        />
      </Link>
      <NavIcon onClick={handleClick}>
        {open ? <FiX /> : <FiMenu />}
      </NavIcon>
      <NavList active={open} >
        <li className='nav-item'>
          <NavLink to='/' onClick={closeMenu}>
            Inicio
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/programas' onClick={closeMenu}>
            Programas
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/contacto' onClick={closeMenu}>
            Contacto
          </NavLink>
        </li>
      </NavList>
    </HeaderContainer>
  )
}

export default Header;