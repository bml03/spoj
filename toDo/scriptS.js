const todos = [
  { title: "Shopping", desc: "buy groceries", status: "todo" },
  { title: "Shopping", desc: "buy cloths", status: "todo" },
  { title: "play game", desc: "cs", status: "inProgress" },
  { title: "Reading", desc: "book", status: "todo" },
  { title: "Reading", desc: "paper", status: "todo" },
  { title: "play game", desc: "chess", status: "inProgress" },
  { title: "Studying", desc: "wA", status: "inProgress" },
  { title: "Cleaning", desc: "house", status: "done" },
  { title: "Cleaning", desc: "garage", status: "done" },
  { title: "Take exams", desc: "math", status: "done" },
  { title: "Take exams", desc: "history", status: "done" },
  { title: "walking", desc: "some place", status: "stuck" },
  { title: "listening", desc: "song", status: "inProgress" },
  { title: "writing", desc: "css", status: "stuck" },
  { title: "writing", desc: "code", status: "stuck" },
  { title: "fixing", desc: "something", status: "stuck" },
]; // ene array 16 lenth bolgono

// filterleed todo/inprogress/stuck/done nuudiig gargana
// let todo = [];
// for (let i = 0; i < todos.length; i++) {
//   if (todos[i].status === `todo`) {
//     todo = [...todo, todos[i]];
//   }
// }
let filteredTodo = todos.filter((todo) => {
  return todo.status === `todo`;
});

let filteredInProg = todos.filter((todo) => {
  return todo.status === `inProgress`;
});

let filteredStuck = todos.filter((todo) => {
  return todo.status === `stuck`;
});

let filteredDone = todos.filter((todo) => {
  return todo.status === `done`;
});
function addTodo() {
  todos.push(``);
}
console.log("todo", filteredTodo);
console.log("progress", filteredInProg);
console.log("stuck", filteredStuck);
console.log("done", filteredDone);
