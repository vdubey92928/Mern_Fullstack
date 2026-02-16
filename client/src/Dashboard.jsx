import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const msg = localStorage.getItem('msg');
  if (msg != 'Login Successful') {
    useEffect(() => {
      navigate('/login');
    }, [])
  }

  const [file, setFile] = useState({
    picture: ''
  });

  const handleChange = (e) => {
    setFile(() => ({ ...file, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(file);

  }

  return (
    <div>
      Dashboard


      <button onClick={() => {
        localStorage.removeItem('id')
        localStorage.removeItem('msg')
        navigate('/login')
      }}>Logout</button>


      {/* file uploading code started */}
      <form onSubmit={handleSubmit} method='POST' encType='multipart/form-data'>

        <label htmlFor="file"> Chosse file</label>
        <input type="file" onChange={handleChange} name='picture' id='file' />
        <input type="submit" />
      </form>
      {/* file uploading code ending */}
    </div>
  )
}

export default Dashboard
