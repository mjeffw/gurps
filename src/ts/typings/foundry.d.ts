/** 
 * Foundry Typings
 * ===============
 * The following type definitions are intended to be a _shallow_ representation
 * of the globally accessible Foundry objects on the global scope. Append this
 * document using the API Docs if a Foundry object is not defined already.
 * https://foundryvtt.com/api/ 
 * 
*/

/**
 * An abstract pattern for defining an Application responsible for updating some
 * object using an HTML form
 * https://foundryvtt.com/api/FormApplication.html
 */
class FormApplication {}

/**
 * Extend the FormApplication pattern to incorporate specific logic for viewing
 * or editing Entity instances.
 * https://foundryvtt.com/api/BaseEntitySheet.html
 */
class BaseEntitySheet extends FormApplication {}

/**
 * An abstract class pattern for all primary data entities within the Foundry 
 * VTT Framework
 * https://foundryvtt.com/api/Entity.html
 */
class Entity {
  apps: {}
  options: { compendium?: {} }
  constructor(data, options) {
    this._data = data || {}
    this.data = this._data
    this.apps = {}
    this.options = options
  }

  create: (data, options:object={}) => Promise<any>
}

/**
 * A reusable storage concept which blends the functionality of an Array with
 * the efficient key-based lookup of a Map.
 * https://foundryvtt.com/api/Collection.html
 */
class Collection extends Map {
  constructor(entries) {
    super(entries)
  }
}

/**
 * An iterable container of Entity objects within the Foundry Virtual Tabletop
 * framework.
 * https://foundryvtt.com/api/EntityCollection.html
 */
class EntityCollection extends Collection {
  constructor(data) {
    this._source = data
  }
}

/**
 * The EntityCollection of RollTable entities
 * https://foundryvtt.com/api/RollTables.html
 */
class RollTables extends EntityCollection {}

/**
 * The RollTable entity which implements randomized rollable tables
 * https://foundryvtt.com/api/RollTable.html
 */
class RollTable extends Entity {}

/**
 * The Combat Entity defines a particular combat encounter which can occur
 * within the game session Combat instances belong to the CombatEncounters
 * collection
 * https://foundryvtt.com/api/Combat.html
 */
class Combat extends Entity {}

/**
 * The EntityCollection of Combat entities
 * https://foundryvtt.com/api/CombatEncounters.html
 */
class CombatEncounters extends EntityCollection {}

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
 * The Actor Entity which represents the protagonists, characters, enemies, and
 * more that inhabit and take actions within the World.
 * https://foundryvtt.com/api/Actor.html
 */
class Actor {
  constructor(...args) {
    super(...args)
  }
}

/**
 * The EntityCollection of Actor entities.
 * https://foundryvtt.com/api/Actors.html
 */
class Actors extends EntityCollection {
  tokens: object
  constructor(...args) {
    super(...args)
    this.tokens = {}
  }
}

/**
 * The item entity
 * https://foundryvtt.com/api/Item.html
 */
class Item extends Entity {}

/**
 * The EntityCollection of Item entities The items collection is accessible 
 * within the game as game.items
 * https://foundryvtt.com/api/Items.html
 */
class Items extends EntityCollection {}

/**
 * The default Item Sheet
 * https://foundryvtt.com/api/ItemSheet.html
 */
class ItemSheet extends BaseEntitySheet {}

/**
 * The Chat Message class is a type of Entity which represents individual
 * messages in the chat log.
 * https://foundryvtt.com/api/ChatMessage.html
 */
class ChatMessage extends Entity {}

/**
 * An EntityCollection of ChatMessage entities The Messages 
 * collection is accessible within the game as game.messages.
 * https://foundryvtt.com/api/Messages.html
 */
class Messages extends EntityCollection {}

/**
 * A standalone, pure JavaScript implementation of the Mersenne Twister pseudo
 * random number generator.
 * https://foundryvtt.com/api/MersenneTwister.html
 */
type MersenneTwister = any

/**
 * An array of status effect icons which can be applied to Tokens
 */
declare type statusEffect = {
  id: string
  label: string
  icon: string
}

/**
 * Runtime configuration settings for Foundry VTT which exposes a large number 
 * of variables which determine how aspects of the software behaves.
 * https://foundryvtt.com/api/global.html#CONFIG
 */
declare const CONFIG: { 
  statusEffects: statusEffect[]
  Actor: {
    entityClass: Actor
    collection: Actors
    sheetClasses: object
    sidebarIcon: string
    typeLabels: object
  }
  ChatMessage: {
    entityClass: ChatMessage
    collection: Messages
    template: string
    sidebarIcon: string
    batchSize: number
  }
  Combat: {
    entityClass: Combat
    collection: CombatEncounters
    defeatedStatusId: string
    sidebarIcon: string
    initiative: {
      formula?: string
      decimals: number
    }
  }
  Dice: {
    types: [Die, FateDie]
    rollModes: { [key: string]: string }
    rolls: Roll[]
    terms: {
      "c": Coin
      "d": Die
      "f": FateDie
    }
    randomUniform: MersenneTwister.random
  }
  Item: {
    entityClass: Item
    collection: Items
    sheetClass: ItemSheet
    sheetClasses: object
    sidebarIcon: string
    typeLabels: object
  }
  RollTable: {
    entityClass: RollTable
    collection: RollTables
    sidebarIcon: string
    resultIcon: string
    resultTemplate: string
  }
  sounds: {
    dice: string
    lock: string
    notification: string
    combat: string
  }
  Combat: Combat
  GURPS: GURPSGlobal
}