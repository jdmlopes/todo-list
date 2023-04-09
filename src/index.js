import taskFactory from "./models/task.js";
import * as listController from "./controllers/listController.js";
import { format, parseISO, addDays } from "date-fns";

let task = taskFactory(
  "task 1",
  false,
  "high",
  "a task i have to do",
  format(new Date(), "yyyy-MM-dd"),
  [],
  "tasks"
);
let task2 = taskFactory(
  "task 2",
  false,
  "low",
  "another task i have to do",
  format(parseISO("2023-04-20"), "yyyy-MM-dd"),
  [],
  "tasks"
);
let task3 = taskFactory(
  "task 3",
  false,
  "low",
  "another task i have to do",
  format(new Date(), "yyyy-MM-dd"),
  [],
  "tasks"
);
let task4 = taskFactory(
  "task 4",
  false,
  "low",
  "another task i have to do",
  format(parseISO("2023-04-15"), "yyyy-MM-dd"),
  [],
  "tasks"
);
let task5 = taskFactory(
  "task 5",
  false,
  "low",
  "another task i have to do",
  format(parseISO("2023-04-30"), "yyyy-MM-dd"),
  [],
  "tasks"
);

listController.addProject("c1", [task, task2]);
listController.addProject("c2", [task3, task4]);
listController.addProject("c3", [task5]);
listController.filterList("thisWeek");
console.table(listController.getTaskList());
