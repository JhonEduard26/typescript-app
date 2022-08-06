function parseStr(str: string | string[]): string | string[] {
  if (Array.isArray(str)) {
    return str.join('')
  } else {
    return [...str]
  }
}

const rta2 = parseStr('Jhon')

// * Asercion de tipos
if (Array.isArray(rta2)) {
  rta2.reverse()
}

console.log(parseStr(['J', 'h', 'o', 'n']))
console.log(parseStr('Jhon'))