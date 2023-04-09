import projectFactory from "../models/project.js";
import { format, parseISO, addDays } from "date-fns";

const _projectList = [];
let _taskList = [];

export const getTaskList = () => {
  return _taskList;
};

export const addProject = (name, taskList) => {
  const project = projectFactory(name, taskList);
  _projectList.push(project);
};

export const deleteProject = (index) => {
  _projectList.splice(index, 1);
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

export const sortList = (field, order) => {};
