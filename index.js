const equals = (value1, value2) => {
  if( typeof value1 !== typeof value2 ) {
    return false;
  }

  const type = Array.isArray(value1) ? 'array' : typeof value1

  switch(type) {
    case 'number':
    case 'string':
    case 'boolean':
      return value1 === value2

    default:
      return false
  }
}

const match = (d, query) => {
  return Object.keys(query)
    .map(k => equals(query[k], d[k]))
    .reduce((sum, value) => sum && value)
}

const filta = (data, query) => {
  return data
    .filter(d => match(d, query))
}

module.exports = filta
