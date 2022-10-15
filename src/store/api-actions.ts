import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {AppDispatch, reviewType, State} from '../types/types';
import {loadCameras, loadOffer, loadOfferComments, loadOfferNearBy, setDataLoadedStatus} from './action';
import { cameraType } from '../types/types';

export const fetchCamerasAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCameras',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    try{
      const {data} = await api.get<cameraType[]>('/cameras');
      dispatch(loadCameras(data));
    }
    finally{
      dispatch(setDataLoadedStatus(false));
    }
  },
);


export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<cameraType>(`/cameras/${_arg}`);
    dispatch(loadOffer(data));
  },
);

export const fetchOfferCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferComments',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<reviewType[]>(`/cameras/${_arg}/reviews`);
    dispatch(loadOfferComments(data));
  },
);

export const fetchOffersNearByAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearBy',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<cameraType[]>(`/cameras/${_arg}/similar`);
    dispatch(loadOfferNearBy(data));
  },
);
