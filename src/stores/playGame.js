import { defineStore } from 'pinia';
import axios from 'axios';

const API_BASE_URL = 'https://localhost:7165/board';

export const usePlayGameStore = defineStore('playGame', {
  state: () => ({
    deck: [],
    playerOneHand: [],
    playerTwoHand: [],
    stones: [ ],
  }),
  actions: {
    async deal() {
      try {
        const response = await axios.get(`${API_BASE_URL}/getInitialGameState`);
        this.playerOneHand.length = 0;
        this.playerOneHand.push(...response.data.playerOneHand);
        this.playerTwoHand.length = 0;
        this.playerTwoHand.push(...response.data.playerTwoHand);
        this.stones.length = 0;
        this.stones.push(...response.data.stones);
      } catch (error) {
        console.error('Error dealing cards:', error);
      }
    },
    async selectCard(card) {
      //toggleSelection
      card.selected = !card.selected;
      //make sure no other card is selected
      this.playerOneHand.forEach(c => {
        if (c !== card) c.selected = false;
      });
    }
  },
});