// Returns the number and pluralized form, like "5 cats" or "1 dog", given
// a noun and count.
function pluralize(noun, count) {
  // TODO: Implement this function.
  const result = undefined;
  if (count == 1) {
    return count + " " + noun
  }
  else {
    return count + " " + noun + "s"
  }
  return result;
}

// DO NOT CHANGE ANYTHING BELOW THIS LINE.

module.exports = {
  pluralize
};
