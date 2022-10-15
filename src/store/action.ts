import {createAction} from '@reduxjs/toolkit';
import {cameraType, reviewType} from '../types/types';

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const loadCameras = createAction<cameraType[]>('data/loadCameras');
export const loadOffer = createAction<cameraType>('data/loadOffer');
export const loadOfferComments = createAction<reviewType[]>('data/loadOfferComments');
export const loadOfferNearBy = createAction<cameraType[]>('data/loadOfferNearBy');

