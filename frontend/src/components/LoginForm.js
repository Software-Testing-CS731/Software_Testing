import React, { useState } from 'react'

/*
  This component renders the Login Form with all its functionalities
  startLogin is the method that uses the axios service to submit login credentials to the backend
*/
const LoginForm = ({ startLogin }) => {
  // States for tracking form input which are the email address and password
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  // onSubmit event handler of this form
  const handleLogin = (event) => {
    // Preventing default submission of the form to the action attribute URL
    event.preventDefault()

    const credentials = {
      email, password
    }

    // Calling startLogin with the provided credentials that will make a call to the backend
    startLogin(credentials)

    // Reset the form state, i.e. the text that's on the username and password text boxes to empty strings
    setEmail('')
    setPassword('')
  }


  // Styled Form
  return (
    <div className='form-container'>
      <div className='form-box'>

        <div className='header-form'>
          <h4 className='text-primary text-center'>
            <p></p>
            <i className='fa fa-user-circle' style={{fontSize:'110px', color: 'lightblue',padding:"30px"}}></i>
          </h4>
          <div className='image'></div>
        </div>

        <div className='body-form' style={{paddingLeft:"500px"}}>
          <form onSubmit={handleLogin} id='login-form' style={{marginLeft:"15%"}}>

            <div className='input-group mb-3' style={{width:"500px",boxShadow:"2px 2px 2px 2px grey",borderRadius:"10px"}}>
              <div className='input-group-prepend'>
                <span className='input-group-text'><i className='fa fa-user'></i></span>
              </div>
              <input
                type='text'
                className='form-control'
                placeholder='Email Address'
                value={email}
                onChange={event => setEmail(event.target.value)}
                id='email'
                required
              />
            </div>

            <div className='input-group mb-3' style={{width:"500px",boxShadow:"2px 2px 2px 2px grey",borderRadius:"10px"}}>
              <div className='input-group-prepend'>
                <span className='input-group-text'><i className='fa fa-lock'></i></span>
              </div>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                value={password}
                onChange={event => setPassword(event.target.value)}
                id='password'
                required
              />
            </div>

            <button type='submit' className='btn btn-primary btn-block' id='login-submit' style={{width:"500px",boxShadow:"2px 2px 2px 2px grey",borderRadius:"10px"}}>LOGIN</button>
            <p style={{paddingBottom:"50px"}}></p>
          </form>
        </div>
      </div>
    </div>   
  )
}

export default LoginForm