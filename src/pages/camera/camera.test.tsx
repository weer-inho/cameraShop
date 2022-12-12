import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Camera from './camera';
import {NameSpace} from '../../utils/const';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {makeFakeCameraOffer, makeFakeReview} from '../../utils/mocks';
import RedirectCatalog from '../../components/redirect-catalog/redirect-catalog';
import Main from '../main/main';

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.ProjectData]: {
    cameras: [makeFakeCameraOffer()],
    pageCount: 1,
    promo: makeFakeCameraOffer(),
    isDataLoaded: false,
  },
  [NameSpace.OfferData]: {
    currentOffer: {},
    currentComments: [makeFakeReview(), makeFakeReview()],
    currentNearBy: makeFakeCameraOffer()
  }
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route
          path='/'
          element={<RedirectCatalog />}
        />
        <Route
          path='/catalog/page_:id'
          element={<Main />}
        />
        <Route
          path='/catalog/:id'
          element={<Camera />}
        />
      </Routes>
    </Router>
  </Provider>
);

describe('Application App', () => {
  it('should render "Camera" when user navigate to "cameras/:id"', () => {
    history.push('cameras/1');

    render(fakeApp);

    expect(screen.getByText(/₽/i)).toBeInTheDocument();
  });
});
