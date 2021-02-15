/** 
 * Ambient Types
 * =============
 *
 * These are the globally scoped scoped objects derived from the other
 * Foundry types
 * 
*/

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

declare const game: {
  i18n: Localization,
  settings: ClientSettings,
  GURPS: GURPSGlobal
}
