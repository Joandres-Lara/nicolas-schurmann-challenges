export default (function(from, to){
 const todo = [];
 let index = 0;

 while(from < to){
  todo.push({
   hour: `${from}:00`,
   index
  });

  index++;

  todo.push({
   hour: `${from}:30`,
   index
  });

  index++;

  from++;
 }

 todo.push({
  hour: `${from}:00`,
  index
 });

 return todo;
})(8, 20);
