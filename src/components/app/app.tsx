import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Camera from '../../pages/camera/camera';
import Main from '../../pages/main/main';
import Error from '../error/error';
import {useAppSelector} from '../../types/types';
import RedirectCatalog from '../redirect-catalog/redirect-catalog';
import {getLoadedDataStatus} from '../../store/project-data/selectors';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  if (isDataLoaded) {
    return (<p>Loading screen...</p>);
  }

  return (
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
          path='/cameras/:id'
          element={<Camera />}
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
