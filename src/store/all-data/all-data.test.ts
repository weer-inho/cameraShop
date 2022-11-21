import {allData} from './all-data';
import {promoType} from "../../types/types";
import {makeFakeCameraOffer, makeFakePromoOffer} from "../../utils/mocks";
import {fetchCamerasAction, fetchPromoAction} from "../api-actions";

const fakeCameras = [makeFakeCameraOffer(), makeFakeCameraOffer()];
const fakePromo = makeFakePromoOffer();

describe('Reducer: allData', () => {
  it('without additional parameters should return initial state', () => {
    expect(allData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({cameras: [], pageCount: 0, promo: {}, isDataLoaded: false});
  });

  it('should update cameras by load cameras', () => {
    const state = {cameras: [], pageCount: 0, promo: {} as promoType, isDataLoaded: false};
    expect(allData.reducer(state, {type: fetchCamerasAction.fulfilled.type, payload: fakeCameras}))
      .toEqual({cameras: fakeCameras, pageCount: 1, promo: {}, isDataLoaded: false});
  });

  it('should update promo by load promo', () => {
    const state = {cameras: [], pageCount: 0, promo: {} as promoType, isDataLoaded: false};
    expect(allData.reducer(state, {type: fetchPromoAction.fulfilled.type, payload: fakePromo}))
      .toEqual({cameras: [], pageCount: 0, promo: fakePromo, isDataLoaded: false});
  });
});
