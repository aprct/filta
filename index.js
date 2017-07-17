const type = (value1, value2) =>
  typeof value1 !== typeof value2 ?
    false :
    ( Array.isArray(value1) ?
      'array' :
      typeof value1 )

const intersects = (queryArray, dataArray) => {
  return queryArray
    .map(v => dataArray.indexOf(v) !== -1)
    .reduce((sum, value) => sum || value)
}

const matches = (queryValue, dataValue) => {
  switch(type(queryValue, dataValue)) {
    case 'number':
    case 'string':
    case 'boolean':
      return queryValue === dataValue

    case 'array':
      return intersects(queryValue, dataValue)

    default:
      return false
  }
}

const match = (d, query) => {
  return Object.keys(query)
    .map(k => matches(query[k], d[k]))
    .reduce((sum, value) => sum && value)
}

const filta = (data, query) => {
  return data
    .filter(d => match(d, query))
}

module.exports = filta
