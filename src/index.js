import checkItemFactory from "./models/checkItem.js";
import taskFactory from "./models/task.js";

let s_task = checkItemFactory("test", true);
let s_task2 = checkItemFactory("a sub task", false);
let task = taskFactory(
  "a simple task",
  false,
  "high",
  "a task i have to do",
  new Date(),
  [s_task, s_task2],
  "none"
);

console.log(task);
