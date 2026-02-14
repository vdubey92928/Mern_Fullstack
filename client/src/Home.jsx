import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {

    const [user, setUser] = useState([]);

    const [isEdit, setIsEdit] = useState(false)
    const [editId, setEditId] = useState(null)

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

    useEffect(() => {
        handleFetch();
    }, [])

    const handleFetch = async () => {
        const users = await axios.get('http://localhost:5000/api/user');
        setUser(users.data);
    }

    const handleDelete = async (id) => {
        if (confirm("Are you sure want to delete?")) {
            const res = await axios.delete(`http://localhost:5000/api/user/${id}`);
            handleFetch();
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEdit) {
            let res = await axios.put(`http://localhost:5000/api/user/${editId}`, data)
            setIsEdit(false)
            setEditId(null)
        } else {
            let res = await axios.post('http://localhost:5000/api/user', data)
        }
        // alert(res.data.message)
        handleFetch();
        data.name = '',
            data.email = '',
            data.password = ''
    }

    const handleEdit = (item) => {
        setEditId(item._id)
        setIsEdit(true)
        setData({
            name: item.name,
            email: item.email,
            password: item.password
        })
    }

    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                Enter Name :
                <input type="text" value={data.name} name="name" onChange={handleChange} /> <br />
                Enter Email :
                <input type="email" value={data.email} name="email" onChange={handleChange} /> <br />
                Enter Password :
                <input type="password" value={data.password} name="password" onChange={handleChange} /> <br />

                <input type="submit" />

            </form>




            <table >
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody >
                    {user.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <button onClick={() => { handleDelete(item._id) }}>Delete</button>
                                <button onClick={() => { handleEdit(item) }}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home
