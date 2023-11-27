import React from 'react'

/*
  This component renders the notification text in a <div> tag along with the relevant styles as indicated
  by the notification type
*/
const Notification = ({notification,isNotification}) => {
  function launch_toast() {
    var x = document.getElementById("toast")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}

if(isNotification){
  launch_toast();
}
  // If the notification state is null, then don't render anything
  // if (notification === null)
  //   return null
  // Render a <div> with the notification class style attached along with the type of notification ("success", "error")
  // The content of the div will be the text that's stored in the notification state
  return (
    // <div className={`${type} notification`}>
    //   {notification}
    <div>
    <div id="toast" style={{ backgroundColor:"#ECA778"}}><div id="img" style={{color:"black",zIndex:"1"}}></div><div id="desc">{notification}</div></div>
    </div>
  )
}

export default Notification