import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';

const Contact = () => {
    const [userData, setUserData] = useState({ name: "", email: "", message: "" })
    const history = useHistory();
    const userContact = async () => {
        try {
            const res = await fetch('https://portfolio-backend-nodejs.onrender.com/getdata', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                 "Content-Type": "application/json"
                },
                credentials: "include"
            
            })
            const data = await res.json();
            setUserData({ ...userData, name: data.name, email: data.email,message:data.message})
            console.log("data form get data is", data);
            if (!res.status === 200) {
               
                const err = new Error(res.error);
                throw err;
                
            }

        } catch (err) {
            console.log(err)
            history.push('/signin')
        }
    }
    useEffect(() => {
        userContact();
    });

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserData({ ...userData, [name]: value })
    }
    // save the data
    const contactForm = async (e) => {
        e.preventDefault();
        const { name, email, message } = userData;
        console.log(name,email,message,"fdfk")
        const res = await fetch('/contact', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, message })
        })
        const data = await res.json()
        // console.log(data)

        if (res.status===201) {
            // console.log("message not send")
            alert(data.error)
        } else {
            alert("message sent")
            setUserData({ ...userData, "message": "" })
        }
    }

    return (
        <>
            <section className="contact ">
                <div className="container mt-5">
                    <div className="row d-flex justify-content-between">
                        <div className="col-12 col-md-3  d-flex ">
                            <i class="fas fa-envelope-open-text" />
                            <div className="pt-3">
                                <h4>Email</h4>
                                <a href="email">rahul@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3  d-flex">
                            <i class="fas fa-phone-square" />
                            <div className="mt-3">
                                <h4>Phone</h4>
                                <a href="tel">+91678493722</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 d-flex">
                            <i class="fas fa-chalkboard-teacher" />
                            <div className="mt-1">
                                <h4>Address</h4>
                                <address>firozepur Jhirka,Nuh</address>
                            </div>
                        </div>
                    </div>
                    <div className="row message mt-5">
                        <div className="col-12 col-md-10 ">
                            <form method="post" className="container mt-5 p-md-5">
                                <h2 className="display-5 offset-md-.5 mb-4">Get In Touch</h2>
                                <div className="row ">
                                    <div className="col-12  col-md-4"><input type="text" className="form-control mt-2" id="name" name="name" value={userData.name} onChange={handleInput} placeholder="Enter Your Name" required /></div> 
                                     <div className="col-12  col-md-4"><input type="email" className="form-control mt-2" id="email" name="email" value={userData.email} onChange={handleInput} placeholder="Enter Email" required /></div>
                                     <div className="col-12  col-md-4"><input type="tel" className="form-control mt-2" id="phone" name="phone" value="not available" onChange={handleInput} placeholder="Enter Phone" required /></div>
                                </div>
                                <div className="row  mt-5">
                                    <textarea className="col-12 col-md-11 textarea " name="message" onChange={handleInput} placeholder="Enter Message Here" />
                                    <input className="btn  btn-primary mt-4" type="submit" onClick={contactForm} value="Send Message" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Contact;