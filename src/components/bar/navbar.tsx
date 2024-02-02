import Link from 'next/link';
import * as React from 'react';
import bar from '@/components/bar/Navbar.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getSearchTerm,getLogin,getAuth } from '@/redux/selectores';
import { useRouter } from 'next/router';
import {setLogout} from '../../redux/slices/auth'

 export interface IAppProps {
}

export function Nabar () {
  const router=useRouter()
  const searchTerm = useSelector(getSearchTerm);
  const isLogin=useSelector(getLogin)
  const dispatch=useDispatch();
  

  const handleLogout = async () => {
    dispatch(setLogout(""))
    router.push("/")
    
  };

  return (
    <div>
      <nav className={bar.navbar}>
        <ul>
        <Link href='/'><li>inicio</li></Link>
          <Link href='/search'> <li>Buscar</li></Link>
          {!isLogin && (
          <Link href='/results/noresults'><li>Resultados</li></Link>
          )}
          {!isLogin && (
          <Link href='/login'> <li>Login</li></Link>
          )}
          {searchTerm  && isLogin && (
        <Link href={`/results/${encodeURIComponent(searchTerm)}`}>
          <li>Resultados </li>
        </Link>
       
      )}

        </ul>
        {isLogin &&(
        <div className={bar.logoutButtonContainer}>
        <button onClick={handleLogout} className={bar.buttonLogout}>Cerrar sesión</button>
        </div>
)}
     </nav>
    </div>
  );
}
export default Nabar;