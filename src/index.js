import checkItemFactory from "./models/checkItem.js";
import taskFactory from "./models/task.js";
import categoryFactory from "./models/category.js";

let s_task = checkItemFactory("test", true);
let s_task2 = checkItemFactory("a sub task", false);
let task = taskFactory(
  "a simple task",
  false,
  "high",
  "a task i have to do",
  new Date(),
  [s_task, s_task2],
  "tasks"
);
let task2 = taskFactory(
  "another simple task",
  false,
  "low",
  "nother task i have to do",
  new Date(),
  [s_task],
  "tasks"
);

let category = categoryFactory("tasks", [task, task2]);

console.log(category);
