import css from './Button.module.css';

export const Button = ({ takePageOnClick }) => (
  <button className={css.button} onClick={takePageOnClick}>
    Load more
  </button>
);
