import { defineStore } from 'pinia';
import axios from 'axios';

const API_BASE_URL = 'https://localhost:7165/board';

export const useBoardStore = defineStore('board', {
  state: () => ({
    deck: [],
    stones: []
  }),
  actions: {
    async getDeck() {
      const response = await axios.get(`${API_BASE_URL}/getDeck`);
      this.deck = response.data;
    },
    async removeFromDeck(card) {
        this.deck = this.deck.filter(c => c.color != card.color || c.value != card.value);
    }
  },
});