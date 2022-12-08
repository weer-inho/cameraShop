import {render, screen} from '@testing-library/react';
import Reviews from './reviews';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeFakeCameraOffer, makeFakeReview} from '../../utils/mocks';
import {NameSpace} from '../../utils/const';

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.OfferData]: {
    currentOffer: {},
    currentComments: [makeFakeReview(), makeFakeReview()],
    currentNearBy: makeFakeCameraOffer()
  }
});


describe('Component: Reviews', () => {
  it('should render correctly', () => {
    render(
    <Provider store={store} >
        <Reviews />
      </Provider>
    );

    const headerElement = screen.getByText(/Отзывы/);
    const buttonElement = screen.getByText(/Отправить отзыв/);

    expect(headerElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
