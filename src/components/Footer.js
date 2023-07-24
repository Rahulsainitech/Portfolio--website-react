import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../images/3.png';

const Footer = () => {
    return (
        <>
            <div className="footer container-fluid pb-md-5">
                <div className="container">
                    <div className="row pt-5">
                        <NavLink className="navbar-brand  col-12" to="#"><span><img src={logo} alt="logo" /></span> <strong>Rahul Saini</strong></NavLink></div>

                    <div className="row mt-2">
                        <div className="col-4 col-md-3">
                            <h3>Imp links</h3>
                            <a className="" href="/">Home  </a><br />
                            <a className="" href="/aboutme">About </a><br />
                            <a className="" href="contact">Contact</a><br />
                            <a className="" href="/signin">LogIn  </a>
                        </div>
                        <div className="col-4 col-md-3">
                            <h3>My project</h3>
                            <a href="https://sarvodya-public-school-xz.netlify.app/">School website</a><br />
                            <a href="https://saini-website.herokuapp.com/">Pizza Delivery App</a><br />
                            <a href="http://veducation4all.000webhostapp.com/">Education Web</a>
                        </div>
                        <div className="col-4 col-md-2">
                            <h3>Legal</h3>
                            <p>Terms & Conditions <br />
                                Privacy Policy <br />
                                Terms of use
                            </p>
                        </div>
                        <div className="col-12 mt-3 col-md-4">
                            <ul className="icon mt-md-5">
                                <a href = "mailto: rahuliim2001@gmail.com"><i class="fas fa-envelope-open-text" /></a>
                                <a href="https://www.instagram.com/rahul70563/"><i class="fab fa-instagram"></i></a>
                                <a href="google.com"><i class="fab fa-google" /></a>
                                <a href="https://wa.me/+917056305594?text=Hi%27,%20like%20to%20chat%20with%20you"><i class="fab fa-whatsapp"></i></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;