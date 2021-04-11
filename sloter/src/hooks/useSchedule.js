import contextMotorcicles from '../contexts/motorcicles';
import schedules from '../data/schedules';
import React from 'react';

/**
 *
 * @returns {object<selected: array, push: function<() => void>, isSelected: (index: number, motorcicleId: number) => boolean>}
 */
export default function useSchedule(){
 const {
  push: pushMotorcicle,
  remove: removeMotorcicle,
  selecteds
 } = React.useContext(contextMotorcicles);

 const compare = (index, motorcicleId) => (v) => v.index === index && v.motorcicleId === motorcicleId;

 const findCurrentIndex = (index, motorcicleId) => selecteds.findIndex(compare(index, motorcicleId));

 const isSelected = React.useCallback((index, motorcicleId) => {
  return findCurrentIndex(index, motorcicleId) !== -1;
 })

 const push = React.useCallback((index, motorcicleId) => {
  const arrayIndex = findCurrentIndex(index, motorcicleId);
  if(arrayIndex !== -1){
   removeMotorcicle(arrayIndex);
  } else {
   pushMotorcicle({ index, motorcicleId });
  }
 });

 return {
  push,
  isSelected,
  schedules
 }
}
