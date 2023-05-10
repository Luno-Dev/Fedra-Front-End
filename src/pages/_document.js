import Footer from '@/components/footer'
import Navs from '@/components/navs'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navs/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  )
}
