import {render, screen} from '@testing-library/react';
import CamerasList from './camera-list';
import {makeFakeCameraOffer, makeFakePromoOffer} from '../../utils/mocks';
import {BrowserRouter as Router} from 'react-router-dom';

const cameras = [makeFakeCameraOffer()];

const fakeApp = (
    <Router>
      <CamerasList cameras={cameras} />
    </Router>
);

describe('Component: CamerasList', () => {
  it('should render correctly', () => {
    render(fakeApp);

    expect(screen.getByText(/₽/i)).toBeInTheDocument();
  });
});
