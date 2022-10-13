import {createAction} from '@reduxjs/toolkit';
import {cameraType} from '../types/types';

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const loadCameras = createAction<cameraType[]>('data/loadCameras');
