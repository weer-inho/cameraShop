import {cameraType} from '../../types/types';
import {useAppSelector} from '../../types/types';
import {getRandomPositiveInteger} from '../../utils';
import {store} from '../../store';
import {fetchCamerasAction} from '../../store/api-actions';

store.dispatch(fetchCamerasAction());

function CamerasList(): JSX.Element {
  const {cameras} = useAppSelector((state) => state);

  return (
    <div className="cards catalog__cards">
      {
        cameras?.map((camera: cameraType) => {
          const keyValue = camera.id;
          return (
            <div key={keyValue} className="product-card">
              <div className="product-card__img">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${camera.previewImgWebp}, ${camera.previewImgWebp2x}`}
                  />
                  <img
                    src={camera.previewImg}
                    srcSet={camera.previewImg2x}
                    alt="Ретрокамера «Das Auge IV»"
                    width={280}
                    height={240}
                  />
                </picture>
              </div>
              <div className="product-card__info">
                <div className="rate product-card__rate">
                  {
                    [...Array(camera?.rating).fill(null).map(getRandomPositiveInteger)].map((element, index) => <svg key={element} width={17} height={16} aria-hidden="true"><use xlinkHref="#icon-full-star"/></svg>)
                  }
                  <p className="visually-hidden">Рейтинг: {camera.rating}</p>
                  <p className="rate__count">
                    <span className="visually-hidden">Всего оценок:</span>{camera.reviewCount}
                  </p>
                </div>
                <p className="product-card__title">{camera.name}</p>
                <p className="product-card__price">
                  <span className="visually-hidden">Цена:</span>{camera.price} ₽
                </p>
              </div>
              <div className="product-card__buttons">
                <button className="btn btn--purple product-card__btn" type="button">
                  Купить
                </button>
                <a className="btn btn--transparent" href="#">
                  Подробнее
                </a>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default CamerasList;
