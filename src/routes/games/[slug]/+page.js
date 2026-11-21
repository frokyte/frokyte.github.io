import {games} from '$lib/data/games.js';
export function entries(){return games.map(game=>({slug:game.slug}))}
export function load({params}){const game=games.find(item=>item.slug===params.slug);if(!game)return{game:null};return{game}}
