
import Admi from '@/components/admi/Admi';
import Socio from '@/components/admi/Socio';
import Navs from '@/components/common/Navs';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Cookies from "universal-cookie";

const administracion = () => {


  const [role, setRole] = useState("");


  const history = useRouter();


  useEffect(() => {

    setRole(JSON.parse(localStorage.getItem("role")))
    const handleCookieChange = () => {
      const cookie = new Cookies();
      if (!cookie.get("token")) {
        history.push("/");

      }


    };

    handleCookieChange();

    const interval = setInterval(handleCookieChange, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => {
      clearInterval(interval);
    };

  }, [history])

  return (
    <>
      <Navs />
      {
        role == "ADMIN_ROLE" ?
          <Admi />
          :

          <Socio />
      }

    </>

  )
}

export default administracion