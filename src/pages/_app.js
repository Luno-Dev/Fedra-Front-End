import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/inicio.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import DataProvider from "@/components/context/DataContext";
{
  /* The following line can be included in your src/index.js or App.js file */
}

export default function App({ Component, pageProps }) {
  return <DataProvider>

    <Component {...pageProps} />
    </DataProvider>;
}
