/**
 * Generates a random alphanumeric ID.
 * @returns {string} The generated ID.
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
}
