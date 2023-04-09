import taskFactory from "./models/task.js";
import * as listController from "./controllers/listController.js";

let task = taskFactory(
  "task 1",
  false,
  "high",
  "a task i have to do",
  new Date(),
  [],
  "tasks"
);
let task2 = taskFactory(
  "task 2",
  false,
  "low",
  "another task i have to do",
  new Date(),
  [],
  "tasks"
);
let task3 = taskFactory(
  "task 3",
  false,
  "low",
  "another task i have to do",
  new Date(),
  [],
  "tasks"
);
let task4 = taskFactory(
  "task 4",
  false,
  "low",
  "another task i have to do",
  new Date(),
  [],
  "tasks"
);
let task5 = taskFactory(
  "task 5",
  false,
  "low",
  "another task i have to do",
  new Date(),
  [],
  "tasks"
);

listController.addProject("c1", [task, task2]);
listController.addProject("c3", [task4, task5]);
listController.addProject("c2", [task3]);
listController.filterList("c2");
console.table(listController.getTaskList());
