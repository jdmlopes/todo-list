export default function checkItemFactory(title, done) {
  let _title = title;
  let _done = done;

  const toggleDone = () => {
    _done = _done ? false : true;
  };
  return {
    get title() {
      return _title;
    },
    set title(title) {
      _title = title;
    },
    get done() {
      return _done;
    },
    set done(done) {
      _done = done;
    },
    toggleDone,
  };
}
