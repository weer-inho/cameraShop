import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../utils/const';
import {AllData, cameraType, promoType} from '../../types/types';
import {fetchCamerasAction, fetchPromoAction} from '../api-actions';


const initialState: AllData = {
  cameras: [] as cameraType[],
  pageCount: 0 as number,
  promo: {} as promoType,
  isDataLoaded: false,
};

export const allData = createSlice({
  name: NameSpace.AllData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchCamerasAction.fulfilled, (state, action) => {
        const CAMERAS_PAGE_SIZE = 9;
        if (action.payload.length > CAMERAS_PAGE_SIZE) {
          if (action.payload.length % CAMERAS_PAGE_SIZE === 0) {
            state.pageCount = action.payload.length % CAMERAS_PAGE_SIZE;
          } else {
            state.pageCount = (action.payload.length % CAMERAS_PAGE_SIZE) + 1;
          }
        } else {state.pageCount = 1;}
        state.cameras = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchPromoAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isDataLoaded = false;
      });

  }
});
