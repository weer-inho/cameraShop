import {createReducer} from '@reduxjs/toolkit';
import {setDataLoadedStatus, loadCameras, loadOffer, loadOfferComments, loadOfferNearBy} from './action';
import {cameraType, reviewType} from '../types/types';

const initialState = {
  currentOffer: {} as cameraType,
  currentComments: {} as reviewType[],
  currentNearBy: {} as cameraType[],
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
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadOfferComments, (state, action) => {
      state.currentComments = action.payload;
    })
    .addCase(loadOfferNearBy, (state, action) => {
      state.currentNearBy = action.payload;
    });
});
