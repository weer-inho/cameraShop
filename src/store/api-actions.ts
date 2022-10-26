import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {AppDispatch, promoType, reviewType, State} from '../types/types';
import {loadCameras, loadOffer, loadOfferComments, loadOfferNearBy, loadPromo, setDataLoadedStatus} from './action';
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

export const fetchPromoAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    try{
      const {data} = await api.get<promoType>('/promo');
      dispatch(loadPromo(data));
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

export const createCommentAction = createAsyncThunk<void, reviewType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'create/comment',
  async ({id, userName, advantage, disadvantage, review, rating, createAt, cameraId}, {dispatch, extra: api}) => {
    const {data} = await api.post<reviewType[]>('/reviews', {id, userName, advantage, disadvantage, review, rating, createAt, cameraId});
    dispatch(loadOfferComments(data));
  },
);

// export const createCommentAction = createAsyncThunk<void, CommentData, {
//   dispatch: AppDispatch,
//   state: State,
//   extra: AxiosInstance
// }>(
//   'user/login',
//   async ({offerNumber, comment: string, rating: number}, {dispatch, extra: api}) => {
//     const {data} = await api.post<commentType[]>(`/comments/${offerNumber}`, {comment: string, rating: number});
//     dispatch(loadComments(data));
//   },
// );
