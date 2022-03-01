import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
`

const HabitacionPreview = ({ habitacion }) => {
  const { contenido, titulo, imagen, id, slug } = habitacion
  return (
     
      <div
        css={css`
          border: 1px solid #DBDADA;
          margin-bottom: 2rem;
           
        `}
      >
        <Image fluid={imagen.fluid} />
        <div  css={css` padding: 1rem;`}>
        
          <h3  css={css`
         font-size: 3rem;
        `}
        >{titulo}</h3>
          <p>{contenido}</p>
          <Boton to={slug}>Ver Habitación</Boton>
        </div>

       
      </div>
     
  )
}

export default HabitacionPreview
