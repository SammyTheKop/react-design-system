/**
 * @name handleClickOutside
 * @description function to check when the user clicks outside the modal
 * @param {*} node
 * @param {*} clickedOutside
 * @returns none
 */
var handleClickOutside = function handleClickOutside(node, clickedOutside) {
  return function (event) {
    if (node && !node.current.contains(event.target)) {
      clickedOutside();
    }
  };
};

export default handleClickOutside;