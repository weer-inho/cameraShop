import {useAppSelector} from '../../types/types';
import {getRandomPositiveInteger} from '../../utils';
import {useState} from 'react';
import dayjs from 'dayjs';

function Reviews(): JSX.Element {
  const {currentComments} = useAppSelector((state) => state);
  const COMMENT_PAGE = 3;
  const [indexComments, setIndexComments] = useState(1);

  if (currentComments.length > 0) {
    const showedComents = currentComments.slice(0, indexComments * COMMENT_PAGE);

    return (
      <div className="page-content__section">
        <section className="review-block">
          <div className="container">
            <div className="page-content__headed">
              <h2 className="title title--h3">Отзывы</h2>
              <button className="btn" type="button">
                Оставить свой отзыв
              </button>
            </div>
            <ul className="review-block__list">
              {
                showedComents.map((comment) => (
                  <li key={comment.id} className="review-card">
                    <div className="review-card__head">
                      <p className="title title--h4">{comment.userName}</p>
                      <time className="review-card__data" dateTime="2022-04-13">{dayjs(comment.createAt).format('MMMM D')}</time>
                    </div>
                    <div className="rate review-card__rate">
                      {
                        [...Array(comment.rating).fill(null).map(getRandomPositiveInteger)].map((element, index) => <svg key={element} width={17} height={16} aria-hidden="true"><use xlinkHref="#icon-full-star"/></svg>)
                      }
                      {
                        [...Array(5 - comment.rating).fill(null).map(getRandomPositiveInteger)].map((element, index) => <svg key={element} width={17} height={16} aria-hidden="true"><use xlinkHref="#icon-star"/></svg>)
                      }
                      <p className="visually-hidden">Оценка: {comment.rating}</p>
                    </div>
                    <ul className="review-card__list">
                      <li className="item-list">
                        <span className="item-list__title">Достоинства:</span>
                        <p className="item-list__text">{comment.advantage}</p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Недостатки:</span>
                        <p className="item-list__text">{comment.disadvantage}</p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Комментарий:</span>
                        <p className="item-list__text">{comment.review}</p>
                      </li>
                    </ul>
                  </li>
                ))
              }
            </ul>
            {
              indexComments * COMMENT_PAGE < currentComments.length ?
                <div className="review-block__buttons">
                  <button className="btn btn--purple" type="button" onClick={() => setIndexComments(indexComments + 1)}>
                    Показать больше отзывов
                  </button>
                </div>
                : ''
            }
          </div>
        </section>
      </div>
    );
  } else {
    return (<div></div>);
  }
}

export default Reviews;
