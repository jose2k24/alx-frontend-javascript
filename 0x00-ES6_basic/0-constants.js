/**
 * Returns a string that expresses a preference for using const.
 * @returns {string} A string expressing a preference for using const.
 */
export function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
  }
  
  /**
   * Returns a string that combines a variable declared with let and another string.
   * @returns {string} A string that combines a variable declared with let and another string.
   */
  export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();
  
    return combination;
  }
  
  /**
   * Returns a string that expresses an opinion that something is okay.
   * @returns {string} A string expressing an opinion that something is okay.
   */
  export function getLast() {
    return ' is okay';
  }
  