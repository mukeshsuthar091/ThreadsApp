import { Button, Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import PostPage from "./Page/Postpage";
import UserPage from "./Page/UserPage";
import Header from "./Components/Header";

function App() {

  return (
    <Container maxW='620px'>
      <Header />
      <Routes>
        <Route path="/:username" element={<UserPage />}/>
        <Route path="/:username/post/:id" element={<PostPage />}/>
      </Routes>
    </Container>
  )
}

export default App
