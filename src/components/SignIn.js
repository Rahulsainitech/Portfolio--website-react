import React, { useState, useContext } from 'react';
import loginpic from '../images/20.webp'
import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import { UserContext } from '../App';
const Login = () => {
    const {  dispatch } = useContext(UserContext)
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = async (e) => {
        e.preventDefault();
        const res = await fetch('https://portfolio-backend-nodejs.onrender.com/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })

        });
        const data = res.json();
        console.log(data)

        if (res.status === 400) {
            window.alert("Invalid Credentials")
        }
        else if (res.status === 201) {
            dispatch({ type: "USER", payload: true })
            window.alert("logged In successfully")
            history.push('/')
        } else {
            window.alert(res)
            window.alert("Invalid Credentials 1234")
        }
    }
    return (
        <>
            <section className="sign mt-5">
                <div className="container">
                    <div className="row">
                        <div className='col-12 col-md-5 mt-5'>
                            <img src={loginpic} alt="img" />
                        </div>
                        <form method="POST" className='form col-12  col-md-5 mt-5 pt-5'>
                            <h3 className="display-5 bg-light p-2">Log In</h3>
                            <div class="form-group">
                                <i class="fas fa-envelope-open-text" />
                                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" />
                            </div>
                            <div class="form-group">
                                <i class="fas fa-lock" />
                                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} class="form-control" id="password" placeholder="Enter Password" />
                            </div>
                            <div class="form-group">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" /><span>Remember Password</span>
                            </div>
                            <div className='form-group'>
                                <input type="submit" onClick={loginUser} name="login" value="login" class="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Login;