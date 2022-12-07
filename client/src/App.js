import React from "react";
import PostCreate from "./PostCreate";
import { Header, Container } from "semantic-ui-react";


const App = () => {
  return (
    <Container text>
       <Header as='h1'>Create a Post!</Header>
      <PostCreate />
    </Container>
  );
};

export default App;
