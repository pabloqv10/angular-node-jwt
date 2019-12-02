exports.getTasks =  (req, res, next) => {
  return res.json([
    {
      _id: 1,
      name: 'Task one',
      description: 'lorem ipsum',
      date: '2019-11-24T19:51:55.156Z'
    },
    {
      _id: 2,
      name: 'Task two',
      description: 'lorem ipsum',
      date: '2019-11-24T19:51:55.156Z'
    },
    {
      _id: 3,
      name: 'Task three',
      description: 'lorem ipsum',
      date: '2019-11-24T19:51:55.156Z'
    }
  ])
}
