import {offerData} from './offer-data';
import {cameraType, reviewType} from '../../types/types';
import {makeFakeCameraOffer, makeFakeReview} from '../../utils/mocks';
import {createCommentAction, fetchOfferAction, fetchOfferCommentsAction, fetchOffersNearByAction} from '../api-actions';

const fakeOffer = [makeFakeCameraOffer()];
const fakeReview = [makeFakeReview()];

describe('Reducer: offerData', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({currentOffer: {}, currentComments: {},currentNearBy: {}});
  });

  it('should update currentOffer by load offer', () => {
    const state = {currentOffer: {} as cameraType, currentComments: {} as reviewType[], currentNearBy: {} as cameraType[]};
    expect(offerData.reducer(state, {type: fetchOfferAction.fulfilled.type, payload: fakeOffer}))
      .toEqual({currentOffer: fakeOffer, currentComments: {}, currentNearBy: {}});
  });

  it('should update currentComments by load comments', () => {
    const state = {currentOffer: {} as cameraType, currentComments: {} as reviewType[], currentNearBy: {} as cameraType[]};
    expect(offerData.reducer(state, {type: fetchOfferCommentsAction.fulfilled.type, payload: fakeReview}))
      .toEqual({currentOffer: {}, currentComments: fakeReview, currentNearBy: {}});
  });

  it('should update currentNearBy by load offersNearBy', () => {
    const state = {currentOffer: {} as cameraType, currentComments: {} as reviewType[], currentNearBy: {} as cameraType[]};
    expect(offerData.reducer(state, {type: fetchOffersNearByAction.fulfilled.type, payload: fakeOffer}))
      .toEqual({currentOffer: {} as cameraType, currentComments: {} as reviewType[], currentNearBy: fakeOffer});
  });

  it('should update currentComments by create comment', () => {
    const state = {currentOffer: {} as cameraType, currentComments: [] as reviewType[], currentNearBy: {} as cameraType[]};
    expect(offerData.reducer(state, {type: createCommentAction.fulfilled.type, payload: fakeReview}))
      .toEqual({currentOffer: {}, currentComments: [fakeReview, fakeReview], currentNearBy: {}});
  });
});
