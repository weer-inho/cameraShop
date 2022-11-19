import {NameSpace} from '../../utils/const';
import {State, cameraType, promoType, reviewType} from '../../types/types';

export const getCurrentOffer = (state: State): cameraType => state[NameSpace.OfferData].currentOffer;
export const getCurrentComments = (state: State): reviewType[] => state[NameSpace.OfferData].currentComments;
export const getCurrentNearBy = (state: State): cameraType[] => state[NameSpace.OfferData].currentNearBy;
