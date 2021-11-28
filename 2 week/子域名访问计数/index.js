/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const map = new Map();
  for (const item of cpdomains) {
    let [count, cpdomain] = item.split(" ");
    const cpdomainArr = cpdomain.split(".");

    while (cpdomainArr.length > 0) {
      const cp = cpdomainArr.join(".");
      if (map.has(cp)) {
        map.set(cp, map.get(cp) + Number(count));
      } else {
        map.set(cp, Number(count));
      }
      cpdomainArr.shift();
    }
  }

  const ret = [];
  for (let [key, value] of map.entries()) {
    ret.push([value, key].join(" ")); // 用空格将数量和对应的域名组合成字符串，然后加在数组中
  }
  return ret;
};
