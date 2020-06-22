import React from 'react'
//your code here
const Comment = (props) => {
  return (
    <div className="comment">
      {props.commentText} 
    </div>
  )
}

export default Comment