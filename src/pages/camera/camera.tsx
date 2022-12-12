import Error from '../../components/error/error';
import ProductSimilar from '../../components/product-similar/product-similar';
import Reviews from '../../components/reviews/reviews';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Rating from '../../components/rating/rating';
import {getCameras} from '../../store/project-data/selectors';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {useAppSelector, State, AppDispatch} from '../../types/types';
import {NavLink} from 'react-router-dom';
import {fetchOfferAction, fetchOfferCommentsAction, fetchOffersNearByAction} from '../../store/api-actions';

const noOp = () => undefined;
const useCurrentCitySelector = (id: string | undefined) => {
  const cameras = useAppSelector(getCameras);

  if (typeof id !== 'string') {
    return noOp;
  }
  const offerId = Number.parseInt(id, 10);
  if (!Number.isInteger(offerId)) {
    return noOp;
  }

  return (state: State) => cameras.find((camera) => offerId === camera.id);
};

function Camera(): JSX.Element {
  const {id} = useParams();
  const currentCamera = useAppSelector(useCurrentCitySelector(id));
  const dispatch: AppDispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState('specifications');

  useEffect(() => {
    if (typeof id === 'string') {
      if (typeof currentCamera === 'undefined') {
        dispatch(fetchOfferAction(id));
      }
      dispatch(fetchOfferCommentsAction(id));
      dispatch(fetchOffersNearByAction(id));
    }
  },
  [id, currentCamera, dispatch]);
  if (typeof currentCamera === 'undefined') {
    return (<Error/>);
  }

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="page-content">
          <div className="breadcrumbs">
            <div className="container">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <NavLink className="breadcrumbs__link" to={'/'}>
                    Главная
                    <svg width={5} height={8} aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini"/>
                    </svg>
                  </NavLink>
                </li>
                <li className="breadcrumbs__item">
                  <NavLink className="breadcrumbs__link" to={'/'}>
                    Каталог
                    <svg width={5} height={8} aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini"/>
                    </svg>
                  </NavLink>
                </li>
                <li className="breadcrumbs__item">
                  <span className="breadcrumbs__link breadcrumbs__link--active">
                    {currentCamera?.name}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="page-content__section">
            <section className="product">
              <div className="container">
                <div className="product__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`/${currentCamera ? currentCamera?.previewImgWebp : ''}, /${currentCamera ? currentCamera?.previewImgWebp2x : ''}`}
                    />
                    <img
                      src={`/${currentCamera ? currentCamera?.previewImg : ''}`}
                      srcSet={`/${currentCamera ? currentCamera.previewImg2x : ''}`}
                      alt={currentCamera?.name}
                      width={560}
                      height={480}
                    />
                  </picture>
                </div>
                <div className="product__content">
                  <h1 className="title title--h3">{currentCamera?.name}</h1>
                  <div className="rate product__rate">
                    <Rating rating={currentCamera?.rating} />
                    <p className="visually-hidden">Рейтинг: {currentCamera.rating}</p>
                    <p className="rate__count">
                      <span className="visually-hidden">Всего оценок:</span>{currentCamera.reviewCount}
                    </p>
                  </div>
                  <p className="product__price">
                    <span className="visually-hidden">Цена:</span>73 450 ₽
                  </p>
                  <button className="btn btn--purple" type="button">
                    <svg width={24} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-add-basket"/>
                    </svg>
                    Добавить в корзину
                  </button>
                  <div className="tabs product__tabs">
                    <div className="tabs__controls product__tabs-controls">
                      <button
                        className={`tabs__control ${currentTab === 'specifications' ? 'is-active' : ''}`}
                        onClick={() => setCurrentTab('specifications')}
                        type="button"
                      >
                        Характеристики
                      </button>
                      <button
                        className={`tabs__control ${currentTab === 'description' ? 'is-active' : ''}`}
                        onClick={() => setCurrentTab('description')}
                        type="button"
                      >
                        Описание
                      </button>
                    </div>
                    <div className="tabs__content">
                      <div className={`tabs__element ${currentTab === 'specifications' ? 'is-active' : ''}`}>
                        <ul className="product__tabs-list">
                          <li className="item-list">
                            <span className="item-list__title">Артикул:</span>
                            <p className="item-list__text">{currentCamera.vendorCode}</p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">Категория:</span>
                            <p className="item-list__text">{currentCamera.category}</p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">Тип камеры:</span>
                            <p className="item-list__text">{currentCamera.type}</p>
                          </li>
                          <li className="item-list">
                            <span className="item-list__title">Уровень:</span>
                            <p className="item-list__text">{currentCamera.level}</p>
                          </li>
                        </ul>
                      </div>
                      <div className={`tabs__element ${currentTab === 'description' ? 'is-active' : ''}`}>
                        <div className="product__tabs-text">
                          <p>{currentCamera.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <ProductSimilar />
          <Reviews />
        </div>
      </main>
      <NavLink className="up-btn" to={'/'}>
        <svg width={12} height={18} aria-hidden="true">
          <use xlinkHref="#icon-arrow2"/>
        </svg>
      </NavLink>
      <Footer />
    </div>
  );
}

export default Camera;
