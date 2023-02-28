import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: [],
  reducers: {
    addCharacter: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    removeCharacter: (state, action) => {
      const index = state.findIndex(character => character.url === action.payload.url);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addCharacter, removeCharacter } = favouritesSlice.actions;

export default favouritesSlice.reducer;