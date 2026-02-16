import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
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


        if (res.data.msg == "Login Successful") {
            localStorage.setItem("id", res.data.id);
            localStorage.setItem("msg", res.data.msg);
            navigate('/dashboard')
        } else {
            alert('Incorrect Credentials')
        }

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
