import React, { createContext, useState } from 'react'

export const DataContext = createContext();



const DataProvider = ({children}) => {
    
  const [show, setShow] = useState(false); // Estado global
  const [edit, setEdit] = useState(false); 
  const [editPublicaciones, setEditPublicaciones] = useState([]);


  return (
    <DataContext.Provider value={{show, setShow, edit, setEdit, setEditPublicaciones, editPublicaciones}}>{children}</DataContext.Provider>
  )
}

export default DataProvider