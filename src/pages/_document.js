import Footer from "@/components/common/Footer";
import Navs from "@/components/common/Navs";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="pantalla">
          <Main/>
          <NextScript />
          <Footer/>
        </div>
      </body>
    </Html>
  );
}
