import React, { createContext,useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Register from './components/SignUp'
import Login from './components/SignIn'
import Logout from './components/LogOut'
import ErrorPage from './components/ErrorPage';
import {initialState,reducer} from './components/reducer/Reducer'
export const UserContext= createContext()
const Routing=()=>{
    return(
        <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/aboutme">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/signup">
                    <Register />
                </Route>
                <Route path="/signin">
                    <Login />
                </Route>
                <Route path="/logout">
                    <Logout />
                </Route>
                <Route >
                    <ErrorPage />
                </Route>
            </Switch>
    )
}


const App = () => {
   
 const [state, dispatch] = useReducer(reducer,initialState)

    return (
        <>
            <UserContext.Provider value={{state,dispatch}}>
            <Navbar />
            <Routing />
            </UserContext.Provider>
        </>
    )
}

export default App;