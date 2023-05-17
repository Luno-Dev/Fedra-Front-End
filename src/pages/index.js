import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Fedra Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <header className="header vh-100 p-4 d-xl-flex d-sm-block">
          {/* Carousel */}
        </header>
        <section className="section-1 vh-100 mt-5 mb-5 d-xl-flex d-sm-block p-3">
          <div className="row w-50 justify-content-center align-items-center">
            <div className="col-xl-6 col-sm-12 col-md-12">
              <h1>CONSTITUCIÓN</h1>
              <br></br>
              <p>
                FEDRA es una asociación civil empresarial argentina sin fines de
                lucro, fundada el año 1995 con Personería Jurídica otorgada por
                la Dirección de Personas Jurídicas. Actualmente es miembro de la
                Internacional Night Association.
              </p>
            </div>
          </div>
          <div className="container-img bg-light row w-50 p-3">
            <div className="col-sm-12"></div>
          </div>
        </section>
      </main>
    </>
  );
}
