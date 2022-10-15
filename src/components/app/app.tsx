import {useAppSelector} from '../../types/types';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from '../../pages/main/main';
import Error from '../error/error';

function App(): JSX.Element {
  const {isDataLoaded} = useAppSelector((state) => state);

  if (isDataLoaded) {
    return (<p>Loading screen...</p>);
  }

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/*'
          element={<Error />}
        />
      </Routes>
    </Router>
  );
}

export default App;
