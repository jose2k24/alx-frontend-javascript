#!/usr/bin/python3

/**
 * Returns a string that expresses a preference for using const.
 * @returns {string} A string expressing a preference for using const.
 */
let taskFirst = () => {
  const task = 'I prefer const when I can.';
  return task;
};

export function getLast() {
  return ' is okay';
}

let taskNext = () => {
  let combination = 'But sometimes let';
  combination += getLast();
  return combination;
};

export { taskFirst, taskNext };
  