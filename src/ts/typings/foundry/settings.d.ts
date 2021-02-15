/**
 * An abstract interface for managing defined game settings or settings menus 
 * for different packages
 */
class ClientSettings {
  /**
   * Register a new game setting  
   * https://foundryvtt.com/api/ClientSettings.html#register
   * @param module - module ID
   * @param key - setting ID
   * @param data - object with settings configuration
   */
  register: (
    module: string, key: string, data: { [key: string]: any }
  ) => void

  /**
   * Register a new sub-settings menu
   * https://foundryvtt.com/api/ClientSettings.html#registerMenu
   * @param module - module ID
   * @param key - setting ID
   * @param data - object with settings configuration
   */
  registerMenu: (
    module: string, key: string, data: { [key: string]: any }
  ) => void
  
  /**
   * Get the value of a game setting for a certain module and setting key
   * @param module - module ID
   * @param key - setting ID
   */
  get: (module: string, key: string) => object
}

/**
 * A helper class which assists with localization and string translation
 * https://foundryvtt.com/api/Localization.html
 */
class Localization {
  lang: string
  
  /**
   * Localize a string including variable formatting for input arguments. 
   * Provide a string ID which defines the localized template. Variables can be 
   * included in the template enclosed in braces and will be substituted using 
   * those named keys.
   * @param stringId - Location of the template
   * @param data - Object containing key-value pairs for template data
   */
  format: (stringId: string, data: { [key: string]: string }) => string

  /**
   * Localize a string by drawing a translation from the available translations
   * dictionary, if available If a translation is not available, the original
   * string is returned
   * @param stringId - Location of the template
   */
  localize: (stringId: string) => string

  /**
   * Return whether a certain string has a known translation defined.
   * @param stringId - The string key being translated
   * @param fallback - Allow fallback translations to count? (Default: true)
   */
  has: (stringId: string, fallback: boolean=true) => boolean
}