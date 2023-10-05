import { createContext, useState } from 'react';

export const DetailsContext = createContext();

export const DetailsContextProvider = ({ children }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <DetailsContext.Provider
      value={{ showDetails, setShowDetails, todayDate: '05.10.2023' }}
    >
      {children}
    </DetailsContext.Provider>
  );
};
