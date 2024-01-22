import React, { useState, FormEvent } from "react";
import loginStyles from '@/components/login/Login.module.scss';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación o enviar los datos del formulario a tu servidor
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
  };

  return (
    <div className={loginStyles.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Iniciar sesión</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
