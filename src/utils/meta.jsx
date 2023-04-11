import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function Meta({title}) {
  return (
    <HelmetProvider>
        <Helmet>
            <title>
                {title} - {process.env.REACT_APP_WEBSITE_TITLE}
            </title>
        </Helmet>
    </HelmetProvider>
  )
}
