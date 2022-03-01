import React from 'react'
import Header from './header'
import Helmet from 'react-helmet'
import {Global, css} from '@emotion/core'
import Footer from './footer'
import UseSeo from '../hooks/use-seo'

const layout = (props) => {

   const Seo =  UseSeo();

   const {siteName, fallbackSeo:{description}} = Seo;
   console.log(description);
   
  return (
     <>     
        <Global  styles ={css `
        
        body {
                background-color: white;
                font-size: 16px;
                font-size: 1.6rem;
                line-height: 1.5;
                font-family: 'PT Sans', sans-serif;

        }
        html{
                font-size: 62.5%;
                box-sizing: border-box;
            }

            *, *:before, *:after{
                box-sizing: inherit;
            }

         h1, h2 ,h3{
            margin: 0;
            line-height: 1.5;
        }

        h1 , h2 {
            font-family: 'Roboto', serif;
        }

        h3 {
            font-family: 'PT Sans', sans-serif;
        }

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        p{
           text-align: justify;
        }



        `

        } />
        <Helmet>
            <title>{siteName}</title>
            <meta name='description' content={description}></meta>
            <link href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'  rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto:ital,wght@1,700&display=swap" rel="stylesheet"></link>
        </Helmet>
        <Header />
         {props.children}

         <Footer title={siteName} />
     </>
  )
}

export default layout