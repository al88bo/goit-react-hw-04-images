import { useState } from 'react';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

export const Searchbar = ({ takeQuery }) => {
  const [inputStr, setInputStr] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();
    if (inputStr.trim() === '')
      return toast.warn('Enter your search query, please.');
    takeQuery(inputStr);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleOnSubmit}>
        <button type="submit" className={css.button}>
          <span className={css['button-label']}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          name="searchInput"
          onChange={e => setInputStr(e.target.value.toLowerCase())}
          value={inputStr}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        />
      </form>
    </header>
  );
};
