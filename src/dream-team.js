const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let names;
  try {
    names = members.filter((item) => typeof item == "string");
  } catch (error) {
    return false;
  }

  let letters = names.map((item) =>
    item.replace(/\s/g, "").slice(0, 1).toUpperCase()
  );
  return letters.sort().join("");
}

module.exports = {
  createDreamTeam,
};
