import { Provider as MotociclesProvider } from './contexts/motorcicles';
import TableMotorcicles from './components/TableMotorcicles';
import React from 'react';
import GlobalStyle from 'shared/GlobalStyle';
/**
 *
 * @returns {JSX.Element}
 */
function App() {
 return (
  <React.Fragment>
   <GlobalStyle/>
   <MotociclesProvider>
    <TableMotorcicles />
   </MotociclesProvider>
  </React.Fragment>
 )
}

export default App
