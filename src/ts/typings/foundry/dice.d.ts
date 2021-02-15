/**
 * An abstract base class for any term which appears in a dice roll formula
 * https://foundryvtt.com/api/DiceTerm.html
 */
class DiceTerm {
  number: number
  faces: number
  modifiers: string[]
  options: object
  results: object[]
  _evaluated: boolean
  constructor(number=1, faces=6, modifiers=[], options={}){
    this.number = number
    this.faces = faces
    this.modifiers = modifiers
    this.options = options
    this.results = []
    this._evaluated = false
  }
}

/**
 * A two-sided coin term that can be used as part of a Roll formula
 * https://foundryvtt.com/api/Coin.html
 */
class Coin extends DiceTerm {
  constructor(termData) {
    super(termData)
    this.faces = 2
  }
}

/**
 * A fair n-sided die term that can be used as part of a Roll formula
 * https://foundryvtt.com/api/Die.html
 */
class Die extends DiceTerm {
  constructor(termData) {
    super(termData)
  }
}

/**
 * A three-sided Fate/Fudge dice term that can be used as part of a Roll formula
 * Mathematically behaves like 1d3-2
 * https://foundryvtt.com/api/FateDie.html
 */
class FateDie extends DiceTerm {
  constructor(termData) {
    super(termData)
    this.faces = 3
  }
}

/**
 * This class provides an interface and API for conducting dice rolls. The basic 
 * structure for a dice roll is a string formula and an object of data against 
 * which to parse it.
 * https://foundryvtt.com/api/Roll.html
 */
class Roll {
  data: object
  formula: string
  constructor(formula, data={}) {
    this.data = data
    this.formula = formula
  }
}

/**
 * A standalone, pure JavaScript implementation of the Mersenne Twister pseudo
 * random number generator.
 * https://foundryvtt.com/api/MersenneTwister.html
 */
type MersenneTwister = any