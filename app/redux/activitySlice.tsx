import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActivityState {
  value: string;
}

const initialState: ActivityState = {
  value: '',
};

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setActivity: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setActivity } = activitySlice.actions;
export default activitySlice.reducer;