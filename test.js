const nanoTest  = new (require('nanoTest')).test({
    'debugPrint' : 'short'
});
const clonerc = new (require('./index.js')).base();
nanoTest.add(
    'fastest copy booolean false',
    {
        'function':clonerc.fastest,
        'options':[false]
    },
    '===',
    false
);
nanoTest.add(
    'fastest copy booolean true',
    {
        'function':clonerc.fastest,
        'options':[true]
    },
    '===',
    true
);
nanoTest.add(
    'fastest copy integer',
    {
        'function':clonerc.fastest,
        'options':[1]
    },
    '===',
    1
);
nanoTest.add(
    'fastest copy float',
    {
        'function':clonerc.fastest,
        'options':[1.15]
    },
    '===',
    1.15
);
nanoTest.add(
    'fastest copy array',
    {
        'function':clonerc.fastest,
        'options':[[1,2.2,3,'string']]
    },
    'j==',
    [1,2.2,3,'string']
);
nanoTest.add(
    'fastest copy object',
    {
        'function':clonerc.fastest,
        'options':[{a:1,b:2,c:3,d:'string'}]
    },
    'j==',
    {a:1,b:2,c:3,d:'string'}
);
nanoTest.add(
    'fast copy booolean false',
    {
        'function':clonerc.fast,
        'options':[false]
    },
    '===',
    false
);
nanoTest.add(
    'fast copy booolean true',
    {
        'function':clonerc.fast,
        'options':[true]
    },
    '===',
    true
);
nanoTest.add(
    'fast copy integer',
    {
        'function':clonerc.fast,
        'options':[1]
    },
    '===',
    1
);
nanoTest.add(
    'fast copy float',
    {
        'function':clonerc.fast,
        'options':[1.15]
    },
    '===',
    1.15
);
nanoTest.add(
    'fast copy array',
    {
        'function':clonerc.fast,
        'options':[[1,2.2,3,'string']]
    },
    'j==',
    [1,2.2,3,'string']
);
nanoTest.add(
    'fast copy object',
    {
        'function':clonerc.fast,
        'options':[{a:1,b:2,c:3,d:'string'}]
    },
    'j==',
    {a:1,b:2,c:3,d:'string'}
);
nanoTest.add(
    'faster copy booolean false',
    {
        'function':clonerc.faster,
        'options':[false]
    },
    '===',
    false
);
nanoTest.add(
    'faster copy booolean true',
    {
        'function':clonerc.faster,
        'options':[true]
    },
    '===',
    true
);
nanoTest.add(
    'faster copy integer',
    {
        'function':clonerc.faster,
        'options':[1]
    },
    '===',
    1
);
nanoTest.add(
    'faster copy float',
    {
        'function':clonerc.faster,
        'options':[1.15]
    },
    '===',
    1.15
);
nanoTest.add(
    'faster copy array',
    {
        'function':clonerc.faster,
        'options':[[1,2.2,3,'string']]
    },
    'j==',
    [1,2.2,3,'string']
);
nanoTest.add(
    'faster copy object',
    {
        'function':clonerc.faster,
        'options':[{a:1,b:2,c:3,d:'string'}]
    },
    'j==',
    {a:1,b:2,c:3,d:'string'}
);

nanoTest.add(
    'copy booolean false',
    {
        'function':clonerc.clone,
        'options':[false]
    },
    '===',
    false
);
nanoTest.add(
    'copy booolean true',
    {
        'function':clonerc.clone,
        'options':[true]
    },
    '===',
    true
);
nanoTest.add(
    'copy null',
    {
        'function':clonerc.clone,
        'options':[null]
    },
    '===',
    null
);
nanoTest.add(
    'copy integer',
    {
        'function':clonerc.clone,
        'options':[1]
    },
    '===',
    1
);
nanoTest.add(
    'copy float',
    {
        'function':clonerc.clone,
        'options':[1.15]
    },
    '===',
    1.15
);
nanoTest.add(
    'copy array',
    {
        'function':clonerc.clone,
        'options':[[1,2.2,3,'string']]
    },
    'j==',
    [1,2.2,3,'string']
);
nanoTest.add(
    'copy object',
    {
        'function':clonerc.clone,
        'options':[{a:1,b:2,c:3,d:'string'}]
    },
    'j==',
    {a:1,b:2,c:3,d:'string'}
);




nanoTest.add(
    'safe copy booolean false',
    {
        'function':clonerc.safe,
        'options':[false]
    },
    '===',
    false
);
nanoTest.add(
    'safe copy booolean true',
    {
        'function':clonerc.safe,
        'options':[true]
    },
    '===',
    true
);
nanoTest.add(
    'safe copy null',
    {
        'function':clonerc.safe,
        'options':[null]
    },
    '===',
    null
);
nanoTest.add(
    'safe copy integer',
    {
        'function':clonerc.safe,
        'options':[1]
    },
    '===',
    1
);
nanoTest.add(
    'safe copy float',
    {
        'function':clonerc.safe,
        'options':[1.15]
    },
    '===',
    1.15
);
nanoTest.add(
    'safe copy array',
    {
        'function':clonerc.safe,
        'options':[[1,2.2,3,'string']]
    },
    'j==',
    [1,2.2,3,'string']
);
nanoTest.add(
    'safe copy object',
    {
        'function':clonerc.safe,
        'options':[{a:1,b:2,c:3,d:'string'}]
    },
    'j==',
    {a:1,b:2,c:3,d:'string'}
);



nanoTest.run();
