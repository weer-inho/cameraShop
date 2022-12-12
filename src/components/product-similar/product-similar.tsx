import {useAppSelector} from '../../types/types';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {getCurrentNearBy} from '../../store/offer-data/selectors';
import Rating from '../rating/rating';

function ProductSimilar(): JSX.Element {
  const currentNearBy = useAppSelector(getCurrentNearBy);
  const [state, setState] = useState(0);

  if (currentNearBy.length > 0) {
    return (
      <div className="page-content__section">
        <section className="product-similar">
          <div className="container">
            <h2 className="title title--h3">Похожие товары</h2>
            <div className="product-similar__slider">
              <div className="product-similar__slider-list">
                {
                  currentNearBy.map((nearBy, index) => {
                    const keyValue = nearBy.id;
                    return (
                      <div
                        key={keyValue}
                        className={`product-card ${index === state || index === state + 1 || index === state + 2 ? 'is-active' : ''}`}
                      >
                        <div className="product-card__img">
                          <picture>
                            <source
                              type="image/webp"
                              srcSet={`/${nearBy.previewImgWebp}, /${nearBy.previewImgWebp2x}`}
                            />
                            <img
                              src={nearBy.previewImg}
                              srcSet={nearBy.previewImg2x}
                              alt={nearBy.name}
                              width={280}
                              height={240}
                            />
                          </picture>
                        </div>
                        <div className="product-card__info">
                          <div className="rate product-card__rate">
                            <Rating rating={nearBy.rating} />
                            <p className="visually-hidden">Рейтинг: 4</p>
                            <p className="rate__count">
                              <span className="visually-hidden">Всего оценок:</span>12
                            </p>
                          </div>
                          <p className="product-card__title">{nearBy.name}</p>
                          <p className="product-card__price">
                            <span className="visually-hidden">Цена:</span>{nearBy.price} ₽
                          </p>
                        </div>
                        <div className="product-card__buttons">
                          <button
                            className="btn btn--purple product-card__btn"
                            type="button"
                          >
                            Купить
                          </button>
                          <NavLink className="btn btn--transparent" to={`/cameras/${nearBy.id}`}>
                            Подробнее
                          </NavLink>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
              <button
                className="slider-controls slider-controls--prev"
                type="button"
                aria-label="Предыдущий слайд"
                onClick={() => setState(state - 1)}
                disabled={state === 0}
              >
                <svg width={7} height={12} aria-hidden="true">
                  <use xlinkHref="#icon-arrow"/>
                </svg>
              </button>
              <button
                className="slider-controls slider-controls--next"
                aria-label="Следующий слайд"
                type="button"
                onClick={() => setState(state + 1)}
                disabled={state === currentNearBy.length - 3}
              >
                <svg width={7} height={12} aria-hidden="true">
                  <use xlinkHref="#icon-arrow"/>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (<div></div>);
  }
}

export default ProductSimilar;
