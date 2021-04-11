import React from 'react';

const motorcilesContext = React.createContext({
 selecteds: [],
 push: () => {}
});

/**
 *
 * @param {*} param0
 * @returns {JSX.Element}
 */
export const Provider = ({ children }) => {

 const [selecteds, setSelecteds] = React.useState([]);

 const valueProvider = {
  selecteds,
  push: (value) => setSelecteds([...selecteds, value]),
  remove: (i) => setSelecteds(selecteds.filter((...[,arrayI]) => arrayI !== i))
 };

 return (
  <motorcilesContext.Provider value={valueProvider}>
   {children}
  </motorcilesContext.Provider>
 )
};

export default motorcilesContext;
