import React from 'react'
import { useRef } from 'react'
import axios from '../src/axiosConfig';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()

    const userNameDom = useRef();
    const firstnameDome = useRef();
    const lastnameDome = useRef();
    const emailDom = useRef();
    const passwordDome = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        const uservalue = userNameDom.current.value;
        const firstvalue = firstnameDome.current.value;
        const lastvalue = lastnameDome.current.value;
        const emailvalue = emailDom.current.value;
        const passwordvalue = passwordDome.current.value;
        if(
            !uservalue ||
            !firstvalue ||
            !lastvalue ||
            !emailvalue ||
            !passwordvalue
        ){
            alert('please provide all required information');
        }
        try {
            await axios.post('/user/register',{
                username:uservalue,
                firstname:firstvalue,
                lastname:lastvalue,
                email:emailvalue,
                password:passwordvalue
            })
            alert('register successfully. please login')
            navigate('/login')
        } catch (error) {
            alert("somthing went wrong")
            console.log(error.response)
        }

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input ref={userNameDom} type="text" placeholder='user name'/>
        </div>
        <br /><br />
        <div>
          <input ref={firstnameDome} type="text" placeholder='first name'/>
        </div>
        <br /><br />
        <div>
          <input ref={lastnameDome} type="text" placeholder='last name'/>
        </div>
        <br /><br />
        <div>
          <input ref={passwordDome} type="password" placeholder='password'/>
        </div>
        <br /><br />
        <div>
          <input ref={emailDom} type="email" placeholder='email'/>
        </div>
        <br /><br />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
