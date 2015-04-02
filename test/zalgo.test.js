var set = require('subset')
  , zalgo = require(process.env.ZALGO_COV ? '../zalgo-cov.js' : '../');

exports.zalgo = function (t) {
  var str = 'he comes';
  var zalgd = zalgo(str, [10,10,10]);
  t.ok(zalgd, "zalgo works");
  t.ok(zalgd.length >= str.length, "zalgolizer generally expands the string");
  var souls = zalgo.souls();
  var allSouls = [].concat(souls[0], souls[1], souls[2]);

  var diff = set.nub(set.difference(zalgd.split(''), str.split('')));
  t.ok(set.isSubsetOf(diff, allSouls), "(zalgo(str)) \\ str) ⊆ souls");

  // test that max rolls work
  var zalgHi = zalgo(str, 1, [1, 0, 0]);
  var diffHi = set.nub(set.difference(zalgHi.split(''), str.split('')));
  t.ok(set.isSubsetOf(diffHi, souls[0]), "(zalgo(str, High) \\ str) ⊆ soulsHigh");

  var zalgMid = zalgo(str, 1, [0, 1, 0]);
  var diffMid = set.nub(set.difference(zalgMid.split(''), str.split('')));
  t.ok(set.isSubsetOf(diffMid, souls[1]), "(zalgo(str, Mid) \\ str) ⊆ soulsMid");

  var zalgLo = zalgo(str, 1, [0, 0, 1]);
  var diffLo = set.nub(set.difference(zalgLo.split(''), str.split('')));
  t.ok(set.isSubsetOf(diffLo, souls[2]), "(zalgo(str, Low) \\ str) ⊆ soulsLow");

  t.done();
};
