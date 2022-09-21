import React from 'react'
import Header from '../../Components/Header/Header'
import './Home.css'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/Sidebar/Sidebar'


export default function Home() {
  return (
    <>

    <Header/>    
       <div className='home'>      
       <Posts/>
       <Sidebar/>      
    </div>  
   

    </>
  )
}
