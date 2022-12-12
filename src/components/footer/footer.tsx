import {NavLink} from 'react-router-dom';

function Footer():JSX.Element {
  return (
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
  );
}

export default Footer;
