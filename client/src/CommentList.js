import React from 'react';

const CommentList = ({ comments }) => {

    const renderedComments = comments.map(comment => {
      let content;

      if(comment.status === 'accepted'){
        content = comment.content;
      }

      if(comment.status === 'rejected'){
        content = 'This comment has been rejected';
      }

      if(comment.status === 'pending'){
        content = 'This comment is pending moderation';
      }

        return <li key={comment.id}>{content}</li>
    });

  return (
    <ul>{renderedComments}</ul>
  )
}

// Parent: <PostList/>
export default CommentList