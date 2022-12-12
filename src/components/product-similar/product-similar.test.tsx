import {render, screen} from '@testing-library/react';
import ProductSimilar from './product-similar';
import {makeFakeCameraOffer, makeFakePromoOffer, makeFakeReview} from '../../utils/mocks';
import {BrowserRouter as Router} from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {NameSpace} from '../../utils/const';
import {Provider} from 'react-redux';

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.ProjectData]: {
    cameras: [makeFakeCameraOffer()],
    pageCount: 1,
    promo: makeFakePromoOffer(),
    isDataLoaded: false,
  },
  [NameSpace.OfferData]: {
    currentOffer: {},
    currentComments: [makeFakeReview(), makeFakeReview()],
    currentNearBy: [makeFakeCameraOffer(), makeFakeCameraOffer()]
  }
});


const fakeApp = (
  <Provider store={store}>
    <Router>
      <ProductSimilar/>
    </Router>
  </Provider>
);

describe('Component: ProductSimilar', () => {
  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText(/Похожие товары/i)).toBeInTheDocument();
  });
});
