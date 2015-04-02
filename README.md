# Zalgolize
[![npm status](http://img.shields.io/npm/v/zalgolize.svg)](https://www.npmjs.org/package/zalgolize)
[![build status](https://secure.travis-ci.org/clux/zalgolize.svg)](http://travis-ci.org/clux/zalgolize)
[![dependency status](https://david-dm.org/clux/zalgolize.svg)](https://david-dm.org/clux/zalgolize)
[![coverage status](http://img.shields.io/coveralls/clux/zalgolize.svg)](https://coveralls.io/r/clux/zalgolize)

[H̸̡̪̯ͨ͊̽̅̾̎Ȩ̬̩̾͛ͪ̈́̀́͘ ̶̧̨̱̹̭̯ͧ̾ͬC̷̙̲̝͖ͭ̏ͥͮ͟Oͮ͏̮̪̝͍M̲̖͊̒ͪͩͬ̚̚͜Ȇ̴̟̟͙̞ͩ͌͝S̨̥̫͎̭ͯ̿̔̀ͅ](http://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags/1732454#1732454).

This is a uniform-clustered zalgolizer. It picks up to a specified number of symbols from each [subarray of souls](https://github.com/clux/zalgolize/blob/a24540db12b6c661d0f4a4ef9cfc70e5ee774399/zalgo.js#L3-21) at uniform randomness (with probability `p`), or picks from it no symbols at all (with probability `1-p`).

The probability lets you specify how clustered you want the symbols (`p=1` ⇒ completely uniform distribution, `p=0.5` ⇒ on average half the letters get nothing, the rest are uniformly distributed)

The different [soul types](https://github.com/clux/zalgolize/blob/a24540db12b6c661d0f4a4ef9cfc70e5ee774399/zalgo.js#L3-21) contain symbols that go above, in the middle of, or underneath the text respectively.

Some examples

```js
dye.zalgo('default zalgolization'); // p=.2, maxPicks = [5, 3, 5]
'd̠̤̟̰efauḻt z͂̈al̊̚g͈oli̷za̪͉t̽̅i̘̪̫̼on'

dye.zalgo('less clustered zalgolization', 0.7, [2, 1, 2]);
'l̠̇es̞̏s ̌cl̟usṯer͑eͦd ̲z̮̅aḻ̽g̞o̮l͉̉iza̐t̄iͅỏ͖n͖'

dye.zalgo('intense, clustered zalgolization', 0.2, [10, 5, 10])
'i̛̩͖̤̯̮͠ͅn̷͟t͢en̝͎͇͙̭sͧͤͨ̓͗̾e͑̐ͫ̒ͨ̓ͮ̏̑, c̓lů͚̺̦̰̪͓͐ͯ̈ster͍̤͖͗͌̇ͨͦͥ̚é͜d̨̡͘͞ za̋ͬͫlgͧ̏ͧ̃ͫͭͯ̈̆ol̲͕̳͓͍̯̠i̢͢z̙ation͡'
```

A windows command line is impenetrable by zalgo and will display question marks instead.

Finally, if you would like to sanitize / attempt to exorcise such a string, you can take the difference with the characters available via the exported `souls` function.