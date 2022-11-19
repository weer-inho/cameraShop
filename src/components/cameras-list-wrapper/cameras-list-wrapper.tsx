import {cameraType} from '../../types/types';
import {useAppSelector} from '../../types/types';
import {store} from '../../store';
import {fetchCamerasAction} from '../../store/api-actions';
import CameraList from '../camera-list/camera-list';
import {useState} from 'react';
import {getRandomPositiveInteger} from '../../utils/utils';
import {useParams, NavLink} from 'react-router-dom';
import {getCameras, getPageCount} from '../../store/all-data/selectors';

store.dispatch(fetchCamerasAction());

function CamerasListWrapper(): JSX.Element {
  const {id} = useParams();
  const cameras = useAppSelector(getCameras);
  const pageCount = useAppSelector(getPageCount);
  const CAMERAS_PAGE_SIZE = 9;
  const camerasByPages = new Map<number, cameraType[]>();
  const [currentPage, setCurrentPage] = useState(Number(id));
  if (cameras.length > CAMERAS_PAGE_SIZE) {
    for (let i = 0; i < pageCount; i++) {
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
          {
            currentPage !== 1
              ?
              <li onClick={() => setCurrentPage(currentPage - 1)} className="pagination__item">
                <NavLink
                  className="pagination__link pagination__link--text"
                  to={`/catalog/page_${currentPage - 1}`}
                >
                  Назад
                </NavLink>
              </li>
              : ''
          }
          {
            pageCount
              ? [...Array(pageCount).fill(null).map(getRandomPositiveInteger)].map((element, index) =>
                (
                  <li key={element} onClick={() => setCurrentPage(index + 1)} className="pagination__item">
                    <NavLink
                      className={currentPage === index + 1 ? 'pagination__link pagination__link--active' : 'pagination__link'}
                      to={`/catalog/page_${index + 1}`}
                    >
                      {index + 1}
                    </NavLink>
                  </li>
                )
              )
              : ''
          }
          {
            currentPage < pageCount
              ?
              <li onClick={() => setCurrentPage(currentPage + 1)} className="pagination__item">
                <NavLink
                  className="pagination__link pagination__link--text"
                  to={`/catalog/page_${currentPage + 1}`}
                >
                  Далее
                </NavLink>
              </li>
              : ''
          }
        </ul>
      </div>
    </div>
  );
}

export default CamerasListWrapper;
