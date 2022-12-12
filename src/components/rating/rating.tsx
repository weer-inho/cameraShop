import {getRandomPositiveInteger} from '../../utils/utils';

type RatingProps = {
  rating: number;
}

function Rating({rating}: RatingProps):JSX.Element {
  return (
    <>
      {
        [...Array(rating).fill(null).map(getRandomPositiveInteger)].map((element, index) => <svg key={element} width={17} height={16} aria-hidden="true"><use xlinkHref="#icon-full-star"/></svg>)
      }
      {
        [...Array(5 - rating).fill(null).map(getRandomPositiveInteger)].map((element, index) => <svg key={element} width={17} height={16} aria-hidden="true"><use xlinkHref="#icon-star"/></svg>)
      }
    </>
  );
}

export default Rating;
