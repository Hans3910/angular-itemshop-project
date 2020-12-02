import {Item} from './item';

// What is the purpose of the ResultObject??
// The JSON response of the Pokemon API does not contains the "Pokemons" directly.
// They are available in the 'results' key.
// The ResultObject only purpuse is to temporarily store the information, before passing it on.

export interface ResultObject {
  items: Item[];
}
