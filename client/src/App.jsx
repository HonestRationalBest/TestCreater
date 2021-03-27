import React from 'react';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth.hook';
import { useRoutes } from './routes';

import style from './static/style/Body.module.sass';

<<<<<<< HEAD:client/src/App.jsx
const App = () =>{
=======
const App:React.FC = () =>{
  const { login, logout, userId, token } = useAuth()
>>>>>>> 5de45fdd21d12092ff908648dbc687527ece5b36:client/src/App.tsx

   const { login, logout, userId, token } = useAuth()

   let isAuth = !!token;
  
  const routes = useRoutes(isAuth)

  return (
    <AuthContext.Provider value={{
<<<<<<< HEAD:client/src/App.jsx
       login, logout, isAuth, userId, token
=======
       login, logout,isAuth, userId, token
>>>>>>> 5de45fdd21d12092ff908648dbc687527ece5b36:client/src/App.tsx
    }}>
    <div className={style.wrapper}>
      {routes}
    </div>
     </AuthContext.Provider>
  );
}

export default App;
