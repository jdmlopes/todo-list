export default function taskFactory(
  title,
  done,
  priority,
  description,
  dueDate,
  checkList,
  projectName
) {
  let _title = title;
  let _done = done;
  let _priority = priority;
  let _description = description;
  let _dueDate = dueDate;
  let _checkList = checkList;
  let _projectName = projectName;

  return {
    get title() {
      return _title;
    },
    get done() {
      return _done;
    },
    get priority() {
      return _priority;
    },
    get description() {
      return _description;
    },
    get dueDate() {
      return _dueDate;
    },
    get checkList() {
      return _checkList;
    },
    get projectName() {
      return _projectName;
    },
    set title(title) {
      _title = title;
    },
    set done(done) {
      _done = done;
    },
    set priority(priority) {
      _priority = priority;
    },
    set description(description) {
      _description = description;
    },
    set dueDate(dueDate) {
      _dueDate = dueDate;
    },
    set checkList(checkList) {
      _checkList = checkList;
    },
    set projectName(projectName) {
      _projectName = projectName;
    }
  };
}
