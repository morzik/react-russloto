export const REQUIRED_MESSAGE = "заполни поле";
export const FORMAT_MESSAGE = "неправильный формат";

/**
 * @param {string|{message}} name
 * @return {{required: *}}
 */
export function required(name) {
  return {
    required: name?.message || REQUIRED_MESSAGE
  }
}

export function email(name) {
  return {
    ...required(name),
    pattern: {
      value: /.+@.+\..+/,
      message: FORMAT_MESSAGE
    },
  }
}
