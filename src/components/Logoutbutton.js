import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Logoutbtn = ()=>{
    return(
        <>
        <button type="submit" className='btn '><NavLink className="nav-link" to="/logout">Logout</NavLink></button>
        </>
    )
}

export default Logoutbtn;