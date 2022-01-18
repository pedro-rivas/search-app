const obj = require('../data/data.json');
/**
 * Search suggestions of a movie name
 * @param {*} input the name to be searched
 * @param {*} limit limit of suggestions default '100'
 * @returns a list of suggestions or {}
 */
export default function search(input, limit) {
  /**
   * Deafult limit
   */
  limit = limit ?? 100;
  /**
   * Return {} if the input is empty
   */
  if (!input) {
    return {};
  }
  /**
   * Expression to be matched
   */
  const regExpression = new RegExp(input, 'i');
  /**
   * List of suggestions
   */
  let suggestions = {};
  /**
   * Loop the dataset
   */
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      /**
       * Single movie name
       */
      const movieName = obj[key];
      /**
       * Check match
       */
      if (movieName.match(regExpression)) {
        /**
         * Save result
         */
        suggestions[key] = movieName;
      }
      /**
       * Break if it reached
       * the limit of suggestions
       */
      if (Object.entries(suggestions).length >= limit) break;
    }
  }
  /**
   * Return the suggestions
   */
  return suggestions;
}
