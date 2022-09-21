import React from 'react'
import './Settings.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

export default function Settings() {
  return (
    <>
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
             <span className="settingsDeleteTitle">Delete Account</span>

        </div>      
                  <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img 
              src="https://images.unsplash.com/photo-1519205196298-7fc29cb73b3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" 
              alt="" 
              className='settingsPPImg'
              />
              <label htmlFor="fileInput">
              <i className=" settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:'none'}} />
            </div>
            
            <label> User Name</label>
            <input type="text" placeholder='Pelzman'/>
             <label> Email</label>
            <input type="email" placeholder='pelzman@gmail.com'/>
             <label> Password</label>
            <input type="password"/>
            <button className='settingsSubmit'>Update</button>
            </form>
         
          </div>
         
         <Sidebar/>
            
        
        </div>
        </>
  )
}
