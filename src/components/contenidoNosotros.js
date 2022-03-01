import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Imagen from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const TextoContNosotros = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const ContenidoNosotros = () => {

    const infoNosotros = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const { titulo, contenido, imagen } = infoNosotros.allDatoCmsPagina.nodes[0]
  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
        `}
      >
        {titulo}
      </h2>
      <TextoContNosotros>
        <p>{contenido}</p>
        <Imagen fluid={imagen.fluid} />
      </TextoContNosotros>
    </>
  )
}

export default ContenidoNosotros