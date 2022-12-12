import {projectData} from './project-data';
import {promoType} from '../../types/types';
import {makeFakeCameraOffer, makeFakePromoOffer} from '../../utils/mocks';
import {fetchCamerasAction, fetchPromoAction} from '../api-actions';

const fakeCameras = [makeFakeCameraOffer(), makeFakeCameraOffer()];
const fakePromo = makeFakePromoOffer();

describe('Reducer:  projectData', () => {
  it('without additional parameters should return initial state', () => {
    expect(projectData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({cameras: [], pageCount: 0, promo: {}, isDataLoaded: false});
  });

  it('should update cameras by load cameras', () => {
    const state = {cameras: [], pageCount: 0, promo: {} as promoType, isDataLoaded: false};
    expect(projectData.reducer(state, {type: fetchCamerasAction.fulfilled.type, payload: fakeCameras}))
      .toEqual({cameras: fakeCameras, pageCount: 1, promo: {}, isDataLoaded: false});
  });

  it('should update isDataLoaded by load cameras', () => {
    const state = {cameras: [], pageCount: 0, promo: {} as promoType, isDataLoaded: false};
    expect(projectData.reducer(state, {type: fetchCamerasAction.pending.type, payload: fakeCameras}))
      .toEqual({cameras: [], pageCount: 0, promo: {} as promoType, isDataLoaded: true});
  });

  it('should update promo by load promo', () => {
    const state = {cameras: [], pageCount: 0, promo: {} as promoType, isDataLoaded: false};
    expect(projectData.reducer(state, {type: fetchPromoAction.fulfilled.type, payload: fakePromo}))
      .toEqual({cameras: [], pageCount: 0, promo: fakePromo, isDataLoaded: false});
  });

  it('should update isDataLoaded by load promo', () => {
    const state = {cameras: [], pageCount: 0, promo: {} as promoType, isDataLoaded: false};
    expect(projectData.reducer(state, {type: fetchPromoAction.pending.type, payload: fakePromo}))
      .toEqual({cameras: [], pageCount: 0, promo: {} as promoType, isDataLoaded: true});
  });
});
