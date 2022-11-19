import {store} from '../../store';
import {fetchPromoAction} from '../../store/api-actions';
import {useAppSelector} from '../../types/types';
import {NavLink} from 'react-router-dom';
import {getPromo} from '../../store/all-data/selectors';

store.dispatch(fetchPromoAction());

function Banner(): JSX.Element {
  // const {promo} = useAppSelector((state) => state);
  const promo = useAppSelector(getPromo);

  return (
    <div className="banner">
      <picture>
        <source
          type="image/webp"
          //srcSet="img/content/banner-bg.webp, img/content/banner-bg@2x.webp 2x"
          srcSet={`/${promo.previewImgWebp}, /${promo.previewImgWebp2x}`}
        />
        <img
          //src="img/content/banner-bg.jpg"
          //srcSet="img/content/banner-bg@2x.jpg 2x"
          src={`/${promo.previewImg}`}
          srcSet={`/${promo.previewImg2x}`}
          alt="баннер"
          width={1280}
          height={280}
        />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">
          {promo?.name}
        </span>
        <span className="banner__text">
              Профессиональная камера от&nbsp;известного производителя
        </span>
        <NavLink className="btn" to={`/cameras/${promo.id}`}>Подробнее</NavLink>
      </p>
    </div>
  );
}

export default Banner;
