
import Admi from '@/components/admi/Admi';
import Socio from '@/components/admi/Socio';
import Navs from '@/components/common/Navs';
import React, { useEffect, useState } from 'react'


const administracion = () => {


    const [role, setRole]= useState("");

    useEffect(() => {

        setRole(JSON.parse(localStorage.getItem("role")))  
        
    }, [])
    
  return (
<>
<Navs/>
{
    role == "ADMIN_ROLE" ?   
    <Admi/>
  :

<Socio/>
}

</>
    
  )
}

export default administracion