import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import {useAppSelector, State, AppDispatch} from '../../types/types';
import Error from '../../components/error/error';
import {fetchOfferAction, fetchOfferCommentsAction, fetchOffersNearByAction} from '../../store/api-actions';
import {getRandomPositiveInteger} from '../../utils/utils';
import ProductSimilar from '../../components/product-similar/product-similar';
import Reviews from '../../components/reviews/reviews';
import {getCameras} from "../../store/all-data/selectors";

const noOp = () => undefined;
const getCurrentCitySelector = (id: string | undefined) => {
  if (typeof id !== 'string') {
    return noOp;
  }
  const offerId = Number.parseInt(id, 10);
  if (!Number.isInteger(offerId)) {
    return noOp;
  }

  const cameras = useAppSelector(getCameras);
  return (state: State) => cameras.find((camera) => offerId === camera.id);
};

function Camera(): JSX.Element {
  const {id} = useParams();
  const currentCamera = useAppSelector(getCurrentCitySelector(id));
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
      <header className="header" id="header">
        <div className="container">
          <a
            className="header__logo"
            href="index.html"
            aria-label="Переход на главную"
          >
            <svg width={100} height={36} aria-hidden="true">
              <use xlinkHref="#icon-logo"/>
            </svg>
          </a>
          <nav className="main-nav header__main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <a className="main-nav__link" href="catalog.html">
                  Каталог
                </a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">
                  Гарантии
                </a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">
                  Доставка
                </a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link" href="#">
                  О компании
                </a>
              </li>
            </ul>
          </nav>
          <div className="form-search">
            <form>
              <label>
                <svg
                  className="form-search__icon"
                  width={16}
                  height={16}
                  aria-hidden="true"
                >
                  <use xlinkHref="#icon-lens"/>
                </svg>
                <input
                  className="form-search__input"
                  type="text"
                  autoComplete="off"
                  placeholder="Поиск по сайту"
                />
              </label>
              <ul className="form-search__select-list">
                <li className="form-search__select-item" tabIndex={0}>
                  Cannonball Pro MX 8i
                </li>
                <li className="form-search__select-item" tabIndex={0}>
                  Cannonball Pro MX 7i
                </li>
                <li className="form-search__select-item" tabIndex={0}>
                  Cannonball Pro MX 6i
                </li>
                <li className="form-search__select-item" tabIndex={0}>
                  Cannonball Pro MX 5i
                </li>
                <li className="form-search__select-item" tabIndex={0}>
                  Cannonball Pro MX 4i
                </li>
              </ul>
            </form>
            <button className="form-search__reset" type="reset">
              <svg width={10} height={10} aria-hidden="true">
                <use xlinkHref="#icon-close"/>
              </svg>
              <span className="visually-hidden">Сбросить поиск</span>
            </button>
          </div>
          <a className="header__basket-link" href="#">
            <svg width={16} height={16} aria-hidden="true">
              <use xlinkHref="#icon-basket"/>
            </svg>
            <span className="header__basket-count">3</span>
          </a>
        </div>
      </header>
      <main>
        <div className="page-content">
          <div className="breadcrumbs">
            <div className="container">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="index.html">
                    Главная
                    <svg width={5} height={8} aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini"/>
                    </svg>
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link" href="catalog.html">
                    Каталог
                    <svg width={5} height={8} aria-hidden="true">
                      <use xlinkHref="#icon-arrow-mini"/>
                    </svg>
                  </a>
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
                    {
                      [...Array(currentCamera?.rating).fill(null).map(getRandomPositiveInteger)].map((element, index) => <svg key={element} width={17} height={16} aria-hidden="true"><use xlinkHref="#icon-full-star"/></svg>)
                    }
                    {
                      [...Array(5 - currentCamera?.rating).fill(null).map(getRandomPositiveInteger)].map((element, index) => <svg key={element} width={17} height={16} aria-hidden="true"><use xlinkHref="#icon-star"/></svg>)
                    }
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
      <a className="up-btn" href="#header">
        <svg width={12} height={18} aria-hidden="true">
          <use xlinkHref="#icon-arrow2"/>
        </svg>
      </a>
      <footer className="footer">
        <div className="container">
          <div className="footer__info">
            <a
              className="footer__logo"
              href="index.html"
              aria-label="Переход на главную"
            >
              <svg width={100} height={36} aria-hidden="true">
                <use xlinkHref="#icon-logo-mono"/>
              </svg>
            </a>
            <p className="footer__description">
              Интернет-магазин фото- и видеотехники
            </p>
            <ul className="social">
              <li className="social__item">
                <a
                  className="link"
                  href="#"
                  aria-label="Переход на страницу вконтатке"
                >
                  <svg width={20} height={20} aria-hidden="true">
                    <use xlinkHref="#icon-vk"/>
                  </svg>
                </a>
              </li>
              <li className="social__item">
                <a
                  className="link"
                  href="#"
                  aria-label="Переход на страницу pinterest"
                >
                  <svg width={20} height={20} aria-hidden="true">
                    <use xlinkHref="#icon-pinterest"/>
                  </svg>
                </a>
              </li>
              <li className="social__item">
                <a
                  className="link"
                  href="#"
                  aria-label="Переход на страницу reddit"
                >
                  <svg width={20} height={20} aria-hidden="true">
                    <use xlinkHref="#icon-reddit"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <ul className="footer__nav">
            <li className="footer__nav-item">
              <p className="footer__title">Навигация</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <a className="link" href="#">
                    Каталог
                  </a>
                </li>
                <li className="footer__item">
                  <a className="link" href="#">
                    Гарантии
                  </a>
                </li>
                <li className="footer__item">
                  <a className="link" href="#">
                    Доставка
                  </a>
                </li>
                <li className="footer__item">
                  <a className="link" href="#">
                    О компании
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <p className="footer__title">Ресурсы</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <a className="link" href="#">
                    Курсы операторов
                  </a>
                </li>
                <li className="footer__item">
                  <a className="link" href="#">
                    Блог
                  </a>
                </li>
                <li className="footer__item">
                  <a className="link" href="#">
                    Сообщество
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <p className="footer__title">Поддержка</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <a className="link" href="#">
                    FAQ
                  </a>
                </li>
                <li className="footer__item">
                  <a className="link" href="#">
                    Задать вопрос
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Camera;
