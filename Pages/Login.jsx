import React from 'react'
import { useRef } from 'react'
import axios from '../src/axiosConfig';
import { useNavigate } from 'react-router-dom';
const Login = () => {

     const navigate = useNavigate()
    const emailDom = useRef();
    const passwordDome = useRef();
    
      async function handleSubmit(e) {
        e.preventDefault();
        const emailvalue = emailDom.current.value;
        const passwordvalue = passwordDome.current.value;
      const ismach = !passwordvalue
      console.log(ismach)
        if(!emailvalue || !passwordvalue){
             alert('please provide all required information');
             return;
        }
           
        try {
            const {data} = await axios.post('/user/login',{
                email:emailvalue,
                password:passwordvalue
            })
            alert('login successfully')
            localStorage.setItem('token',data.token)
            // navigate('/')
            console.log(data);
        } catch (error) {
            alert(error?.response?.data?.msg)
            console.log(error.response.data)
        }

    }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <div>
          <input ref={passwordDome} type="password" placeholder='password'/>
        </div>
        <br /><br />
        <div>
          <input ref={emailDom} type="email" placeholder='email'/>
        </div>
        <br /><br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
