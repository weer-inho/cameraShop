import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Banner from './banner';
import Camera from '../../pages/camera/camera';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeFakeCameraOffer, makeFakePromoOffer, makeFakeReview} from '../../utils/mocks';
import {NameSpace} from '../../utils/const';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.ProjectData]: {
    cameras: [makeFakeCameraOffer(), makeFakeCameraOffer()],
    pageCount: 1,
    promo: makeFakePromoOffer(),
    isDataLoaded: false,
  }
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <Router>
      <Banner />
    </Router>
  </Provider>
);

describe('Component: Banner', () => {
  it('should render correctly', () => {
    history.push('/');

    render(fakeApp);

    expect(screen.getByText(/Новинка!/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
