/**
 * @typedef {Object} Game
 * @property {string} slug
 * @property {string} title
 * @property {string} [shortDescription]
 * @property {string} [description]
 * @property {string} [status]
 * @property {boolean} [featured]
 * @property {string} [releaseDate]
 * @property {string} [releaseLabel]
 * @property {number} [price]
 * @property {string[]} [platforms]
 * @property {string[]} [genres]
 * @property {string} [cover]
 * @property {string} [hero]
 * @property {string} [ageRating]
 * @property {{label:string,url:string}[]} [stores]
 * @property {string} [priceLabel]
 * @property {{label:string,platform:string,version:string,size:string,url:string}[]} [downloads]
 * @property {string[]} [releaseNotes]
 * @property {{src:string,alt?:string}[]} [gallery]
 * @property {{minimum?:Record<string,string>,recommended?:Record<string,string>}} [systemRequirements]
 */

/** @type {Record<string, Game>} */
const files = /** @type {Record<string, Game>} */ (
  import.meta.glob('./games/*.json', { eager: true, import: 'default' })
);

/** @type {Game[]} */
export const games = Object.values(files);

export const featuredGames = games.filter((game) => game.featured);

export function getGame(slug) {
  return games.find((game) => game.slug === slug);
}
