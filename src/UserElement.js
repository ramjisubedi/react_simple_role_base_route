import React from 'react'
// import { Navigate } from 'react-router-dom'
const User_Types = {
    PUBLIC:'Public User',
    NORMAL_USER:'Normal User',
    ADMIN_USER:'Admin User',
  }
  
  const CURRENT_USER_TYPE = User_Types.PUBLIC
  localStorage.setItem('Role', CURRENT_USER_TYPE);
const UserElement = ({children}) => { 
    if(CURRENT_USER_TYPE===User_Types.ADMIN_USER || CURRENT_USER_TYPE===User_Types.NORMAL_USER){
        return ( <>{children}</> )
    }else{
        // return <Navigate to={"/"} />
        // return <Navigate to={"/pagenotfound"} />
        return ( <>You do not have access to this page!</> )
    }
    
 
}

export default UserElement