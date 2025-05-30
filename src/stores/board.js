import { defineStore } from 'pinia';
import axios from 'axios';

const API_BASE_URL = 'https://localhost:7165/board';

export const useBoardStore = defineStore('board', {
  state: () => ({
    deck: [],
    stones: [
        { id: 0, PlayerOne: [], PlayerTwo: [], Winner: null },
        { id: 1, PlayerOne: [], PlayerTwo: [], Winner: null },
        { id: 2, PlayerOne: [], PlayerTwo: [], Winner: null },
        { id: 3, PlayerOne: [], PlayerTwo: [], Winner: null },
        { id: 4, PlayerOne: [], PlayerTwo: [], Winner: null },
        { id: 5, PlayerOne: [], PlayerTwo: [], Winner: null },
        { id: 6, PlayerOne: [], PlayerTwo: [], Winner: null },
        { id: 7, PlayerOne: [], PlayerTwo: [], Winner: null },
        { id: 8, PlayerOne: [], PlayerTwo: [], Winner: null },
      ],
  }),
  actions: {
    async boardCheck() {
      const response = await axios.post(`${API_BASE_URL}/StoneStatus`, { Board: this.stones });
      if (response.status !== 200) {
        throw new Error('Failed to check board status');
      }
      for (let i = 0; i < this.stones.length; i++) {
        this.stones[i].Winner = response.data[i].player;
      }
      return response.data;
    },
    async getDeck() {
      const response = await axios.get(`${API_BASE_URL}/getDeck`);
      this.deck = response.data;
    },
    removeFromDeck(card) {
        this.deck = this.deck.filter(c => c.color != card.color || c.value != card.value);
    },
    addCardToStone(card, stoneId, player) {
      var stone = this.stones.find(s => s.id === stoneId);
      if (stone) {
        stone[player].push(card);
      }
    },
    getCardCombination(stoneId, player) {
      var stone = this.stones.find(s => s.id === stoneId);
      if (stone) {
        return stone[player];
      }
    }
  },
});