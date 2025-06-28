import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const sharedLogic = {
  async getDeck() {
    const response = await axios.get(`${API_BASE_URL}/getDeck`);
    return response.data;
  },
  async boardCheck(stones) {
    const response = await axios.post(`${API_BASE_URL}/StoneStatus`, { Board: stones });
    if (response.status !== 200) {
      throw new Error('Failed to update stone statuses');
    }
    for (let i = 0; i < stones.length; i++) {
        stones[i].status = response.data[i].status;
        stones[i].winner = response.data[i].player;
      }
  },
};