import React from 'react';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth.hook';
import { useRoutes } from './routes';

import style from './static/style/Body.module.sass';

const App:React.FC = () =>{
  const { login, logout, userId, token } = useAuth()

  let isAuth:boolean = !!userId;
  
  const routes = useRoutes(isAuth)

  return (
    <AuthContext.Provider value={{
       login, logout,isAuth, userId, token
    }}>
    <div className={style.wrapper}>
      {routes}
    </div>
    </AuthContext.Provider>
  );
}

export default App;
