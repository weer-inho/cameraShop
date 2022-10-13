import {createReducer} from '@reduxjs/toolkit';
import { setDataLoadedStatus, loadCameras} from './action';
import {cameraType} from '../types/types';

const initialState = {
  cameras: [] as cameraType[],
  isDataLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(loadCameras, (state, action) => {
      state.cameras = action.payload;
    });
});
