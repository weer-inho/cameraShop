import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../utils/const';
import {allData} from './all-data/all-data';
import {offerData} from './offer-data/offer-data';

export const rootReducer = combineReducers({
  [NameSpace.AllData]: allData.reducer,
  [NameSpace.OfferData]: offerData.reducer,
});
