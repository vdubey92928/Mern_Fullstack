import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setData(() => (
            { ...data, [e.target.name]: e.target.value }
        ))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:5000/api/login', data);
        console.log(res);

    }

    return (
        <div>
            <form method='POST' onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="email" placeholder='Enter email' id="" />
                <br />
                <input type="password" onChange={handleChange} name="password" placeholder='Enter Password' id="" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login
