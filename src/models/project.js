export default function projectFactory(name, taskList) {
  let _name = name;
  let _taskList = taskList;

  const addTask = (task) => {
    _taskList.push(task);
  };

  const deleteTask = (index) => {
    _taskList.splice(index, 1);
  };

  return {
    get name() {
      return _name;
    },
    get taskList() {
      return _taskList;
    },
    set name(name) {
      _name = name;
    },
    set taskList(taskList) {
      _taskList = taskList;
    },
    addTask,
    deleteTask
  };
}
