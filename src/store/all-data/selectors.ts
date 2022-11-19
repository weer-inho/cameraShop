import {NameSpace} from '../../utils/const';
import {State, cameraType, promoType} from '../../types/types';

export const getCameras = (state: State): cameraType[] => state[NameSpace.AllData].cameras;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.AllData].isDataLoaded;
export const getPageCount = (state: State): number => state[NameSpace.AllData].pageCount;
export const getPromo = (state: State): promoType => state[NameSpace.AllData].promo;
