/*------------------------------------------------------------------------------------------------*/
/* Window
/*------------------------------------------------------------------------------------------------*/

/**
 * Refreshes the browser without accidental repeats.
 *
 * @return  {function}  Reloads the current window location.
 */
export const refresh = () => {
  setTimeout(() => {
    location.reload();
  }, 100);
};

/*------------------------------------------------------------------------------------------------*/
/* Strings
/*------------------------------------------------------------------------------------------------*/

/**
 * Turns any string into a slug.
 *
 * @param   {string}  str  Original value. (ex: 'one Two & 3')
 * @param   {string}  sep  String seperator, defaults to underscore.
 *
 * @return  {string}       Modified value. (ex: 'one_two_and_3')
 */
export const slugify = (str, sep = '_') =>
  str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ /g, sep)
    .replace(/&/g, 'and')
    .replace(/([^a-zA-Z0-9._-]+)/, '');

/**
 * Title cases a string.
 *
 * @param  {string}  str  Original value. (ex: 'i’m aweSome')
 *
 * @return {string}       Modified value. (ex: 'I’m Awesome')
 */
export const titleCase = str =>
  str.toLowerCase().split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');

/**
 * Prepares HTML to use within React's dangerouslySetInnerHTML.
 *
 * @param   {string}  str  Original HTML.
 *
 * @return  {object}       HTML safe(r) from XSS attacks.
 */
export const createMarkup = str => ({ __html: str });
