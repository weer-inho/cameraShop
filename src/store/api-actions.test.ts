import {createAPI} from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import {State} from '../types/types';
import {
  createCommentAction,
  fetchCamerasAction,
  fetchOfferAction,
  fetchOfferCommentsAction,
  fetchOffersNearByAction,
  fetchPromoAction
} from './api-actions';

import {fakeReview, makeFakeCameraOffer, makeFakePromoOffer, makeFakeReview} from '../utils/mocks';
import {datatype} from "faker";

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
      fetchPromoAction.fulfilled.type
    ]);
  });

  it('fetchOfferAction - should return fetch_offer&load_offer when GET /camera/id ', async () => {
    const mockOffer = makeFakeCameraOffer();
    const id = String(datatype.number({min: 1, max: 90}));
    mockAPI.onGet('/cameras/' + id).reply(200, mockOffer);

      const store = mockStore();
    await store.dispatch(fetchOfferAction(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOfferAction.pending.type,
      fetchOfferAction.fulfilled.type
    ]);
  });

  it('fetchOfferCommentsAction - should return fetch_offer_comments&load_offer_comments when GET /camera/id/reviews', async () => {
    const mockReview = makeFakeReview();
    const id = String(datatype.number({min: 1, max: 90}));
    mockAPI.onGet('/cameras/' + id + '/reviews').reply(200, mockReview);

    const store = mockStore();
    await store.dispatch(fetchOfferCommentsAction(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOfferCommentsAction.pending.type,
      fetchOfferCommentsAction.fulfilled.type
    ]);
  });

  it('fetchOffersNearByAction - should return fetch_offer_nearBy&load_offers_nearBy when GET /camera/id/similar', async () => {
    const mockReview = makeFakeCameraOffer();
    const id = String(datatype.number({min: 1, max: 90}));
    mockAPI.onGet('/cameras/' + id + '/similar').reply(200, mockReview);

    const store = mockStore();
    await store.dispatch(fetchOffersNearByAction(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchOffersNearByAction.pending.type,
      fetchOffersNearByAction.fulfilled.type
    ]);
  });

  it('createCommentAction - should return new comment when POST /reviews', async () => {
    const {userName, advantage, disadvantage, review, rating, cameraId} = fakeReview;
    mockAPI.onPost('/reviews', {userName, advantage, disadvantage, review, rating, cameraId}).reply(200, fakeReview);

    const store = mockStore();
    await store.dispatch(createCommentAction(fakeReview));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      createCommentAction.pending.type,
      createCommentAction.fulfilled.type
    ]);
  });
});
