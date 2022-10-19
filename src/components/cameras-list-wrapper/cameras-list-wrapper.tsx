import {cameraType} from '../../types/types';
import {useAppSelector} from '../../types/types';
import {store} from '../../store';
import {fetchCamerasAction} from '../../store/api-actions';
import CameraList from '../camera-list/camera-list';
import {useState} from 'react';

store.dispatch(fetchCamerasAction());

function CamerasListWrapper(): JSX.Element {
  const {cameras} = useAppSelector((state) => state);
  const CAMERAS_PAGE_SIZE = 9;
  const camerasByPages = new Map<number, cameraType[]>();
  const [currentPage, setCurrentPage] = useState(1);
  let tempPageCount: number;
  if (cameras.length > CAMERAS_PAGE_SIZE) {
    if (cameras.length % CAMERAS_PAGE_SIZE === 0) {
      tempPageCount = cameras.length % CAMERAS_PAGE_SIZE;
    } else {
      tempPageCount = (cameras.length % CAMERAS_PAGE_SIZE) + 1;
    }

    for (let i = 0; i < tempPageCount; i++) {
      camerasByPages.set(i + 1, cameras.slice(i * CAMERAS_PAGE_SIZE, (i + 1) * CAMERAS_PAGE_SIZE));
    }
  }

  return (
    <div className="catalog__content">
      <div className="catalog-sort">
        <form action="#">
          <div className="catalog-sort__inner">
            <p className="title title--h5">Сортировать:</p>
            <div className="catalog-sort__type">
              <div className="catalog-sort__btn-text">
                <input
                  type="radio"
                  id="sortPrice"
                  name="sort"
                  defaultChecked
                />
                <label htmlFor="sortPrice">по цене</label>
              </div>
              <div className="catalog-sort__btn-text">
                <input type="radio" id="sortPopular" name="sort"/>
                <label htmlFor="sortPopular">по популярности</label>
              </div>
            </div>
            <div className="catalog-sort__order">
              <div className="catalog-sort__btn catalog-sort__btn--up">
                <input
                  type="radio"
                  id="up"
                  name="sort-icon"
                  defaultChecked
                  aria-label="По возрастанию"
                />
                <label htmlFor="up">
                  <svg width={16} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-sort"/>
                  </svg>
                </label>
              </div>
              <div className="catalog-sort__btn catalog-sort__btn--down">
                <input
                  type="radio"
                  id="down"
                  name="sort-icon"
                  aria-label="По убыванию"
                />
                <label htmlFor="down">
                  <svg width={16} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-sort"/>
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <CameraList cameras={camerasByPages.get(currentPage)}/>
      <div className="pagination">
        <ul className="pagination__list">
          <li onClick={() => setCurrentPage(1)} className="pagination__item">
            <a
              className={currentPage === 1 ? 'pagination__link pagination__link--active' : 'pagination__link'}
              href='#xxx'
            >
              1
            </a>
          </li>
          <li onClick={() => setCurrentPage(2)} className="pagination__item">
            <a
              className={currentPage === 2 ? 'pagination__link pagination__link--active' : 'pagination__link'}
              href='#xxx'
            >
              2
            </a>
          </li>
          <li onClick={() => setCurrentPage(3)} className="pagination__item">
            <a
              className={currentPage === 3 ? 'pagination__link pagination__link--active' : 'pagination__link'}
              href='#xxx'
            >
              3
            </a>
          </li>
          <li onClick={() => setCurrentPage(4)} className="pagination__item">
            <a
              className="pagination__link pagination__link--text"
              href='#xxx'
            >
              Далее
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CamerasListWrapper;
