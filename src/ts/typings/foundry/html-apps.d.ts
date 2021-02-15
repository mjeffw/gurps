/**
 * The standard application window that is rendered for a large variety of UI 
 * elements in Foundry VTT.  
 * https://foundryvtt.com/api/Application.html
 */
class Application {
  constructor(options={}){
    this.options = mergeObject(
      Application.defaultOptions,
      options,
      {
        insertKeys: true,
        insertValues: true,
        overwrite: true,
        inplace: false
      }
    )
  }
  
  static get defaultOptions() {
    return {
      baseApplication: null,
      width: null,
      height: null,
      top: null,
      left: null,
      popOut: true,
      minimizable: true,
      resizable: false,
      id: "",
      classes: [],
      dragDrop: [],
      tabs: [],
      filters: [],
      title: "",
      template: null,
      scrollY: []
    }
  }
}

/**
 * An abstract pattern for defining an Application responsible for updating some
 * object using an HTML form
 * https://foundryvtt.com/api/FormApplication.html
 */
class FormApplication extends Application {}

/**
 * Extend the FormApplication pattern to incorporate specific logic for viewing
 * or editing Entity instances.
 * https://foundryvtt.com/api/BaseEntitySheet.html
 */
class BaseEntitySheet extends FormApplication {}