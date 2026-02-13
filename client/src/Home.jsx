import React, { useState } from 'react'
import axios from 'axios'
const Home = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setData(() => ({
            ...data,
            [e.target.name]: e.target.value
        }))



    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // let res = await fetch('http://localhost:5000/api/user', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)
        // })
        const res = await axios.post('http://localhost:5000/api/user', data)

    }

    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                Enter Name :
                <input type="text" name="name" onChange={handleChange} /> <br />
                Enter Email :
                <input type="email" name="email" onChange={handleChange} /> <br />
                Enter Password :
                <input type="password" name="password" onChange={handleChange} /> <br />

                <input type="submit" />

            </form>
        </div>
    )
}

export default Home
