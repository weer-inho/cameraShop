import {NameSpace} from '../../utils/const';
import {State, cameraType, promoType} from '../../types/types';

export const getCameras = (state: State): cameraType[] => state[NameSpace.ProjectData].cameras;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.ProjectData].isDataLoaded;
export const getPageCount = (state: State): number => state[NameSpace.ProjectData].pageCount;
export const getPromo = (state: State): promoType => state[NameSpace.ProjectData].promo;
