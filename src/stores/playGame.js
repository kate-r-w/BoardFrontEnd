import { defineStore } from 'pinia';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const usePlayGameStore = defineStore('playGame', {
  state: () => ({
    deck: [],
    playerOneHand: [],
    playerTwoHand: [],
    stones: [],
    selectedCard: null,
    locked: false,
    gameOver: false,
    winner: null
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
    async removeCardFromHand(card) {
      var newHand = this.playerTwoHand.filter(c => c.color != card.color || c.value != card.value);
      this.playerTwoHand.length = 0;
      this.playerTwoHand.push(...newHand);
    },
    async selectCard(card) {
      if (this.selectedCard == card) {
        this.selectedCard = null;
      }
      else {
        this.selectedCard = card;
      }
    },
    async playCard() {
      this.locked = true;
      try {
        const response = await axios.post(`${API_BASE_URL}/getNextGameState`,
          { Board: this.stones, PlayerOneHand: this.playerOneHand, PlayerTwoHand: this.playerTwoHand }
        );
        this.playerOneHand.length = 0;
        this.playerOneHand.push(...response.data.playerOneHand);
        this.playerTwoHand.length = 0;
        this.playerTwoHand.push(...response.data.playerTwoHand);
        for (let i = 0; i < this.stones.length; i++) {
          this.stones[i].playerOne.length = 0;
          this.stones[i].playerOne.push(...response.data.stones[i].playerOne);
          this.stones[i].playerTwo.length = 0;
          this.stones[i].playerTwo.push(...response.data.stones[i].playerTwo);
          this.stones[i].winner = response.data.stones[i].winner;
          this.stones[i].status = response.data.stones[i].status;
        }
        if (response.data.winner != null) {
          this.gameOver = true;
          this.winner = response.data.winner;
        }
        else {
          this.locked = false;
        }
      } catch (error) {
        console.error('Error getting next state:', error);
      }
    }
  },
});