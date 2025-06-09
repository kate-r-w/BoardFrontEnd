import { defineStore } from 'pinia';
import axios from 'axios';

const API_BASE_URL = 'https://localhost:7165/board';

export const usePlayGameStore = defineStore('playGame', {
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
    async getDeck() {
      this.deck = await sharedLogic.getDeck();
    }
  },
});