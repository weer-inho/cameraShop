import {useAppSelector, useAppDispatch, reviewType} from '../../types/types';
import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import dayjs from 'dayjs';
import {createCommentAction} from '../../store/api-actions';
import {getCurrentComments} from '../../store/offer-data/selectors';
import Rating from '../rating/rating';

function Reviews(): JSX.Element {
  const COMMENT_PAGE = 3;
  const {id} = useParams();
  const currentComments = useAppSelector(getCurrentComments);
  const [indexComments, setIndexComments] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalNarrowOpen, setModalNarrowOpen] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [formData, setFormData] = useState({review: '', advantage: '', disadvantage: '', userName: '', rating: 0,});

  const dispatch = useAppDispatch();

  const onSubmit = (commentData: reviewType) => {
    dispatch(createCommentAction(commentData));
    setFormData({rating: 0, review: '',advantage: '',disadvantage: '', userName: ''});
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setModalOpen(false);
    setModalNarrowOpen(true);

    if (!isSubmitDisabled && id) {
      onSubmit({
        id: `i${id}`,
        userName: formData.userName,
        advantage: formData.advantage,
        disadvantage: formData.disadvantage,
        review: formData.review,
        rating: formData.rating,
        createAt: dayjs().format(),
        cameraId: Number(id),
      });
    }
  };

  useEffect(() => {
    setIsSubmitDisabled(!(formData.userName !== '' && formData.advantage !== '' && formData.disadvantage !== '' && formData.review !== '' && formData.rating !== 0));
  }, [formData]);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  if (currentComments.length > 0) {
    const showedComments = currentComments.slice(0, indexComments * COMMENT_PAGE);

    return (
      <>
        <div className="page-content__section">
          <section className="review-block">
            <div className="container">
              <div className="page-content__headed">
                <h2 className="title title--h3">????????????</h2>
                <button className="btn" type="button" onClick={() => setModalOpen(true)}>
                  ???????????????? ???????? ??????????
                </button>
              </div>
              <ul className="review-block__list">
                {
                  showedComments.map((comment) => (
                    <li key={comment.id} className="review-card">
                      <div className="review-card__head">
                        <p className="title title--h4">{comment.userName}</p>
                        <time className="review-card__data" dateTime="2022-04-13">{dayjs(comment.createAt).format('MMMM D')}</time>
                      </div>
                      <div className="rate review-card__rate">
                        <Rating rating={comment.rating}/>
                        <p className="visually-hidden">????????????: {comment.rating}</p>
                      </div>
                      <ul className="review-card__list">
                        <li className="item-list">
                          <span className="item-list__title">??????????????????????:</span>
                          <p className="item-list__text">{comment.advantage}</p>
                        </li>
                        <li className="item-list">
                          <span className="item-list__title">????????????????????:</span>
                          <p className="item-list__text">{comment.disadvantage}</p>
                        </li>
                        <li className="item-list">
                          <span className="item-list__title">??????????????????????:</span>
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
                      ???????????????? ???????????? ??????????????
                    </button>
                  </div>
                  : ''
              }
            </div>
          </section>
        </div>
        <div className={`modal ${modalOpen ? 'is-active' : ''}`}>
          <div className="modal__wrapper">
            <div className="modal__overlay" onClick={() => setModalOpen(false)}/>
            <div className="modal__content">
              <p className="title title--h4">???????????????? ??????????</p>
              <div className="form-review">
                <form method="post" onSubmit={handleFormSubmit}>
                  <div className="form-review__rate">
                    <fieldset className="rate form-review__item">
                      <legend className="rate__caption">
                        ??????????????
                        <svg width={9} height={9} aria-hidden="true">
                          <use xlinkHref="#icon-snowflake"/>
                        </svg>
                      </legend>
                      <div className="rate__bar">
                        <div className="rate__group">
                          <input
                            className="visually-hidden"
                            id="star-5"
                            name="rate"
                            type="radio"
                            defaultValue={5}
                          />
                          <label
                            onClick={() => setFormData({...formData, rating: 5})}
                            className="rate__label"
                            htmlFor="star-5"
                            title="??????????????"
                          />
                          <input
                            className="visually-hidden"
                            id="star-4"
                            name="rate"
                            type="radio"
                            defaultValue={4}
                          />
                          <label
                            onClick={() => setFormData({...formData, rating: 4})}
                            className="rate__label"
                            htmlFor="star-4"
                            title="????????????"
                          />
                          <input
                            className="visually-hidden"
                            id="star-3"
                            name="rate"
                            type="radio"
                            defaultValue={3}
                          />
                          <label
                            onClick={() => setFormData({...formData, rating: 3})}
                            className="rate__label"
                            htmlFor="star-3"
                            title="??????????????????"
                          />
                          <input
                            className="visually-hidden"
                            id="star-2"
                            name="rate"
                            type="radio"
                            defaultValue={2}
                          />
                          <label
                            onClick={() => setFormData({...formData, rating: 2})}
                            className="rate__label"
                            htmlFor="star-2"
                            title="??????????"
                          />
                          <input
                            className="visually-hidden"
                            id="star-1"
                            name="rate"
                            type="radio"
                            defaultValue={1}
                          />
                          <label
                            onClick={() => setFormData({...formData, rating: 1})}
                            className="rate__label"
                            htmlFor="star-1"
                            title="????????????"
                          />
                        </div>
                        <div className="rate__progress">
                          <span className="rate__stars">0</span> <span>/</span>{' '}
                          <span className="rate__all-stars">5</span>
                        </div>
                      </div>
                      <p className="rate__message">?????????? ?????????????? ??????????</p>
                    </fieldset>
                    <div className="custom-input form-review__item">
                      <label>
                        <span className="custom-input__label">
                          ???????? ??????
                          <svg width={9} height={9} aria-hidden="true">
                            <use xlinkHref="#icon-snowflake"/>
                          </svg>
                        </span>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="userName"
                          placeholder="?????????????? ???????? ??????"
                          required
                        />
                      </label>
                      <p className="custom-input__error">?????????? ?????????????? ??????</p>
                    </div>
                    <div className="custom-input form-review__item">
                      <label>
                        <span className="custom-input__label">
                          ??????????????????????
                          <svg width={9} height={9} aria-hidden="true">
                            <use xlinkHref="#icon-snowflake"/>
                          </svg>
                        </span>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="advantage"
                          placeholder="???????????????? ???????????????????????? ????????????"
                          required
                        />
                      </label>
                      <p className="custom-input__error">?????????? ?????????????? ??????????????????????</p>
                    </div>
                    <div className="custom-input form-review__item">
                      <label>
                        <span className="custom-input__label">
                          ????????????????????
                          <svg width={9} height={9} aria-hidden="true">
                            <use xlinkHref="#icon-snowflake"/>
                          </svg>
                        </span>
                        <input
                          onChange={handleInputChange}
                          type="text"
                          name="disadvantage"
                          placeholder="?????????????? ???????????????????? ????????????"
                          required
                        />
                      </label>
                      <p className="custom-input__error">?????????? ?????????????? ????????????????????</p>
                    </div>
                    <div className="custom-textarea form-review__item">
                      <label>
                        <span className="custom-textarea__label">
                          ??????????????????????
                          <svg width={9} height={9} aria-hidden="true">
                            <use xlinkHref="#icon-snowflake"/>
                          </svg>
                        </span>
                        <textarea
                          onChange={handleInputChange}
                          name="review"
                          minLength={5}
                          placeholder="???????????????????? ?????????? ???????????? ??????????????"
                          defaultValue={''}
                        />
                      </label>
                      <div className="custom-textarea__error">
                        ?????????? ???????????????? ??????????????????????
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn--purple form-review__btn"
                    type="submit"
                    disabled={isSubmitDisabled}
                  >
                    ?????????????????? ??????????
                  </button>
                </form>
              </div>
              <button className="cross-btn" type="button" aria-label="?????????????? ??????????" onClick={() => setModalOpen(false)}>
                <svg width={10} height={10} aria-hidden="true">
                  <use xlinkHref="#icon-close"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`modal ${modalNarrowOpen ? 'is-active' : ''} modal--narrow`}>
          <div className="modal__wrapper">
            <div className="modal__overlay"></div>
            <div className="modal__content">
              <p className="title title--h4">?????????????? ???? ??????????</p>
              <svg className="modal__icon" width="80" height="78" aria-hidden="true">
                <use xlinkHref="#icon-review-success"></use>
              </svg>
              <div className="modal__buttons">
                <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button" onClick={() => setModalNarrowOpen(false)}>?????????????????? ?? ????????????????
                </button>
              </div>
              <button className="cross-btn" type="button" aria-label="?????????????? ??????????">
                <svg width="10" height="10" aria-hidden="true">
                  <use xlinkHref="#icon-close"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (<div></div>);
  }
}

export default Reviews;
