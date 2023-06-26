import React, { createContext, useState } from 'react'

export const DataContext = createContext();



const DataProvider = ({children}) => {
    
  const [show, setShow] = useState(false); // Estado global
  const [edit, setEdit] = useState(false); // Estado global
  const [editPublicaciones, setEditPublicaciones] = useState([]); // Estado global


  return (
    <DataContext.Provider value={{show, setShow, edit, setEdit, setEditPublicaciones, editPublicaciones}}>{children}</DataContext.Provider>
  )
}

export default DataProvider