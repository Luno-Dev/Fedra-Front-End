import Footer from "@/components/common/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
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
