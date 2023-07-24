import React, { useEffect, useState } from 'react';
import prof from '../images/5.png'
import Chats from './basics/Chats';
import Footer from './Footer';
import Skills from './basics/Skills';
import Procard from './basics/Procard';
import Pdf from './pdf/Pdf';

const Home = () => {
    const [userName, setUserName] = useState('')
    const [show, setShow] = useState(false);
    const userHome = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const data = await res.json();
            setUserName(data.name)
            setShow(true)
            console.log("data form get data is", data);


        } catch (err) {
            console.log(err)

        }
    }
    useEffect(() => {
        userHome();
    }, []);
    return (
        <>
            <div className="home-bg container-fluid mt-5">
                <div className="row">
                    <div className="img col-12  col-md-4">
                        <img src={prof} alt="img" />
                    </div>
                    <div className="home order-md-first col-12 col-md-8">
                        <h3>{show ? 'WELCOME' : 'Hi... I AM'}</h3>
                        <p className="text-center h2">{show ? userName : 'Rahul'}</p>
                        <h2 className="text-center">{show ? 'Happy to see you back 🥰' : 'Recently graduated from UIET KUK'}</h2>
                        <Pdf/>
                    </div>

                </div>
            </div>
            <div className='hmt'>
                <Procard />
                <Chats />
                <Skills />
                <Chats />
            </div>
            <Footer />

        </>
    )
}

export default Home;