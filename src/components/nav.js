import React from 'react'
//En gatsby no hay que importar react-router-dom solo con Link  Y enrrota las Pages

import { Link } from 'gatsby'
import styled from '@emotion/styled'

//Crear Nav componente
const Nav = styled.nav `
        display: flex;
        justify-content:center ;
        padding-bottom: 3rem;
        @media (min-width:768px){
            padding-bottom: 0;
        };

`

//Dar estilos a Componente existente

const NavLink = styled(Link)`
        color: white;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 1rem;
        font-family: 'PT Sans', sans-serif;
        text-decoration: none;
        padding: 1rem;
        margin-right: 1rem;

        &:last-of-type{
            margin-right: 0;
        }
        &.pagina-actual{
            border-bottom: 1px solid white;
        }

`

const Navegacion = () => {
  return (
    
    <Nav>

        <NavLink activeClassName='pagina-actual' to={'/'}>Index</NavLink>
        <NavLink activeClassName='pagina-actual' to={'/nosotros'}>Nosotros</NavLink>
    </Nav>
  )
}

export default Navegacion