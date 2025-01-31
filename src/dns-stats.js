const { NotImplementedError } = require('../extensions/index.js');

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
// function getDNSStats(/* domains */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function getDNSStats(domains) {
  if (domains.length === 0) {
    return {};
  }

  console.log(domains)
  let domainObj = {};

  for (let elem of domains) {
    let dns = elem.split('.').reverse()
    let keyDNS = "";
    for (let i = 0; i < dns.length; i++) {
      keyDNS = `${keyDNS}.${dns[i]}`;
      domainObj[keyDNS] ? domainObj[keyDNS] += 1 : domainObj[keyDNS] = 1;
    }
  }

  return domainObj
}

module.exports = {
  getDNSStats
};
