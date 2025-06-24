import { defineStore } from 'pinia';
import { sharedLogic } from '@/utilities/sharedBoardLogic';

export const useBoardStore = defineStore('board', {
  state: () => ({
    deck: [],
    stones: [
        { id: 0, playerOne: [], playerTwo: [], winner: null, status: null },
        { id: 1, playerOne: [], playerTwo: [], winner: null, status: null },
        { id: 2, playerOne: [], playerTwo: [], winner: null, status: null },
        { id: 3, playerOne: [], playerTwo: [], winner: null, status: null },
        { id: 4, playerOne: [], playerTwo: [], winner: null, status: null },
        { id: 5, playerOne: [], playerTwo: [], winner: null, status: null },
        { id: 6, playerOne: [], playerTwo: [], winner: null, status: null },
        { id: 7, playerOne: [], playerTwo: [], winner: null, status: null },
        { id: 8, playerOne: [], playerTwo: [], winner: null, status: null },
      ],
  }),
  actions: {
    async boardCheck() {
      await sharedLogic.boardCheck(this.stones);
    },
    async getDeck() {
      this.deck = await sharedLogic.getDeck();
    },
    removeFromDeck(card) {
        this.deck = this.deck.filter(c => c.color != card.color || c.value != card.value);
    }
  },
});