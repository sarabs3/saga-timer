export function simpleActionCreator() {
  return dispath => {
    dispath({
      type: 'SIMPLE_ACTION_LOADING',
    });
    fetch('https://raw.githubusercontent.com/beetbox/beets/master/beets/logging.py')
      .then(response => response.text())
      .then(data =>
        dispath({
          type: 'SIMPLE_ACTION',
          payload: data,
        }),
      );
  };
}
