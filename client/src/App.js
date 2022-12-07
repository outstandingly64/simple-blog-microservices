import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
import { Header, Container, Divider } from "semantic-ui-react";


const App = () => {
  return (
    <Container text>
       <Header as='h1'>Create a Post!</Header>
      <PostCreate />
      <Divider horizontal>Created Posts</Divider>
      <Header as='h1'>Posts</Header>
      <PostList/>
    </Container>
  );
};

export default App;
