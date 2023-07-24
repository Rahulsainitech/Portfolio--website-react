import React, { useEffect, useState } from 'react';
import propic from '../images/4.jpeg'
import propic1 from '../images/propic1.png'
import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import Admin from './Admin/Admin';


const About = () => {
    const history = useHistory();
    const [userData, setUserData] = useState({})
    const callAboutPage = async () => {
        try {
            const res = await fetch('https://portfolio-backend-nodejs.onrender.com/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            setUserData(data)
            console.log(data);
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
        callAboutPage();
    }, []);
    return (
        <>
            <section className="about ">
                <form className='container mt-5 mb-5' method="GET" >
                    <h3 className={userData.email !== 'rahuliim2001@gmail.com' ? 'col-12 mt-5 bg-light' : 'd-none'}>User Registration Details</h3>
                    <div className="row p-md-5">
                        <div className="order-1 col-12 col-md-4 d-flex justify-content-center">
                            <img src={userData.email === 'rahuliim2001@gmail.com' ? propic : propic1} alt="Rahul" ></img>
                        </div>
                        <div className="order-3 col-12 col-md-6 ">
                            <div className='profile_head pb-md-5 pt-4'>
                                <h5>{userData.name}</h5>
                                <h6>{userData.work}</h6>
                                <p className="pt-2"> Rankings 1/10</p>
                            </div>
                            <ul class="nav nav-tabs mt-5 ">
                                <li class="nav-item ">
                                    <a class="nav-link active text-dark" id="home-tab" data-toggle="tab" role="tab" href="#home">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark" id="home-tab" data-toggle="tab" role="tab" href="#profile">Timeline</a>
                                </li>
                            </ul>
                        </div>
                        <div className="order-md-3 col-12 col-md-2  p-4">
                            <input className="edit-btn" type="submit" value="edit profile" />
                        </div>
                    </div>
                    <div className="row p-md-5">
                        {/* left side url */}
                        <div className={userData.email === 'rahuliim2001@gmail.com' ? 'col-3 col-md-4' : 'd-none'}>
                            <div className="profile-work">
                                <p>Work Link</p>
                                <a href="https://github.com/Rahulsainitech" target="rahul">GIt Hub</a><br />
                                <a href="https://www.linkedin.com/in/rahul-saini-6a20431b0" target="rahul">Linkdin</a><br />
                                <a href="https://www.instagram.com/rahul70563/" target="rahul">Instagram</a><br />
                                <a href="https://www.youtube.com/" target="rahul">Youtube</a><br />
                                <a href="https://www.google.com/" target="rahul">Google</a><br />

                            </div>
                        </div>
                        <div className='col-9 col-md-8'>
                            <div className="tab-content profile-tab" id="myTableContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby='home-tab'>
                                    <div className='row'>
                                        <div className='col-4 col-md-6'>
                                            <p>User ID</p>
                                            <p>Name</p>
                                            <p>Email</p>
                                            <p>Phone </p>
                                            <p>Profession</p>
                                        </div>
                                        <div className='col-8 col-md-6'>
                                            <p className='text-truncate'>{userData._id}</p>
                                            <p>{userData.name}</p>
                                            <p className='text-truncate'>{userData.email}</p>
                                            <p>{!userData.phone?"not available":userData.name} </p>
                                            <p>{!userData.work?"not available":userData.work}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade " id="profile" role="tabpanel" aria-labelledby='home-tab'>
                                    <div className={userData.email === 'rahuliim2001@gmail.com' ? 'row' : 'd-none'}>
                                        <div className='col-6 col-md-6'>
                                            <p>Experience</p>
                                            <p>Total Project</p>
                                            <p>Git-Hub</p>
                                            <p>Linkdin</p>
                                            <p>Availblity</p>

                                        </div>
                                        <div className='col-6 col-md-6'>
                                            <p>Beginner</p>
                                            <p>8</p>
                                            <p><a href="https://github.com/Rahulsainitech">https://github.com/Rahulsainitech</a></p>
                                            <p><a href="https://www.linkedin.com/in/rahul-saini-6a20431b0/">https://www.linkedin.com/in/rahul-saini-6a20431b0/</a></p>
                                            <p>Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>
            </section>
            <div className={userData.email === 'rahuliim2001@gmail.com' ? 'container' : 'd-none'}>
                <h4 className='text-center m-4'>All Registration data</h4>
                <Admin />
            </div>
            <Footer />
        </>
    )
}

export default About;