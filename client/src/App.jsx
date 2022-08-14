import './app.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import {
  Navigate,
  Redirect,
  Routes,
  Route,
} from "react-router-dom"

const App = () => {
  const user = true;

  return (
    <Routes>
      <Route path='/' element={user ? <Home/> : <Navigate to="/register" replace /> }/>
      
      <Route path='/register' element={! user ? <Register/> : <Navigate to="/" replace /> }/>
      <Route path='/login' element={! user ? <Login/> : <Navigate to="/" replace /> }/>
      
      {user && (
        <>
          <Route path='/movies' element={ <Home type="movie" /> }/>
          <Route path='/series' element={ <Home type="series" /> }/>

          <Route path='/watch' element={ <Watch/> }/>
        </>
      )}

      <Route path='*' element={<Navigate to="/" replace /> }/>
    </Routes>
  );
};

export default App;