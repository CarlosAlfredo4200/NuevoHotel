import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

const ImagenFondo = styled(BackgroundImage)`
    height: 400px;    
`

const TextoImagen = styled.div ` 
    background-image: linear-gradient(to top, rgba(34,49,63,.75), rgba(34,49,63,.75));
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

`


const ImagenPrincipal = () => {

    const { image} = useStaticQuery(graphql `

        query {
            image: file(relativePath: {eq:"8.jpg"}){
            sharp:childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
              }
            }
          }  
        }
`)

  return (
    <ImagenFondo tag="section" fluid={image.sharp.fluid} fadeIn='soft'>
    <TextoImagen>
        <h1>Bienvenido a Hotel Gatsby</h1>
        <p>La mejor opción para tus vacaciones</p>

    </TextoImagen>
    </ImagenFondo>
  )
}

export default ImagenPrincipal