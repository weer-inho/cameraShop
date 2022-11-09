import {createReducer} from '@reduxjs/toolkit';
import {setDataLoadedStatus, loadPromo, loadCameras, loadOffer, loadOfferComments, loadNewComment, loadOfferNearBy} from './action';
import {cameraType, promoType, reviewType} from '../types/types';
import {sortCommentByTimes} from '../utils/utils';

const initialState = {
  currentOffer: {} as cameraType,
  currentComments: {} as reviewType[],
  currentNearBy: {} as cameraType[],
  cameras: [] as cameraType[],
  promo: {} as promoType,
  isDataLoaded: false,
  pageCount: 0 as number
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(loadCameras, (state, action) => {
      const CAMERAS_PAGE_SIZE = 9;
      if (action.payload.length > CAMERAS_PAGE_SIZE) {
        if (action.payload.length % CAMERAS_PAGE_SIZE === 0) {
          state.pageCount = action.payload.length % CAMERAS_PAGE_SIZE;
        } else {
          state.pageCount = (action.payload.length % CAMERAS_PAGE_SIZE) + 1;
        }
      } else {state.pageCount = 1;}
      state.cameras = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadOfferComments, (state, action) => {
      state.currentComments = action.payload.sort(sortCommentByTimes);
    })
    .addCase(loadNewComment, (state, action) => {
      state.currentComments = [action.payload, ...state.currentComments];
    })
    .addCase(loadOfferNearBy, (state, action) => {
      state.currentNearBy = action.payload;
    });
});
