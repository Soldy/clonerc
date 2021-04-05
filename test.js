const nanoTest  = new (require('nanoTest')).test({
    'debugPrint' : 'short'
});
const clonerc = new (require('./index.js')).base();
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

nanoTest.run();
