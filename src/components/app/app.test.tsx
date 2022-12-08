import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import App from './app';
import {NameSpace} from '../../utils/const';
import {makeFakeCameraOffer, makeFakeReview} from '../../utils/mocks';

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.AllData]: {
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
      <App />
  </Provider>
);

describe('Application App', () => {
  it('should render "Main" when user navigate to "/"', () => {
    history.push('/');

    render(fakeApp);

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });

  it('should render "Main" when user navigate to "/catalog/page_1"', () => {
    history.push('/catalog/page_1');

    render(fakeApp);

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });

  it('should render "Camera" when user navigate to "cameras/:id"', () => {
    history.push('cameras/1');

    render(fakeApp);

    expect(screen.getByText(/₽/i)).toBeInTheDocument();
  });
});
