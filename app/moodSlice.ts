import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MoodState {
  value: string;
}

const initialState: MoodState = {
  value: '',
};

const moodSlice = createSlice({
  name: 'mood',
  initialState,
  reducers: {
    setMood: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setMood } = moodSlice.actions;
export default moodSlice.reducer;
