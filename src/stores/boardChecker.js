import { defineStore } from 'pinia';
import { sharedLogic } from '@/utilities/sharedBoardLogic';

export const useBoardStore = defineStore('board', {
  state: () => ({
    deck: [],
    stones: [
        { id: 0, PlayerOne: [], PlayerTwo: [], Winner: null, Status: null },
        { id: 1, PlayerOne: [], PlayerTwo: [], Winner: null, Status: null },
        { id: 2, PlayerOne: [], PlayerTwo: [], Winner: null, Status: null },
        { id: 3, PlayerOne: [], PlayerTwo: [], Winner: null, Status: null },
        { id: 4, PlayerOne: [], PlayerTwo: [], Winner: null, Status: null },
        { id: 5, PlayerOne: [], PlayerTwo: [], Winner: null, Status: null },
        { id: 6, PlayerOne: [], PlayerTwo: [], Winner: null, Status: null },
        { id: 7, PlayerOne: [], PlayerTwo: [], Winner: null, Status: null },
        { id: 8, PlayerOne: [], PlayerTwo: [], Winner: null, Status: null },
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