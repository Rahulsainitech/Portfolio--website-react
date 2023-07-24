import React, { useEffect, useState } from 'react'

const Admin = () => {
    const [data, setData] = useState([])
    const Alldata = async () => {
        try {
            const res = await fetch("https://portfolio-backend-nodejs.onrender.com/getalldata", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            })
            const data = await res.json()
            setData(data)
            console.log("data from all data", data)
        } catch (error) {
            console.log("error", error)
        }

    }
    useEffect(() => {
        Alldata();
    }, []);
    return (
        <div className='table-responsive'>
            <table class="table table-striped ">
                <thead className='thead-dark'>
                    <tr>
                        <th scope="col">UserID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th>
                        <th scope="col">Reply  <i class="fas fa-location-arrow"/></th>
                    </tr>
                </thead>
                <tbody className='.table-hover'>
                    {
                        !data ? <h4>data is loading</h4> :
                            data.map((user) => {
                                const {name, email,messages, _id } = user
                                return (
                                    <tr key={_id}>
                                        <th scope="row">{_id}</th>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{
                                            messages.map((msg) => {
                                            return (<h6>{msg.message}</h6>)
                                        })}</td>
                                        <td><a href={"mailto:"+email}><i class="fas fa-location-arrow"/></a></td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Admin;