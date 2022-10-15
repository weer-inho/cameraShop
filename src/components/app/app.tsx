import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Camera from '../../pages/camera/camera';
import Main from '../../pages/main/main';
import Error from '../error/error';


function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/camera/:id'
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
