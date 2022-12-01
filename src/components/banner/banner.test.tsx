import {render, screen} from '@testing-library/react';
import Banner from './banner';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeFakeCameraOffer, makeFakePromoOffer} from '../../utils/mocks';
import {NameSpace} from "../../utils/const";
import {BrowserRouter as Router} from 'react-router-dom';

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.AllData]: {
    cameras: [makeFakeCameraOffer(), makeFakeCameraOffer()],
    pageCount: 1,
    promo: makeFakePromoOffer(),
    isDataLoaded: false,
  }
});

const fakeApp = (
  <Provider store={store}>
    <Router>
      <Banner />
    </Router>
  </Provider>
);

describe('Component: Banner', () => {
  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText(/Новинка!/i)).toBeInTheDocument();
  });
});
