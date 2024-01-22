// Components/SearchBar.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSearchTerm } from '../../redux/selectores';
import { setSearchTerm } from '../../redux/slices/search'
import styles from '@/components/searchbar/Search.module.scss'

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();


 const [word, setWord]=useState<string>("")
  const [error, setError] = useState<string>('');

  const handleWord = (event: ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
    setError('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (word.trim() === '') {
      setError('La búsqueda no puede estar vacía');
      return;
    }
    dispatch(setSearchTerm(word))
    setWord("")

 
  };

 


  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.containerInput}>
        <input className={styles.inputSong}
          required
          type="text"
          placeholder="Escribe el nombre de tu canción, artista o álbum de música favorito"
          value={word}
          onChange={handleWord}
        />
        </div>
        <div className={styles.containerButton}>
        <button type="submit">Buscar</button>
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SearchBar;
