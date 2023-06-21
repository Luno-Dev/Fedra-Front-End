import Navs from '@/components/common/Navs'
import React from 'react'
import { Helmet } from 'react-helmet'

const noticias = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {/*     <link rel="shortcut icon" href={favicon} type="image/x-icon" /> */}
        <title>Noticias</title>
      </Helmet>
    <Navs/>
    <div>noticias</div>
    </>
    
  )
}

export default noticias