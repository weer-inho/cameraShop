import {Navigate} from 'react-router-dom';

function RedirectCatalog(): JSX.Element {
  return (<Navigate to={'/catalog/page_1'}/>);
}

export default RedirectCatalog;
