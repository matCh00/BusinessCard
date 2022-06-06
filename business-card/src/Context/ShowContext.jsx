import { createContext, useState } from "react";

// context
export const ShowContext = createContext(null);


// provider
export const ShowProvider = ({ children }) => {
  
  const [show, setShow] = useState(false);

  return (
    <ShowContext.Provider value={{ show, setShow }}>
      {children}
    </ShowContext.Provider>
  );
};