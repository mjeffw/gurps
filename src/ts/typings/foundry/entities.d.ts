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

  create: (data, options:object={}) => Promise<Entity|Entity[]>
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