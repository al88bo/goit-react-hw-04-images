import { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { FetchingImages } from './FetchingImages/FetchingImages';
import { Flip } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const takeQuery = query => {
    setQuery(query);
    setPage(1);
  };

  const takePageOnClick = () => {
    setPage(page => page + 1);
  };

  return (
    <div>
      <Searchbar takeQuery={takeQuery} />
      <FetchingImages
        query={query}
        page={page}
        takePageOnClick={takePageOnClick}
      />
      <ToastContainer
        transition={Flip}
        position="top-center"
        autoClose={3000}
        theme="light"
        className={css.toast}
      />
    </div>
  );
};
