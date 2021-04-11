import React from 'react';

const motocilesContext = React.createContext({
 selecteds: [],
 push: () => {}
});

export const Provider = ({ children }) => {
 const valueProvider = {};
 return (
  <motocilesContext.Provider value={valueProvider}>
   {children}
  </motocilesContext.Provider>
 )
};

export default motocilesContext;
