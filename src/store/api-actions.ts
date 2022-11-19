import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {AppDispatch, promoType, reviewType, State} from '../types/types';
import { cameraType } from '../types/types';

export const fetchCamerasAction = createAsyncThunk<cameraType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCameras',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<cameraType[]>('/cameras');
    return data;
  },
);

export const fetchPromoAction = createAsyncThunk<promoType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<promoType>('/promo');
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<cameraType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<cameraType>(`/cameras/${_arg}`);
    return data;
  },
);

export const fetchOfferCommentsAction = createAsyncThunk<reviewType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferComments',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<reviewType[]>(`/cameras/${_arg}/reviews`);
    return data;
  },
);

export const fetchOffersNearByAction = createAsyncThunk<cameraType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearBy',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<cameraType[]>(`/cameras/${_arg}/similar`);
    return data;
  },
);

export const createCommentAction = createAsyncThunk<reviewType, reviewType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'create/comment',
  async ({userName, advantage, disadvantage, review, rating, cameraId}, {dispatch, extra: api}) => {
    const {data} = await api.post<reviewType>('/reviews', {userName, advantage, disadvantage, review, rating, cameraId});
    return data;
  },
);
