import {render, screen} from '@testing-library/react';
import Main from '../main/main';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeFakeCameraOffer, makeFakeReview} from '../../utils/mocks';
import {NameSpace} from '../../utils/const';
import {BrowserRouter as Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

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
      <Main />
    </Router>
  </Provider>
);

describe('Application Main', () => {
  it('should render redirect to Main when user navigate to "/"', () => {
    history.push('/');

    render(fakeApp);

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });
});
