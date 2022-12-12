import {cameraType} from '../../types/types';
import {NavLink} from 'react-router-dom';
import Rating from '../rating/rating';

type CameraListProps = {
  cameras: cameraType[] | undefined;
}

function CameraList({cameras}: CameraListProps): JSX.Element {
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
                    srcSet={`/${camera.previewImgWebp}, /${camera.previewImgWebp2x}`}
                  />
                  <img
                    src={`/${camera.previewImg}`}
                    srcSet={`/${camera.previewImg2x}`}
                    alt={camera.name}
                    width={280}
                    height={240}
                  />
                </picture>
              </div>
              <div className="product-card__info">
                <div className="rate product-card__rate">
                  <Rating rating={camera?.rating} />
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
                <NavLink className="btn btn--transparent" to={`/cameras/${camera.id}`}>
                  Подробнее
                </NavLink>
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default CameraList;
