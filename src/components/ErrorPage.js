import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
           <section className="error mt-5">
               <div className="container-fluid">
                  <h1>404</h1> 
                  <h2>We Are Sorry Page Not Found</h2>
                  <p>The page you looking for might have been removed or It's name change or it's currently unavailable</p>  
                  <NavLink to='/' type="submit" className="btn btn-lg btn-primary">Back to Home Page </NavLink>
               </div>
           </section>
        </>
    )
}
export default ErrorPage;