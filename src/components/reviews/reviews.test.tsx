import {render, screen} from '@testing-library/react';
import Reviews from './reviews';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeFakeCameraOffer, makeFakeReview} from '../../utils/mocks';
import {cameraType, promoType, reviewType} from "../../types/types";

const mockStore = configureMockStore();

const store = mockStore({
  'OFFER_DATA': { currentOffer: makeFakeCameraOffer(), currentComments: makeFakeReview(), currentNearBy: makeFakeCameraOffer()},
  'ALL_DATA': {cameras: [], pageCount: 0, promo: {}, isDataLoaded: false}
});


describe('Component: Reviews', () => {
  it('should render correctly', () => {
    render(
    <Provider store={store} >
        <Reviews />
      </Provider>
    );

    // const headerElement = screen.getByText(/Отзывы/);
    const buttonElement = screen.getByText(/Отправить отзыв/);

    // expect(headerElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
