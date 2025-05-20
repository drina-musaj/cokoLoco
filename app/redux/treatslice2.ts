import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TreatState {
  value: string;
}

const initialState: TreatState = {
  value: '',
};

const treatSlice2 = createSlice({
  name: 'treat',
  initialState,
  reducers: {
    setTreat: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setTreat } = treatSlice2.actions;
export default treatSlice2.reducer;
