var trials = require('trials');

var souls = [
  [ // highs
    '̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒',  '͗',
    '͑',  '̇', '̈', '̊', '͂',  '̓', '̈', '͊',  '͋',  '͌',
    '̃', '̂', '̌', '͐',  '̀', '́', '̋', '̏', '̒', '̓',
    '̔', '̽', '̉', 'ͣ',  'ͤ',  'ͥ',  'ͦ',  'ͧ',  'ͨ',  'ͩ',
    'ͪ',  'ͫ',  'ͬ',  'ͭ',  'ͮ',  'ͯ',  '̾', '͛',  '͆',  '̚'
  ],
  [ // mids
    '̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴', '̵',
    '̶', '͜',  '͝',  '͞',  '͟',  '͠',  '͢',  '̸', '̷', '͡', '҉'
  ],
  [ // lows
    '̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤',
    '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰',
    '̱', '̲', '̳', '̹', '̺', '̻', '̼', 'ͅ',  '͇',  '͈',
    '͉',  '͍',  '͎',  '͓',  '͔',  '͕',  '͖',  '͙',  '͚',  '̣'
  ]
];

var zalgo = module.exports = function (str, p, maxs) {
  maxs = maxs || [5, 3, 5];
  p = p || 0.2;

  var res = '';
  for (var i = 0; i < str.length; i += 1) {
    res += str[i];
    for (var k = 0; k < souls.length; k += 1) {
      res += trials.cluster(souls[k], maxs[k], p).join('');
    }
  }
  return res;
};

// in case people want to attempt sanitize a string
zalgo.souls = function () {
  return souls;
};
