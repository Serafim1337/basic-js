const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let map = new Map();
  for (let d of domains) {
    let sortedDomain = d
      .split(".")
      .reverse()
      .map((item) => "." + item);

    for (let i = 0; i < sortedDomain.length; i++) {
      let domainPart = sortedDomain.slice(0, i + 1).join("");

      if (map.has(domainPart)) {
        let counter = map.get(domainPart);
        map.set(domainPart, counter + 1);
      } else {
        map.set(domainPart, 1);
      }
    }
  }

  return Object.fromEntries(map);
}

module.exports = {
  getDNSStats,
};
