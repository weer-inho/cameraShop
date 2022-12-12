import CamerasListWrapper from '../../components/cameras-list-wrapper/cameras-list-wrapper';
import Banner from '../../components/banner/banner';
import {NavLink} from 'react-router-dom';

function Main(): JSX.Element {
  return (
    <div className="wrapper">
      <header className="header" id="header">
        <div className="container">
          <NavLink
            className="header__logo"
            to={'/'}
            aria-label="Переход на главную"
          >
            <svg width={100} height={36} aria-hidden="true">
              <use xlinkHref="#icon-logo"/>
            </svg>
          </NavLink>
          <nav className="main-nav header__main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <NavLink className="main-nav__link" to={'/'}>
                  Каталог
                </NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink className="main-nav__link" to={'/'}>
                  Гарантии
                </NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink className="main-nav__link" to={'/'}>
                  Доставка
                </NavLink>
              </li>
              <li className="main-nav__item">
                <NavLink className="main-nav__link" to={'/'}>
                  О компании
                </NavLink>
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
          <NavLink className="header__basket-link" to={'/'}>
            <svg width={16} height={16} aria-hidden="true">
              <use xlinkHref="#icon-basket"/>
            </svg>
          </NavLink>
        </div>
      </header>
      <main>
        <Banner />
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
                  <span className="breadcrumbs__link breadcrumbs__link--active">
                    Каталог
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <div className="catalog-filter">
                    <form action="#">
                      <h2 className="visually-hidden">Фильтр</h2>
                      <fieldset className="catalog-filter__block">
                        <legend className="title title--h5">Цена, ₽</legend>
                        <div className="catalog-filter__price-range">
                          <div className="custom-input">
                            <label>
                              <input type="number" name="price" placeholder="от"/>
                            </label>
                          </div>
                          <div className="custom-input">
                            <label>
                              <input
                                type="number"
                                name="priceUp"
                                placeholder="до"
                              />
                            </label>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="catalog-filter__block">
                        <legend className="title title--h5">Категория</legend>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input
                              type="checkbox"
                              name="photocamera"
                              defaultChecked
                            />
                            <span className="custom-checkbox__icon"/>
                            <span className="custom-checkbox__label">
                              Фотокамера
                            </span>
                          </label>
                        </div>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="videocamera"/>
                            <span className="custom-checkbox__icon"/>
                            <span className="custom-checkbox__label">
                              Видеокамера
                            </span>
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="catalog-filter__block">
                        <legend className="title title--h5">Тип камеры</legend>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input
                              type="checkbox"
                              name="digital"
                              defaultChecked
                            />
                            <span className="custom-checkbox__icon"/>
                            <span className="custom-checkbox__label">Цифровая</span>
                          </label>
                        </div>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="film" disabled/>
                            <span className="custom-checkbox__icon"/>
                            <span className="custom-checkbox__label">
                              Плёночная
                            </span>
                          </label>
                        </div>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="snapshot"/>
                            <span className="custom-checkbox__icon"/>
                            <span className="custom-checkbox__label">
                              Моментальная
                            </span>
                          </label>
                        </div>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input
                              type="checkbox"
                              name="collection"
                              defaultChecked
                              disabled
                            />
                            <span className="custom-checkbox__icon"/>
                            <span className="custom-checkbox__label">
                              Коллекционная
                            </span>
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="catalog-filter__block">
                        <legend className="title title--h5">Уровень</legend>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="zero" defaultChecked/>
                            <span className="custom-checkbox__icon"/>
                            <span className="custom-checkbox__label">Нулевой</span>
                          </label>
                        </div>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="non-professional"/>
                            <span className="custom-checkbox__icon"/>
                            <span className="custom-checkbox__label">
                              Любительский
                            </span>
                          </label>
                        </div>
                        <div className="custom-checkbox catalog-filter__item">
                          <label>
                            <input type="checkbox" name="professional"/>
                            <span className="custom-checkbox__icon"/>
                            <span className="custom-checkbox__label">
                              Профессиональный
                            </span>
                          </label>
                        </div>
                      </fieldset>
                      <button
                        className="btn catalog-filter__reset-btn"
                        type="reset"
                      >
                        Сбросить фильтры
                      </button>
                    </form>
                  </div>
                </div>
                <CamerasListWrapper/>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer__info">
            <NavLink
              className="footer__logo"
              to={'/'}
              aria-label="Переход на главную"
            >
              <svg width={100} height={36} aria-hidden="true">
                <use xlinkHref="#icon-logo-mono"/>
              </svg>
            </NavLink>
            <p className="footer__description">
              Интернет-магазин фото- и видеотехники
            </p>
            <ul className="social">
              <li className="social__item">
                <NavLink
                  className="link"
                  to={'/'}
                  aria-label="Переход на страницу вконтатке"
                >
                  <svg width={20} height={20} aria-hidden="true">
                    <use xlinkHref="#icon-vk"/>
                  </svg>
                </NavLink>
              </li>
              <li className="social__item">
                <NavLink
                  className="link"
                  to={'/'}
                  aria-label="Переход на страницу pinterest"
                >
                  <svg width={20} height={20} aria-hidden="true">
                    <use xlinkHref="#icon-pinterest"/>
                  </svg>
                </NavLink>
              </li>
              <li className="social__item">
                <NavLink
                  className="link"
                  to={'/'}
                  aria-label="Переход на страницу reddit"
                >
                  <svg width={20} height={20} aria-hidden="true">
                    <use xlinkHref="#icon-reddit"/>
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="footer__nav">
            <li className="footer__nav-item">
              <p className="footer__title">Навигация</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <NavLink className="link" to={'/'}>
                    Каталог
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink className="link" to={'/'}>
                    Гарантии
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink className="link" to={'/'}>
                    Доставка
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink className="link" to={'/'}>
                    О компании
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <p className="footer__title">Ресурсы</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <NavLink className="link" to={'/'}>
                    Курсы операторов
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink className="link" to={'/'}>
                    Блог
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink className="link" to={'/'}>
                    Сообщество
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="footer__nav-item">
              <p className="footer__title">Поддержка</p>
              <ul className="footer__list">
                <li className="footer__item">
                  <NavLink className="link" to={'/'}>
                    FAQ
                  </NavLink>
                </li>
                <li className="footer__item">
                  <NavLink className="link" to={'/'}>
                    Задать вопрос
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Main;
