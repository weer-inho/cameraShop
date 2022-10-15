import {useAppSelector} from '../../types/types';
import Main from '../../pages/main/main';

function App(): JSX.Element {
  const {isDataLoaded} = useAppSelector((state) => state);

  if (isDataLoaded) {
    return (<p>Loading screen...</p>);
  }

  return (
    <Main />
  );
}

export default App;
