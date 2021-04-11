import useSchedule from '../../hooks/useSchedule';
import React from 'react'
import Table from 'components/Table';
/**
 *
 * @returns {JSX.Element}
 */
function ScheduleMotorcicles({ motorcicleId }) {
 const { isSelected, push, schedules } = useSchedule();
 return (
  <React.Fragment>
   {schedules.map(({ index }, i) => {
    const active = isSelected(index, motorcicleId);
    return (
     <Table.Cell
      key={i}
      className={`border interactable ${active ? 'active' : ''}`.trim()}
      onClick={() => push(index, motorcicleId)}/>
    );
   })}
  </React.Fragment>
 )
}

export default ScheduleMotorcicles;
