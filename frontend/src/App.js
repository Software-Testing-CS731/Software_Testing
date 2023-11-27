import { useState, useEffect } from 'react'

import loginService from './services/login'
import domainService from './services/domains'

import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import Domains from './components/Domains'
import AddForm from './components/AddForm'

const App = () => {
  const [ user, setUser ] = useState(null)
  const [ domains, setDomains ] = useState([])
  const [ notification, setNotification ] = useState(null)
  const [ isFormOpen, setIsFormOpen ] = useState(false)
  const [ isNotification, setIsNotification ] = useState(false)
  const [ portalName, setPortalName ] = useState('Admin - Domain Portal')
  // const [ students, setStudents ] = useState([])
  const notificationHandler = (message) => {
    setNotification(message)
    //setNotificationType(type)

    setTimeout(() => {
      setIsNotification(false)
      setNotification(null)
    }, 3000)
  }

  // Function that handles login of users
  const handleLogin = async (credentials) => {
    try {
      const userObject = await loginService.login(credentials)
      setUser(userObject)
      window.localStorage.setItem('loggedInUser', JSON.stringify(userObject))
      setIsNotification(true)
      setPortalName('Admin - Domain Portal')
      notificationHandler(`Logged in successfully`)
      setDomains([])
    }
    catch (exception) {
      setIsNotification(true)
      notificationHandler(`Log in failed, verify Credentials`)
    }
  }

  const addDomain = async(data) => {
    try{
      await domainService.addDomain(data)
      setIsNotification(true)
      setPortalName('Admin - Domain Portal')
      notificationHandler(`Added New Domain successfully`)
    }
    catch(exception){
      setIsNotification(true)
      notification(`Failed to add new Domain`)
    }
  }

  const modifyDomain = async(data) => {
    try{
      await domainService.modifyDomain(data)
      setIsNotification(true)
      notificationHandler(`Updated Domain successfully`)
    }
    catch(exception){
      setIsNotification(true)
      notification(`Failed to Update Domain`)
    }
  }

  useEffect(() => {
      async function fetchData() {
        if (user) {
          const domains = await domainService.getUserDomains(user)
          domains.map(async d=>{
            const studentObject = await domainService.viewStudents(d)
            d["students"]=studentObject;
          })
          setDomains(domains)
        }
      }
      fetchData()
  }, [user])


  // Effect Hook that parses the local storage for 'loggedInUser' and sets the "user" state if a valid match is found
  // This enables user to login automatically without having to type in the credentials. Caching the login if you will.
  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser)
      setUser(JSON.parse(loggedInUser))
  }, [])

  return (
    <div style={{color:"#2FEBD2",backgroundColor:"#454d55",height:"890px"}}>
      {/* Header of the page */}
      <div className='text-center page-header p-2'>
          <div className='font-weight-bold'>
            <p style={{fontSize:"60px",font:"small-caps bold 24px/1 sans-serif"}}>{portalName}</p>
          </div>
      </div>
      
      {/* Notification component that will render only when the notification state is not null */}
      <Notification notification={notification} isNotification={isNotification}/>

      {
        /* Show Login form when no login has happened */
        user === null && 
        <LoginForm startLogin={handleLogin}/>
      }

      {
        /* Show NavBar when login has happened */
        user !== null && 
        <NavBar user={user} setIsFormOpen={setIsFormOpen} setUser={setUser} setPortalName={setPortalName}/>
      } 

      {
        user !== null && isFormOpen &&
        <AddForm setPortalName={setPortalName}
                  addDomain = {addDomain}></AddForm>
      }

      {
        /* Show Bills of the User when login has happened */
        user !== null &&
        <Domains
          domains={domains}
          modifyDomain = {modifyDomain}
        />
      }
    </div>
  )
}

export default App;
