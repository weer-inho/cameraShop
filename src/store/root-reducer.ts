import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../utils/const';
import {projectData} from './project-data/project-data';
import {offerData} from './offer-data/offer-data';

export const rootReducer = combineReducers({
  [NameSpace.ProjectData]: projectData.reducer,
  [NameSpace.OfferData]: offerData.reducer,
});
