import css from './Book.module.scss';
import { ReactComponent as IconHeart } from '../../assets/images/heart.svg';
// import iconHeart from '../../assets/images/heart.svg';

export const Book = ({ title, author, year, genre, favourite, cover }) => {
  return (
    <li className={css.book}>
      <div className={css.thumbWrapper}>
        <img className={css.thumbImg} src={cover} alt={title} />
        <button className={css.favBtn}>
          <IconHeart
            className={`${css.iconHeart} ${favourite ? css.favourite : ''}`}
          />
        </button>
      </div>
      <h3 className={css.title}>{title}</h3>
      <h4 className={css.author}>{author}</h4>
      <p className={css.year}>
        Year: <b>{year}</b>
      </p>
      <p className={css.genre}>
        Genre: <b>{genre}</b>
      </p>
    </li>
  );
};
