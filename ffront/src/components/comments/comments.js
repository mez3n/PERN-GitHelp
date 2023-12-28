import React from 'react'
import './css/comments.css'
import mo from'../../imgs/mo.jpg'
function Comments() {
  return (
    <div className='pagecomment'>
     <div className='pagecommentwrapper'>
       <div className='commenttop'>
        <img className='commentimage' src={mo} alt=''>
        </img>
        <span className='commentname'>mohamedkhater</span>
       </div>
       <div className='commentcontent'>
        <p className='commenttyping'>blablablablablablablablablablablablavvblablablablablablablablablablablablablablabla</p>
       </div>
     </div>
    </div>
  )
}

export default Comments
