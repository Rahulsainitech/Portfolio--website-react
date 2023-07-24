import React, { useState } from 'react';
import signpic from '../images/1.png'
import { NavLink, useHistory } from 'react-router-dom';
import Footer from './Footer';



const Register = () => {
    const history = useHistory();
    const [user, setUser] = useState({ name: "", email: "", password: "", cpassword: "" })
    let name, value;
    const userInput = (event) => {
        console.log("event",event)
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value })
    }
    const postData = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = user;
        console.log(email,name,password,cpassword)
        const res = await fetch('https://portfolio-backend-nodejs.onrender.com/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password, cpassword })
            
        });
        const data = await res.json();
        console.log("data after response",data)
        if (res.status === 422 ) {
            window.alert("please filled the field properly")
            console.log("please filled the field properly")
        }else if (res.status === 423 ) {
            window.alert("User Already exist")
            console.log("User Already exist")
        }else if (res.status === 424 ) {
            window.alert("password is not matched")
            console.log("password is not matched")
        }
         else if(res.status === 201){
            window.alert("Registration Successfull")
            console.log("Successfull Registration")
            history.push("/signin")
        }else{
            window.alert(res.status)
            console.log("Something went wrong try again after some time")
        }
    }
    return (
        <>
            <section className="sign mt-5">
                <div className="container">
                    <div className="row">
                        <form method="POST" className='form  col-12 offset-md-1 order-md-first col-md-5 mt-5'>
                            <h3 className="display-5 bg-light p-2">Sign Up</h3>
                            <div className="form-group">
                                <i className="fas fa-user" />
                                <input type="text" className="form-control" name="name" value={user.name} onChange={userInput} id="name" autoComplete="off" placeholder="Enter Your Name" />
                            </div>
                            <div className="form-group">
                                <i className="fas fa-envelope-open-text" />
                                <input type="email" className="form-control" name="email" value={user.email} onChange={userInput} id="email" aria-describedby="emailHelp" autoComplete="off" placeholder="Enter Email" />
                            </div>
                
                            <div className="form-group">
                                <i className="fas fa-lock" />
                                <input type="password" className="form-control" name="password" value={user.password} onChange={userInput} id="password" autoComplete="off" placeholder="Enter Password" />
                            </div>
                            <div className="form-group">
                                <i className="fas fa-lock" />
                                <input type="password" className="form-control" name="cpassword" value={user.cpassword} onChange={userInput} id="cpassword" autoComplete="off" placeholder="Confirm Password" />
                            </div>
                            <div className="form-group pl-1">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" /><span>Remember Password</span>
                            </div>
                            <div className='form-group'>
                                <input type="submit" onClick={postData} value="Register" className="btn btn-primary" />
                            </div>
                        </form>
                        <div className='order-first col-12 col-md-6 mt-5'>
                            <img src={signpic} alt="img" />
                        </div>

                    </div>

                </div>
            </section>
                <Footer />
        </>
    )
}

export default Register;