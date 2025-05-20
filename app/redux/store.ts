
import { configureStore } from '@reduxjs/toolkit';
import moodReducer from './moodSlice';
import treatReducer from './treatslice2';
import activityReducer from './activitySlice';

export const store = configureStore({
  reducer: {
    mood: moodReducer,
    treat: treatReducer,
    activity: activityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;