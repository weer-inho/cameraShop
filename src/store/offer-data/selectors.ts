import {NameSpace} from '../../utils/const';
import {State, cameraType, reviewType} from '../../types/types';

export const getCurrentComments = (state: State): reviewType[] => state[NameSpace.OfferData].currentComments;
export const getCurrentNearBy = (state: State): cameraType[] => state[NameSpace.OfferData].currentNearBy;
