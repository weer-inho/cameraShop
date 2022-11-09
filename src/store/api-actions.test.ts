import {createAPI} from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import {State} from '../types/types';
import {fetchCamerasAction, fetchOfferAction, fetchPromoAction} from './api-actions';
import {setDataLoadedStatus, loadCameras, loadPromo, loadOffer} from "./action";
import {fakeCameraThird, makeFakeCameraOffer, makeFakePromoOffer} from '../utils/mocks';

describe('async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<State,
    Action,
    ThunkDispatch<State, typeof api, Action>>(middlewares);

  it('fetchCamerasAction - should dispatch load_cameras when GET /cameras', async () => {
    const mockCamera = [makeFakeCameraOffer()];
    mockAPI
      .onGet('/cameras')
      .reply(200, mockCamera);

    const store = mockStore();

    await store.dispatch(fetchCamerasAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCamerasAction.pending.type,
      setDataLoadedStatus.type,
      loadCameras.type,
      setDataLoadedStatus.type,
      fetchCamerasAction.fulfilled.type
    ]);
  });

  it('fetchPromoAction - should dispatch load_promo when GET /promo', async () => {
    const mockPromo = [makeFakePromoOffer()];
    mockAPI
      .onGet('/promo')
      .reply(200, mockPromo);

    const store = mockStore();

    await store.dispatch(fetchPromoAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchPromoAction.pending.type,
      setDataLoadedStatus.type,
      loadPromo.type,
      setDataLoadedStatus.type,
      fetchPromoAction.fulfilled.type
    ]);
  });

  it('fetchOfferAction - should return camera offer when GET /camera/3', async () => {
    const fakeCameraId: string = '3';
    const mockCamera = fakeCameraThird;

    mockAPI
      .onPost('/cameras/3')
      .reply(200, {mockCamera});


    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    //async store.dispatch(fetchOfferAction(fakeCameraId));
    await store.dispatch(async (dispatch) => await dispatch(fetchOfferAction(fakeCameraId)))

    const actions = store.getActions().map(({type}) => type);
    console.log(actions);

    expect(actions).toEqual([
      fetchOfferAction.pending.type,
      fetchOfferAction.fulfilled.type,
    ]);
  })
});
