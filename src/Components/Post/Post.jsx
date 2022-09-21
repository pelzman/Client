import React from 'react'
import './Post.css'

export default function Post() {
  return (
    <div className='post'>
    <img  className='postImg'
    src="https://images.unsplash.com/photo-1663330082092-11fa01e1ee8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
    alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCats">Music</span>
            <span className="postCats">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className='postDesc'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Excepturi deserunt quia obcaecati nam rerum accusamus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Quas quos quod quam earum nulla hic eum, 
        tenetur corrupti veniam aperiam?
    </p>
    </div>
  )
}
