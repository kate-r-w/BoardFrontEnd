import { defineStore } from 'pinia';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
    removeFromDeck(card) {
        this.deck = this.deck.filter(c => c.color != card.color || c.value != card.value);
    },
    async getDeck() {
      const response = await axios.get(`${API_BASE_URL}/getDeck`);
      this.deck = response.data;
    },
    async boardCheck() {
      const response = await axios.post(`${API_BASE_URL}/StoneStatus`, { Board: this.stones });
      if (response.status !== 200) {
        throw new Error('Failed to update stone statuses');
      }
      for (let i = 0; i < this.stones.length; i++) {
          this.stones[i].status = response.data[i].status;
          this.stones[i].winner = response.data[i].player;
        }
    }
  },
});