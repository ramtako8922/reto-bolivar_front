import Link from 'next/link';
import * as React from 'react';
import bar from '@/components/bar/Navbar.module.scss'
import { useSelector } from 'react-redux';
import { getSearchTerm } from '@/redux/selectores';

export interface IAppProps {
}

export function Nabar () {

  const searchTerm = useSelector(getSearchTerm);
  return (
    <div>
      <nav className={bar.navbar}>
        <ul>
        <Link href='/'><li>inicio</li></Link>
          <Link href='/search'> <li>Buscar</li></Link>
          <Link href='/results/noresults'> <li>Resultados</li></Link>
          <Link href='/login'> <li>Login</li></Link>
          {searchTerm && (
        <Link href={`/results/${encodeURIComponent(searchTerm)}`}>
          <li>Ver resultados de búsqueda</li>
        </Link>
      )}

        </ul>
     </nav>
    </div>
  );
}
export default Nabar;