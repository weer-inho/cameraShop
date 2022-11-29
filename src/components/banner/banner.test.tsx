import {render, screen} from '@testing-library/react';
import Banner from './banner';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {makeFakeCameraOffer} from '../../utils/mocks';
import {NameSpace} from "../../utils/const";
import {Router} from 'react-router-dom';

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.AllData]: {
    cameras: [makeFakeCameraOffer(), makeFakeCameraOffer()],
    pageCount: 1,
    promo: makeFakeCameraOffer(),
    isDataLoaded: false,
  }
});


describe('Component: Banner', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store} >
        <Router>
            <Banner />
        </Router>
      </Provider>
    );

    expect(screen.getByText(/Новинка!/i)).toBeInTheDocument();
  });
});
