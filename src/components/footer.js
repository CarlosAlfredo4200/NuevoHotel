import React from "react"
import { css } from "@emotion/core"
import Navegacion from "./nav"

const Footer = ({title}) => {

 
    const year = new Date().getFullYear();
  return (
     <>

    <footer
      css={css`
        background-color: rgba(44,62,80);
        margin-top: 2rem;
        padding: 1rem;
        `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          
          @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            `}
      >
             
        <h4
          css={css`
            color: #FFF;
            text-align: end;
            justify-content: flex-end;
            `}
        >
          Hotel Gatsbyll
        </h4>
      </div>

    </footer>
    <p  
        css={css `
            text-align: center; 
            color: #fff;
            background-color: rgb(33,44,55);
            margin: 0;
            padding: 1rem;
        `}
    >{title}. Todos los redechos reservados {year}</p>
            </> 
  )
}

export default Footer
