import React from 'react'
import Home from './Home';
import User from './User';
import Admin from './Admin';
import PublicElement from './PublicElement';
import UserElement from './UserElement';
import {Route, Routes} from "react-router-dom";

const NavRoute = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={ <PublicElement><Home /></PublicElement>}></Route>
        <Route path="/user" element={<UserElement><User /></UserElement>}></Route>
        <Route path="/admin" element={<UserElement><Admin /></UserElement>}></Route>
        <Route path="*" element={<div>Page Not Found</div>}></Route>
      </Routes>
      </>
  )
}

export default NavRoute