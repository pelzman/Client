import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://images.unsplash.com/photo-1663446783006-5db76a63b27a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                A blanditiis nesciunt molestiae veritatis, beatae doloremque!
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                 <li className="sidebarListItem">Music</li>
                  <li className="sidebarListItem">Style</li>
                   <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                     <li className="sidebarListItem">Cinema</li>
            </ul>
     </div>
     <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span> 
      <div className="sidebarSocial">
         <i className='sidebarIcon fa-brands fa-square-facebook'></i>
            <i className='sidebarIcon fa-brands fa-square-twitter'></i>
            <i className='sidebarIcon fa-brands fa-square-pinterest'></i>
            <i className='sidebarIcon fa-brands fa-square-instagram'></i>
        </div> 
     </div>
     </div>
  )
}
