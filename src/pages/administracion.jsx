import React from 'react'
import Tablas from '../components/admi/Tablas'
import Navs from '@/components/common/Navs'
const administracion = () => {
  return (
    
    <>
    <Navs/>
    <div className='m-5 g-4' >
        <h1 className='text-center'>Administrar socios</h1>
     <Tablas/>
    </div>
    <div className='m-5 g-4' >
        <h1 className='text-center'>Administrar Publicaciones</h1>
     <Tablas/>
    </div>
    </>
  )
}

export default administracion