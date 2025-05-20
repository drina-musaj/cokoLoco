import { createSlice } from '@reduxjs/toolkit';

interface TreatState {
  count: number;
}

const initialState: TreatState = {
  count: 0,
};

const treatSlice = createSlice({
  name: 'treat',
  initialState,
  reducers: {
    giveTreat: (state) => {
      state.count += 1;
    },
    resetTreats: (state) => {
      state.count = 0;
    },
  },
});

export const { giveTreat, resetTreats } = treatSlice.actions;
export default treatSlice.reducer;