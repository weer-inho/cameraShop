import {render, screen} from '@testing-library/react';
import RedirectCatalog from './redirect-catalog';
import Main from '../../pages/main/main';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeFakeCameraOffer, makeFakeReview} from '../../utils/mocks';
import {NameSpace} from '../../utils/const';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {createMemoryHistory} from "history";

const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  [NameSpace.ProjectData]: {
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
      <Routes>
        <Route
          path='/'
          element={<RedirectCatalog />}
        />
        <Route
          path='/catalog/page_:id'
          element={<Main />}
        />
      </Routes>
    </Router>
  </Provider>
);

describe('Application RedirectCatalog', () => {
  it('should render redirect to Main when user navigate to "/"', () => {
    history.push('/');

    render(fakeApp);

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });
});
