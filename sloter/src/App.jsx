import { Provider as MotociclesProvider } from './contexts/motocicles';
import { TableMotocicles } from './components/TableMotocicles';
import React from 'react';
/**
 *
 * @returns {JSX.Element}
 */
function App() {
 return (
  <MotociclesProvider>
   <TableMotocicles/>
  </MotociclesProvider>
 )
}

export default App
