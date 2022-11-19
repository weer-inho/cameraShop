import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../utils/const';
import {cameraType, OfferData, reviewType} from '../../types/types';
import {createCommentAction, fetchOfferAction, fetchOfferCommentsAction, fetchOffersNearByAction} from '../api-actions';


const initialState: OfferData = {
  currentOffer: {} as cameraType,
  currentComments: {} as reviewType[],
  currentNearBy: {} as cameraType[],
};

export const offerData = createSlice({
  name: NameSpace.OfferData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
        state.currentComments = action.payload;
      })
      .addCase(fetchOffersNearByAction.fulfilled, (state, action) => {
        state.currentNearBy = action.payload;
      })
      .addCase(createCommentAction.fulfilled, (state, action) => {
        state.currentComments.push(action.payload);
      })
    ;
  }
});
