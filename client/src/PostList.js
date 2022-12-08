import React, { useState, useEffect } from "react";
import axios from "axios";

import { Card } from "semantic-ui-react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(post => {
    
    return (
      <React.Fragment key={post.randomID}>
        <Card key={post.randomID}>
          <Card.Content header={post.title} />
          <Card.Content extra>
            <CommentList postId={post.randomID}/>
          </Card.Content>
          <Card.Content extra>
            <CommentCreate postId={post.randomID}/>
          </Card.Content>
        </Card>
      </React.Fragment>
    );
  });

  return <Card.Group centered>{renderedPosts}</Card.Group>;
};

export default PostList;
