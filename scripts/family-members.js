// run `mongo test family-members.js`
db.members.insertMany([
    {
        name: 'oren',
        nickname: 'orenCO',
        role: 'oren',
    },
    {
        name: 'dad',
        nickname: 'papa',
        role: 'father',
    },
    {
        name: 'mom',
        nickname: 'mama',
        role: 'mommy',
    },
    {
        name: 'tomer',
        nickname: 'tomCO',
        role: 'brother',
    }
]);
