
import Admi from '@/components/admi/Admi';
import Navs from '@/components/common/Navs';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Cookies from "universal-cookie";

const administracion = () => {

  const history = useRouter();


  useEffect(() => {

    const handleCookieChange = () => {
      const cookie = new Cookies();
      if (!cookie.get("token")) {
        history.push("/logins");

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
          <Admi />

    </>

  )
}

export default administracion