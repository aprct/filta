const filta = require('../index')

test('should find object with primitive string, number, or boolean prop', () => {
  const data = [
    {
      foo: 'hello world',
      bar: 0,
      baz: true
    },
    {
      foo: 'hello snurld',
      bar: 1,
      baz: false
    }
  ]

  const stringQuery = {
    foo: 'hello world'
  }
  const numberQuery = {
    bar: 0
  }
  const booleanQuery = {
    baz: true
  }

  const expected = [{
    foo: 'hello world',
    bar: 0,
    baz: true
  }]

  expect(filta(data, stringQuery)).toEqual(expected)
  expect(filta(data, numberQuery)).toEqual(expected)
  expect(filta(data, booleanQuery)).toEqual(expected)
})
