import {useParams} from 'react-router-dom';

function Camera(): JSX.Element {
  const params = useParams();

  return (
    <p>{params.id}</p>
  );
}

export default Camera;
