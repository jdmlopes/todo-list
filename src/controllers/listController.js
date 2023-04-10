import projectFactory from "../models/project.js";
import taskFactory from "../models/task.js";
import checkItemFactory from "../models/checkItem.js";
import { format, parseISO, addDays } from "date-fns";

const _projectList = [];
let _taskList = [];

export const getTaskList = () => {
  return _taskList;
};

export const addProject = (name) => {
  const project = projectFactory(name, []);
  _projectList.push(project);
};

export const deleteProject = (index) => {
  _projectList.splice(index, 1);
};

export const addTask = (
  title,
  done,
  priority,
  description,
  dueDate,
  checkList,
  projectName
) => {
  const newTask = taskFactory(
    title,
    done,
    priority,
    description,
    dueDate,
    checkList,
    projectName
  );
  for (let p of _projectList) {
    if (p.name === projectName) {
      p.addTask(newTask);
      break;
    }
  }
};

export const deleteTask = (projectName, index) => {
  for (let p of _projectList) {
    if (p.name === projectName) {
      p.deleteTask(index);
      break;
    }
  }
};

export const addCheckList = (checkList, projectName, taskIndex) => {
  console.log("entrou");
  for (let p of _projectList) {
    if (p.name === projectName) {
      console.log("marcou marcou");
      p.taskList[taskIndex].checkList = checkList;
      break;
    }
  }
};

export const addCheckItem = (title, done, checklist) => {
  const newCheckItem = checkItemFactory(title, done);
  checklist.push(newCheckItem);
};

export const filterList = (projectName) => {
  switch (projectName) {
    case "all":
      _taskList.splice(0, _taskList.length);
      for (let c of _projectList) {
        for (let t of c.taskList) {
          _taskList.push(t);
        }
      }
      break;
    case "today":
      _taskList.splice(0, _taskList.length);
      for (let c of _projectList) {
        for (let t of c.taskList) {
          if (t.dueDate === format(new Date(), "yyyy-MM-dd")) _taskList.push(t);
        }
      }
      break;
    case "thisWeek":
      _taskList.splice(0, _taskList.length);
      for (let c of _projectList) {
        for (let t of c.taskList) {
          if (t.dueDate < format(addDays(new Date(), 7), "yyyy-MM-dd"))
            _taskList.push(t);
        }
      }
      break;
    default:
      _taskList = _projectList.find((c) => c.name === projectName).taskList;
  }
};

/* 
field: a valid field from the task object as a string
descending: a boolean value
 */
export const sortList = (field, descending) => {
  _taskList.sort((a, b) => {
    if (a[field] < b[field]) {
      return -1;
    }
    if (a[field] > b[field]) {
      return 1;
    }
    return 0;
  });
  if (descending) {
    _taskList.reverse();
  }
};
