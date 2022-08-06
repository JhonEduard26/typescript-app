export function parseStr(input: string): string[]
export function parseStr(input: string[]): string


export function parseStr(str: string | string[]): string | string[] {
  if (Array.isArray(str)) {
    return str.join('')
  } else {
    return [...str]
  }
}

const rtaArr = parseStr('Jhon')
const rtaStr = parseStr(['J', 'h', 'o', 'n'])

console.log(rtaArr)
console.log(rtaStr)