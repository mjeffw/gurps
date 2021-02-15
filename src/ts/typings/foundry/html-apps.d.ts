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