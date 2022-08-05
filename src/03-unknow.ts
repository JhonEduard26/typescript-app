// ! let anyVar: any

let unknowVar: unknown

unknowVar = null
unknowVar = undefined
unknowVar = true
unknowVar = 1212
unknowVar = 'fefesf'

// ! unknowVar.doSomething()

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase()
}

if (typeof unknowVar === 'boolean') {
  let isNew: boolean = unknowVar
}