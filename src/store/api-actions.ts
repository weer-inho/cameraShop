import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/types';
import { loadCameras, setDataLoadedStatus } from './action';
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
