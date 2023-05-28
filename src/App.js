import './App.css';
import NavRoute from './NavRoute';
import { Link } from 'react-router-dom';



function App() {
  return (
    <>
    <div style={{display : 'flex', gap:12}}>
      <Link to={"/"}>Home</Link>
      <Link to={"/user"}>User</Link>
      {(localStorage.getItem('Role')==='Admin User')?
      <Link to={"/admin"}>Admin</Link>:null}
      <div>You are logged in as : {localStorage.getItem('Role')}</div>
    </div>
      <NavRoute />
    </>
  );
}

export default App;
