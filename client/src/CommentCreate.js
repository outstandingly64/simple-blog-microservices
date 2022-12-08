import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
        content
    });

    setContent('');
  };

  return (
    <div>
      <Form size={"small"} key={"small"} onSubmit={onSubmitHandler}>
        <Form.Field>
          <label>New Comment</label>
          <input
            placeholder="Comment..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Field>
        <Button type="submit">Comment</Button>
      </Form>
    </div>
  );
};

// Parent: <PostList/>
export default CommentCreate;
