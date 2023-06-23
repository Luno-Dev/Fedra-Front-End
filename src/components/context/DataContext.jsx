import React, { createContext, useState } from 'react'

export const DataContext = createContext();



const DataProvider = ({children}) => {
    
  const [show, setShow] = useState(false); // Estado global

  return (
    <DataContext.Provider value={{show, setShow}}>{children}</DataContext.Provider>
  )
}

export default DataProvider