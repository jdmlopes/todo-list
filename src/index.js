import taskFactory from "./models/task.js";
import * as listController from "./controllers/listController.js";
import { format, parseISO, addDays } from "date-fns";

listController.addProject("c1");
listController.addProject("c2");
listController.addProject("c3");

listController.addTask(
  "task 1",
  false,
  "high",
  "a task i have to do",
  format(new Date(), "yyyy-MM-dd"),
  [],
  "c1"
);
listController.addTask(
  "task 2",
  true,
  "low",
  "another task i have to do",
  format(parseISO("2023-04-20"), "yyyy-MM-dd"),
  [],
  "c1"
);
listController.addTask(
  "task 3",
  false,
  "low",
  "another task i have to do",
  format(new Date(), "yyyy-MM-dd"),
  [],
  "c2"
);
listController.addTask(
  "task 4",
  true,
  "low",
  "another task i have to do",
  format(parseISO("2023-04-15"), "yyyy-MM-dd"),
  [],
  "c3"
);
listController.addTask(
  "task 5",
  false,
  "low",
  "another task i have to do",
  format(parseISO("2023-04-30"), "yyyy-MM-dd"),
  [],
  "c3"
);

const checkList = [];
listController.addCheckItem("st1", false, checkList);
listController.addCheckItem("st2", true, checkList);

listController.addCheckList(checkList, "c2", 0);
console.table(checkList);

listController.filterList("all");
listController.sortList("done", false);
console.table(listController.getTaskList());
