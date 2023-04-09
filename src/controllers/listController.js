import projectFactory from "../models/project.js";

const _projectList = [];
let _taskList = [];

export function getTaskList() {
  return _taskList;
}

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
      break;
    case "thisWeek":
      break;
    default:
      _taskList = _projectList.find((c) => c.name === projectName).taskList;
  }
};

export const sortList = (field, order) => {};
