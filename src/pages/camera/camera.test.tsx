import {render, screen} from '@testing-library/react';
import Camera from './camera';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeFakeCameraOffer, makeFakePromoOffer, makeFakeReview} from '../../utils/mocks';
import {NameSpace} from "../../utils/const";
import {BrowserRouter as Router} from 'react-router-dom';

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.AllData]: {
    cameras: [makeFakeCameraOffer()],
    pageCount: 1,
    promo: makeFakeCameraOffer(),
    isDataLoaded: false,
  },
  [NameSpace.OfferData]: {
    currentOffer: makeFakeCameraOffer(),
    currentComments: [makeFakeReview(), makeFakeReview()],
    currentNearBy: makeFakeCameraOffer()
  }
});

const fakeApp = (
  <Provider store={store}>
    <Router>
      <Camera />
    </Router>
  </Provider>
);

describe('Component: Camera', () => {
  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText(/Артикул:/i)).toBeInTheDocument();
  });
});
