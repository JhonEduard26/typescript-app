const withoutEnd = () => {
  while (true) {
    console.log('Nunca pares de aprender!')
  }
}

const fail = (message: string) => {
  throw new Error(message)
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string'
  } else if (Array.isArray(input)) {
    return 'Es un array'
  }

  return fail('not match')
}

const rta = example([])
console.log(rta)