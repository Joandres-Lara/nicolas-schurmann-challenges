import ScheduleMotorcicles from '../ScheduleMotorcicles';
import Table from 'components/Table';
import React from 'react';

import motorcicles from '../../data/motorcicles';
import schedules from '../../data/schedules';
/**
 *
 * @returns {JSX.Element}
 */
function TableMotocicles() {
 return (
  <Table>
   <Table.Header>
    <Table.Row>
     <Table.Cell/>
     {schedules.map(({ hour }, i) => {
      return (
       <Table.Cell key={i}>
        {hour}
       </Table.Cell>
      );
     })}
    </Table.Row>
   </Table.Header>
   <Table.Body>
    {motorcicles.map(({ name }, i) => {
     return (
      <Table.Row key={i}>
       <Table.Cell>
        {name}
       </Table.Cell>
       <ScheduleMotorcicles
        motorcicleId={i}
       />
      </Table.Row>
     );
    })}
   </Table.Body>
  </Table>
 )
}

export default TableMotocicles
