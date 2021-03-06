import React from "react"
import { css } from "@emotion/core"
import Navegacion from "./nav"

const header = () => {
  return (
    <header
      css={css`
        background-color: rgba(44,62,80);
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
        <h1
          css={css`
            color: #FFF;
            text-align: center;
          `}
        >
          Hotel Gatsby
        </h1>
        <Navegacion />
      </div>
    </header>
  )
}

export default header
