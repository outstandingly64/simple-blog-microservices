import React, {useState} from "react";
import axios from 'axios';
import { Button, Form } from "semantic-ui-react";

const PostCreate = () => {
    const [title, setTitle] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('');
    };

  return (
    <div>
      <Form size={'huge'} key={'huge'} onSubmit={onSubmitHandler}>
        <Form.Field>
          <label>Title of Post</label>
          <input
            placeholder="Title..."
            value={title}
            onChange={ e=> setTitle(e.target.value)}
            />
        </Form.Field>
        <Button type="submit">Post</Button>
      </Form>
    </div>
  );
};

export default PostCreate;
