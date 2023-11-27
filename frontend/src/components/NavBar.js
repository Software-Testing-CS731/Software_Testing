import React from 'react'
/*
  This component is used for rendering the Nav Bar which contains the following,
  - Welcome message for the logged in user
  - Logout Button
  - In more complex webpages you can include routes here with the help of React-Router
*/
const NavBar = ({ user, setUser, setIsFormOpen,setPortalName }) => {
  // If the Logout button has been clicked then clear the loggedInUser object from localStorage and
  // update "user" state to null, in order to logout, otherwise on the next reload, the Effect hook will again read the user
  // from the localStorage and relogin without showing the login form
  const logout = () => {
    window.localStorage.removeItem('loggedInUser')
    setPortalName('Admin - Login Portal')
    setUser(null)
  }


  // Prevents Key Exception errors if "user" state hasn't loaded yet
  if (!user)
    return null

  // Fully styled Navbar using Bootstrap (it can be a big pain to style Navbars)
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-dark" style={{width:"1815px",marginLeft:"50px",borderRadius:"15px",height:"60px"}}>
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a id="navL" style={{paddingLeft:"30px",fontWeight:"bold",fontSize:"18px"}}>Home</a>
        </li>
        <li class="nav-item">
          <a id="navL_addDomain" data-toggle="modal" data-target="#form" style={{paddingLeft:"100px",fontWeight:"bold",fontSize:"18px"}} onClick={()=> setIsFormOpen(true)}>Add Domains</a>
        </li>
       
      </ul>
    </div>

    <div class="d-flex align-items-center">
    <li class="nav-item">
          <a id="navR" style={{fontWeight:"bold",fontSize:"18px"}} onClick={logout} > Logout</a>
        </li>
    </div>
  </div>
</nav>
    // <div className='regular-shadow mb-1'>
    //   <nav className='navbar navbar-expand-lg navbar-dark' id='menu'>
    //     {/* UPDATE user.name PROPERTY IF IT DOESN'T EXIST */}
    //     <button className='navbar-brand btn btn-link border border-light p-2'>Welcome, {user.name}</button>
        
    //     {/* Bootstrap element for hamburger menu on collapse */}
    //     <button
    //       className='navbar-toggler' type='button'
    //       data-toggle='collapse' data-target='#navbarSupportedContent'
    //       aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'
    //     >
    //       <span className='navbar-toggler-icon'></span>
    //     </button>
        
    //     {/* This menu will be collapsed under Hamburger Menu if screen size becomes small enough */}
    //     <div className='collapse navbar-collapse' id='navbarSupportedContent'>
    //       <ul className="navbar-nav mr-auto">
    //         <li className="nav-item active">
    //           {/* Here you can put a Link of React-Router, not of use right now but helpful for the future */}
    //           Home 
    //         </li>
    //       </ul>
          
    //       {/* Logout button */}
    //       <div className='inline my-3 my-lg-0'><button className='btn btn-primary' onClick={()=> setIsFormOpen(true)}>Add Domain</button></div>
    //       <div className='inline my-2 my-lg-0'><button className='btn btn-primary' onClick={logout}>Logout</button></div>
    //     </div>
    //   </nav>
    // </div>
  )
}

export default NavBar