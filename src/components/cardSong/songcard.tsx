// components/Card.tsx
import React from 'react';
import styles from '@/components/cardSong/Card.module.scss'; 
 import { Artist } from '@/interfaces/interfaces';
interface CardProps {
  artist: Artist;
}

const Card: React.FC<CardProps> = ({ artist }) => {
  return (
    <div className={styles.card}>
      <h3> Nombre: {artist.artists[0].name}</h3>
      <p>Canción: {artist.name}</p>
      <p>Album: {artist.album.name}</p>
      <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
        <button className={styles.button}>Escucha en Spotify</button>
      </a>
    </div>
  );
};

export default Card;
